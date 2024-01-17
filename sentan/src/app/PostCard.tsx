import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type PostCardProps = {
  title: string
  content: string
}

const PostCard = ({ title, content }: PostCardProps) => {
  return (
    <Card className='flex h-60 w-full flex-col'>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </Card>
  )
}

export default PostCard
