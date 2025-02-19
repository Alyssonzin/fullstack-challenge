
interface Props {
    params: Promise<{ sessionId: string }>,
}

export default async function SessionPage({ params }: Props) {
    const { sessionId } = await params;

    return (
        <main>
            <h1>Sessions Page</h1>
            <p>Session ID: {sessionId}</p>
        </main>
    )
}