import { Link } from 'react-router-dom'
import { imageUrl, readTime, formatDate, type PostListItem } from '../lib/sanity'

export function PostCard({ post }: { post: PostListItem }) {
  const cover = imageUrl(post.mainImage, 960, 640)
  const avatar = imageUrl(post.author?.avatar, 56, 56)

  return (
    <li className="group">
      <Link to={`/${post.slug}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <div className="relative overflow-hidden rounded-2xl">
          {cover ? (
            <img
              src={cover}
              alt={post.mainImage?.alt ?? ''}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="aspect-[3/2] w-full bg-secondary" aria-hidden="true" />
          )}
          {post.category && (
            <span className="absolute left-3 top-3 rounded-full bg-background px-3.5 py-1.5 text-sm font-medium text-foreground shadow-sm">
              {post.category.title}
            </span>
          )}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {' • '}
          {readTime(post.wordCount)}
        </p>
        <h2 className="mt-1.5 line-clamp-2 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h2>
        {post.author && (
          <div className="mt-3 flex items-center gap-2.5">
            {avatar ? (
              <img src={avatar} alt="" className="h-7 w-7 rounded-full object-cover" />
            ) : (
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-medium text-primary">
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
