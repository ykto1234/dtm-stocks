import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import type { NextPage } from 'next'
import ShareIcon from '@material-ui/icons/Share'

type Props = {
  title: string
  description: string | null
  videoUrl: string | null
  imageUrl: string | null
  alt: string | null
}

const VideoCard: NextPage<Props> = (props: Props) => {
  return (
    <>
      <Card className='w-60 h-80 p-1' raised={true}>
        <a href={props?.videoUrl ?? ''} target='_blank' rel='noopener noreferrer'>
          <CardActionArea className='h-4/5 align-top'>
            <CardMedia
              component='img'
              className='max-h-40'
              height='160'
              image={
                props?.imageUrl ??
                'https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg'
              }
              src={props?.videoUrl ?? ''}
              alt={props?.alt ?? ''}
            />
            <CardContent className='max-h-40 h-40'>
              <Typography gutterBottom component='div'>
                {props?.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' className='truncate'>
                {props?.description ?? props?.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </a>
        <CardActions className='h-1/5 flex justify-end'>
          <Button size='small'>
            <ShareIcon className='mr-1'></ShareIcon>シェア
          </Button>
          <Button size='small'>詳細</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default VideoCard
