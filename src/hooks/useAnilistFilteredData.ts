'use client';

import { useDeferredValue, useMemo } from 'react';

import { AnilistFavourites, AnilistMedia, AnilistMediaFilters, AnilistMediaList, AnilistSelectedTabType } from '@/lib/types/anilist.types';

const useAnilistFilteredData = (
    lists: AnilistMediaList[] | AnilistFavourites,
    filters: AnilistMediaFilters,
    selectedList: AnilistSelectedTabType
) => {
    const deferredSearchTerm = useDeferredValue(filters.search);
    const isFavourite = !Array.isArray(lists);

    const filteredData = useMemo(() => {
        if (!lists || (Array.isArray(lists) && lists.length === 0)) return [];
        let result: AnilistMedia[];

        // Step 1: Filter by selected list
        if (selectedList !== 'ALL') {
            const status = selectedList.toLowerCase();

            if (isFavourite) {
                result = status === 'anime' || status === 'manga' ? lists[status]?.nodes || [] : [];
            } else {
                result =
                    status !== 'anime' && status !== 'manga'
                        ? lists
                              .filter((list) => list.status === selectedList)
                              .flatMap((list) => list.entries.flatMap((entry) => entry.media || []) || []) || []
                        : [];
            }
        } else {
            result = isFavourite
                ? [...(lists.anime?.nodes || []), ...(lists.manga?.nodes || [])]
                : lists.flatMap((list) => list.entries.flatMap((entry) => entry.media || []) || []);
        }

        // Step 2: Apply deferred search term filter
        if (deferredSearchTerm) {
            const searchTerm = deferredSearchTerm.toLowerCase();
            result = result.filter((media) => {
                const { english, romaji, native } = media.title;
                return (
                    english?.toLowerCase().includes(searchTerm) ||
                    romaji?.toLowerCase().includes(searchTerm) ||
                    native?.toLowerCase().includes(searchTerm)
                );
            });
        }

        // Step 3: Apply additional filters
        result = result.filter((media) => {
            const { format, status, genres: mediaGenres, startDate, season } = media;
            const matchFormat = filters.format ? format?.toUpperCase() === filters.format.toUpperCase() : true;
            const matchStatus = filters.status ? status?.toUpperCase() === filters.status.toUpperCase() : true;
            const matchGenres = filters.genres
                ? filters.genres.every((genre) => mediaGenres?.map((g) => g.toUpperCase()).includes(genre.toUpperCase()))
                : true;
            const matchYear = filters.year ? startDate?.year === filters.year : true;
            const matchSeason = filters.season !== 'ALL' ? season === filters.season : true;

            return matchFormat && matchStatus && matchGenres && matchYear && matchSeason;
        });

        // Step 4: Apply sorting
        if (filters.sort) {
            result.sort((a, b) => {
                switch (filters.sort) {
                    case 'Title':
                        return (
                            (a.title.english ?? '').localeCompare(b.title.english ?? '') ||
                            (a.title.romaji ?? '').localeCompare(b.title.romaji ?? '') ||
                            (a.title.native ?? '').localeCompare(b.title.native ?? '')
                        );

                    case 'Year':
                        return (a.startDate?.year ?? 0) - (b.startDate?.year ?? 0);

                    case 'Average Score':
                        return (b.averageScore ?? 0) - (a.averageScore ?? 0);

                    case 'Popularity':
                        return (b.popularity ?? 0) - (a.popularity ?? 0);

                    case 'Last Updated':
                    default:
                        return 0;
                }
            });
        }

        return result;
    }, [lists, filters, selectedList, deferredSearchTerm, isFavourite]);

    return filteredData;
};

export default useAnilistFilteredData;
