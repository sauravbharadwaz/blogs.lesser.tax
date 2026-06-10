import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchPosts, isConfigured, type PostListItem } from '../lib/sanity'
import { PostCard } from '../components/PostCard'
import { PostCardSkeleton } from '../components/Skeleton'

export function BlogList() {
  const [posts, setPosts] = useState<PostListItem[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchPosts().then(setPosts).catch(() => setError(true))
  }, [])

  return (
    <main className="mx-auto w-full max-w-[720px] px-4 pt-10 pb-4 sm:px-6">
      <Helmet>
        <title>Blog — Lesser</title>
        <meta
          name="description"
          content="Tax strategy, equity compensation, and filing guides from the Lesser team."
        />
        <link rel="canonical" href="https://blog.lesser.tax/" />
        <meta property="og:title" content="Blog — Lesser" />
        <meta property="og:url" content="https://blog.lesser.tax/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="text-4xl font-bold text-foreground">Blogs</h1>

      {error && (
        <p className="mt-10 text-muted-foreground">
          {isConfigured
            ? "Couldn't load articles right now — please refresh in a moment."
            : 'The blog is not connected to Sanity yet — set VITE_SANITY_PROJECT_ID in the deployment environment variables.'}
        </p>
      )}

      {!error && posts?.length === 0 && (
        <p className="mt-10 text-muted-foreground">New articles coming soon.</p>
      )}

      <ul className="mt-8 space-y-12">
        {posts === null && !error ? (
          <>
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
          </>
        ) : (
          posts?.map((post) => <PostCard key={post._id} post={post} />)
        )}
      </ul>
    </main>
  )
}
