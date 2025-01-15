
export default async function MoviePage({
    params,
}: {
    params: Promise<{ movieId: string }>
}) {
    const { movieId } = await params;

    return (
        <main>
            {movieId}
        </main>
    );
}