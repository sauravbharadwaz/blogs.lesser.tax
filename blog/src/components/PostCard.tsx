import { Link } from 'react-router-dom'
import { imageUrl, readTime, formatDate, type PostListItem } from '../lib/sanity'

export function PostCard({ post }: { post: PostListItem }) {
  const cover = imageUrl(post.mainImage, 1440, 810)
  const avatar = imageUrl(post.author?.avatar, 64, 64)

  return (
    <li className="group">
      <Link to={`/${post.slug}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <div className="overflow-hidden rounded-xl">
          {cover ? (
            <img
              src={cover}
              alt={post.mainImage?.alt ?? ''}
              loading="lazy"
              className="aspect-video w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="aspect-video w-full bg-secondary" aria-hidden="true" />
          )}
        </div>
        {post.category && (
          <span className="mt-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
            {post.category.title}
          </span>
        )}
        <h2 className="mt-2 line-clamp-2 text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {' · '}
          {readTime(post.wordCount)}
        </p>
        {post.author && (
          <div className="mt-3 flex items-center gap-2.5">
            {avatar ? (
              <img src={avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
            ) : (
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-medium text-primary">
                {post.author.name?.charAt(0) ?? '?'}
              </span>
            )}
            <span className="text-sm font-medium text-foreground">{post.author.name}</span>
          </div>
        )}
      </Link>
    </li>
  )
}
