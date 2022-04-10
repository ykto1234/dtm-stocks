import { collection, getDocs } from 'firebase/firestore'
import { NextPage } from 'next'
import React from 'react'
import VideoCard from 'src/components/videocard'
import { firestore } from '../libs/firebase/client'
import { VideoInfo } from '../types/video.d'

type Props = {
  videos: VideoInfo[]
}

const Page: NextPage<Props> = (props: Props) => {
  return (
    <>
      <div className='flex justify-center'>
        {props.videos?.map((data, i) => {
          return (
            <div key={i} className='mr-2'>
              <VideoCard
                key={i}
                title={data?.title}
                description={data?.title}
                videoUrl={data?.videoUrl}
                imageUrl={`http://img.youtube.com/vi/${data?.videoId}/mqdefault.jpg`}
                alt={data?.title}
              ></VideoCard>
            </div>
          )
        })}
      </div>
    </>
  )
}

Page.getInitialProps = async (): Promise<Props> => {
  const result = await getDocs(collection(firestore, 'version/1.0/videos'))
  const videos = result.docs.map((doc) => {
    return {
      ...(doc.data() as VideoInfo),
    }
  })
  return { videos }
}

export default Page
