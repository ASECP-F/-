import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/database.types'
import AuthForm from './AuthForm'
import PostForm from './PostForm'
import PostViewer from './PostViewer'

const Home = () => {
  return <PostViewer />
}

export default Home
