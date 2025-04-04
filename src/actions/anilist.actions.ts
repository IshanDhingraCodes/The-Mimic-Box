'use server';

import { AnilistFavorites, AnilistMediaCollection, AnilistMediaType } from '@/lib/types/anilist.types';
import { createAniListErrorReturn, createSuccessReturn } from '@/lib/utils/createResponse.utils';
import { fetchAniListData } from '@/lib/utils/server.utils';

export const getAnilistUserMedia = async (token: string, userId: string, mediaType: AnilistMediaType) => {
    const query = `
        query ($userId: Int, $type: MediaType) {
            MediaListCollection(userId: $userId, type: $type) {
                lists {
                    name
                    status
                    entries {
						id
                        progress
                        status
                        updatedAt
                        createdAt
                        media {
                            id
                            type
                            format
                            chapters
                            status
                            description
                            duration
                            episodes
                            genres
                            averageScore
                            popularity
                            isFavourite
                            title {
                                romaji
                                english
                                native
                                userPreferred
                            }
                            bannerImage
                            coverImage {
                                large
                            }
                            startDate {
                                day
                                month
                                year
                            }
                        }
                    }
                }
            }
        }
    `;

    // const onlyIdsQuery = `
    //     query ($userId: Int, $type: MediaType) {
    //         MediaListCollection(userId: $userId, type: $type) {
    //             lists {
    //                 name
    //                 entries {
    //                     media {
    //                         id
    //                         idMal
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `;

    const [error, mediaListCollection] = await fetchAniListData<AnilistMediaCollection>(token, query, { userId, type: mediaType });
    if (error || !mediaListCollection) {
        console.error('Error fetching user data:', error);
        return createAniListErrorReturn('Error fetching user media', error);
    }

    return createSuccessReturn('User media fetched successfully', mediaListCollection?.MediaListCollection.lists);
};

export const fetchUserFavourites = async (token: string, userId: string) => {
    const query = `
        query ($userId: Int) {
            User(id: $userId) {
                favourites {
                    anime {
                        nodes {
                            id
                            type
                            format
                            chapters
                            status
                            description
                            duration
                            episodes
                            genres
                            averageScore
                            popularity
                            isFavourite
                            title {
                                romaji
                                english
                                native
                                userPreferred
                            }
                            bannerImage
                            coverImage {
                                large
                            }
                            startDate {
                                day
                                month
                                year
                            }
                        }
                    }
                    manga {
                        nodes {
                            id
                            type
                            format
                            chapters
                            status
                            description
                            duration
                            episodes
                            genres
                            averageScore
                            popularity
                            isFavourite
                            title {
                                romaji
                                english
                                native
                                userPreferred
                            }
                            bannerImage
                            coverImage {
                                large
                            }
                            startDate {
                                day
                                month
                                year
                            }
                        }
                    }
                }
            }
        }
    `;

    const [error, response] = await fetchAniListData<AnilistFavorites>(token, query, { userId });

    if (error || !response) {
        console.error('Error fetching user data:', error);
        return createAniListErrorReturn('Error fetching user favourites', error);
    }

    return createSuccessReturn('User favourites fetched successfully', response?.User.favourites);
};

// const fetchAniListIds = async (malIds, mediaType) => {
//     const query = `
//         query ($idMals: [Int], $type: MediaType) {
//             Page {
//                 media(idMal_in: $idMals, type: $type) {
//                     id
//                     idMal
//                 }
//             }
//         }
//     `;

//     const response = await anilistConfig.post('/', {
//         query,
//         variables: {
//             idMals: malIds,
//             type: mediaType,
//         },
//     });

//     return response;
// };

// const saveMediaEntry = async (token, mediaId, status, progress) => {
//     const mutation = `
//         mutation($mediaId: Int, $status: MediaListStatus, $progress: Int) {
//             SaveMediaListEntry(mediaId: $mediaId, status: $status, progress: $progress) {
//                 id
// 				status
// 				progress
//             }
//         }
//     `;

//     const response = await anilistConfig.post(
//         '/',
//         {
//             query: mutation,
//             variables: { mediaId, status, progress },
//         },
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         }
//     );

//     return response;
// };

// const toggleFavourite = async (token, mediaId, mediaType) => {
//     // Mutation strings for Anime and Manga
//     const mutationAnime = `
// 		mutation ToggleFavourite($mediaId: Int) {
// 			ToggleFavourite(animeId: $mediaId) {
// 				anime {
// 					nodes {
// 						id
// 					}
// 				}
// 			}
// 		}
// 	`;

//     const mutationManga = `
// 		mutation ToggleFavourite($mediaId: Int) {
// 			ToggleFavourite(mangaId: $mediaId) {
// 				manga {
// 					nodes {
// 						id
// 					}
// 				}
// 			}
// 		}
// 	`;

//     // Choose the correct mutation based on mediaType
//     const mutation = mediaType === 'anime' ? mutationAnime : mutationManga;

//     const response = await anilistConfig.post(
//         '/',
//         {
//             query: mutation,
//             variables: { mediaId },
//         },
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         }
//     );

//     // Extract favourite status from response
//     const favouriteNodes = response.data.data.ToggleFavourite[mediaType].nodes;
//     const isFavouriteNow = favouriteNodes.some((node) => node.id === mediaId);

//     // Return the updated favourite status
//     return isFavouriteNow;
// };

// const deleteMediaEntry = async (token, entryId) => {
//     const mutation = `
// 		mutation DeleteMediaListEntry($entryId: Int) {
// 			DeleteMediaListEntry(id: $entryId) {
// 				deleted
// 			}
// 		}
// 	`;

//     const response = await anilistConfig.post(
//         '/',
//         {
//             query: mutation,
//             variables: { entryId },
//         },
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         }
//     );

//     return response.data.data.DeleteMediaListEntry.deleted;
// };
