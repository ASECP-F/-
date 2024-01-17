'use client'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

type PostFormInputs = {
  title: string
  content: string
}

const PostForm = () => {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit } = useForm<PostFormInputs>()
  const onSubmit: SubmitHandler<PostFormInputs> = async (data) => {
    try {
      setLoading(true)
      const date: string = new Date().toISOString()
      const { error } = await supabase.from('posts').insert({
        id: uuidv4(),
        title: data.title,
        content: data.content,
        favorite: 0,
        created_at: date,
        updated_at: date,
      })
      if (error) throw error
      console.log(data)
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=' flex size-full flex-col items-center justify-center bg-stone-100  to-stone-200 px-8 py-12'>
      <h1 className='mb-8 text-3xl font-bold underline decoration-teal-900 decoration-double decoration-1 underline-offset-2'>
        新規投稿
      </h1>

      <div className='w-full '>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col  justify-center gap-12'
        >
          <div>
            <label
              htmlFor={'title'}
              className='flex w-full text-sm font-bold text-slate-700 '
            >
              タイトル
            </label>
            <input
              id={'title'}
              type={'text'}
              className={'flex w-full border-b-[1.5px] text-lg text-gray-800'}
              {...register('title')}
            />
          </div>

          <div>
            <label
              htmlFor={'content'}
              className='flex text-sm font-bold text-slate-700 '
            >
              内容
            </label>
            <textarea
              id={'content'}
              rows={10}
              defaultValue=''
              className={
                'size-full resize-none border-b-[1.5px] px-2 text-lg text-gray-800'
              }
              {...register('content')}
            />
          </div>
          <button
            type='submit'
            className='mt-6 w-36 rounded bg-teal-900 px-4 py-2 font-bold text-white
    hover:bg-teal-700 focus:outline-none'
          >
            <Link href='/'>投稿</Link>
          </button>
        </form>
      </div>
    </div>
  )
}

export default PostForm
