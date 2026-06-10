export function PostCardSkeleton() {
  return (
    <li className="animate-pulse" aria-hidden="true">
      <div className="aspect-[3/2] w-full rounded-2xl bg-muted" />
      <div className="mt-4 h-4 w-36 rounded-md bg-muted" />
      <div className="mt-2 h-6 w-11/12 rounded-md bg-muted" />
      <div className="mt-1.5 h-6 w-2/3 rounded-md bg-muted" />
      <div className="mt-3 flex items-center gap-2.5">
        <div className="h-7 w-7 rounded-full bg-muted" />
        <div className="h-4 w-28 rounded-md bg-muted" />
      </div>
    </li>
  )
}
