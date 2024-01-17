import { Button } from '@/components/ui/button'
import PostViewer from './PostViewer'
import { Link } from 'lucide-react'
import PostButton from './PostButton'

const Home = () => {
  return (
    <main className='flex flex-col'>
      <div className='flex w-full flex-row items-end justify-between p-16'>
        <label className='w-1/4 text-5xl '>せんたんソフトくん１号</label>
        <div className='w-1/4 text-lg'>
          これは先端ソフトウェア環境構築実践の授業をよりよくするための意見交換用掲示板です。
        </div>
        <PostButton />
      </div>
      <PostViewer />
    </main>
  )
}

export default Home
