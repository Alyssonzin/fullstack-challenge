export default function Loading() {
    return (
        <div className="loader relative inline-block w-12 h-12 border-4 border-white rounded-full box-border animate-spin">
            <div className="absolute w-14 h-14 border-4 border-transparent border-b-sky-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
}