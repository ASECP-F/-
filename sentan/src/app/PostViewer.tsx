'use client'
import {
  SupabaseClient,
  createClientComponentClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs'
import { useCallback, useEffect, useState } from 'react'
import { cookies } from 'next/headers'
import { Database } from '@/types/database.types'
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
import { supabase } from '@supabase/auth-ui-shared'

type Posts = {
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
        .select(`title, content, updated_at`)

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

  return (
    <div>
      <label>aaa</label>
    </div>
  )
}

export default PostViewer
