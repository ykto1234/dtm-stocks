import { collection, getDocs } from 'firebase/firestore'
import { NextPage } from 'next'
import React from 'react'
import { firestore } from '../lib/firebase/client'

type Props = {
  user: any
}

const Page: NextPage<Props> = (props: Props) => {
  return (
    <>
      <div>{JSON.stringify(props.user)}</div>
    </>
  )
}

Page.getInitialProps = async (): Promise<Props> => {
  const result = await getDocs(collection(firestore, 'version/1.0/videos'))
  const doc = result.docs[0]
  return {
    user: doc.data()!,
  }
}

export default Page
