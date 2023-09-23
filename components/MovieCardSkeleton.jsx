export default function MovieCardSkeleton({ withScroll = false }) {
  return (
    <div className="col-span-2">
      <div className="animate-pulse flex pb-4">
        <div className="max-w-sm w-full sm:w-64">
          <div
            className={`rounded-md bg-slate-700 h-64 sm:h-96 ${
              withScroll ? 'w-40 sm:w-64' : null
            }`}
          ></div>

          <div className="space-y-3 py-3">
            <div className="h-3 bg-slate-700 rounded"></div>
            <div className="h-3 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
