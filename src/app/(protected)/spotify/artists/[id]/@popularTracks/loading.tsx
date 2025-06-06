import { MusicTrackCardSkeleton } from '@/app/(protected)/spotify/_components/MusicTrackCard';

const Loading = () => {
    const skeletonArray = Array.from({ length: 5 });

    return (
        <section className="text-text-secondary">
            <h2 className="text-highlight font-alegreya mb-2 text-2xl font-semibold tracking-wide">Popular Tracks</h2>

            <div className="flex flex-col gap-2">
                {skeletonArray.map((_, idx) => (
                    <MusicTrackCardSkeleton key={idx} />
                ))}
            </div>
        </section>
    );
};

export default Loading;
