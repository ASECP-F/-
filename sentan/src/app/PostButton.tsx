'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const PostButton = () => {
  return (
    <div>
      <Button onClick={() => {}} variant='outline' size='huge'>
        <Link href='/post'>+ 新規投稿</Link>
      </Button>
    </div>
  )
}

export default PostButton
