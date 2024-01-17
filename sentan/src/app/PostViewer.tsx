'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useCallback, useEffect, useState } from 'react'
import { Database } from '@/types/database.types'
import PostCard from './PostCard'

type Posts = {
  id: string
  title: string | null
  content: string | null
  updated_at: string | null
}
const PostViewer = () => {
  const supabase = createClientComponentClient<Database>()
  const [posts, setPosts] = useState<(Posts | null)[]>()
  const [loading, setLoading] = useState<boolean>(true)

  const getPosts = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('posts')
        .select(`id, title, content, updated_at`)

      if (error && status !== 406) {
        throw error
      }

      if (data) setPosts(data)
      console.log('data', data)
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    if (!posts) getPosts()
    if (posts) setLoading(false)
  }, [posts, getPosts])

  if (!posts) return <div>loading...</div>
  return (
    <div className='flex w-full flex-row flex-wrap justify-center justify-items-start gap-8'>
      {posts?.map((post) => {
        if (!post || !post.title || !post.content)
          return <label>loading...</label>
        else
          return (
            <li key={post.id} className='flex w-1/5 list-none'>
              <PostCard title={post.title} content={post.content} />
            </li>
          )
      })}
    </div>
  )
}

export default PostViewer
