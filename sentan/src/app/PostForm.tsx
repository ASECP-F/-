'use client'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

type PostFormInputs = {
  title: string
  content: string
}

const PostForm = () => {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormInputs>()
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
      // console.error(error)
      if (error) throw error
      console.log(data)
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue='test' {...register('title', { required: true })} />
      <textarea
        defaultValue='test'
        {...register('content', { required: true })}
      />
      {errors.title && errors.content && <span>This field is required</span>}
      <input type='submit' />
    </form>
  )
}

export default PostForm
