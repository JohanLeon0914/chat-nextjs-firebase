import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Boomerland chat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className='chats-container' h='100vh'>
        <Sidebar />
      </Box>
      
    </div>
  )
}
