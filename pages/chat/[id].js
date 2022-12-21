import { Avatar, Button, Flex, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import Sidebar from '../../components/Sidebar'
import Head from "next/head";

const Topbar = () => {
    return (
        <Flex
            bg='gray.100'
            h='81px' w='100%'
            align='center'
            p={5}
        >
            <Avatar src="" marginEnd={3} />
            <Heading size='lg'> user@gmail.com </Heading>
        </Flex>
    )
}

const BottomBar = () => {
    return (
        <FormControl 
            p={3}
        >
            <Input placeholder="Escribe un mensaje" />
            <Button type="submit" hidden autoComplete="off">Submit</Button>
        </FormControl>
    )
}

export default function Chat() {
  return (
    <Flex
        h="100vh"
    >

        <Head>
            <title>Grupo de chat</title>
        </Head>

        <Sidebar />

        <Flex
            flex={1}
            direction='column'
        >
            <Topbar />

            <Flex
                flex={1} direction='column'
                pt={4} mx={5}
                overflowX='scroll'
                sx={{scrollbarWidth: "none"}}
                className='chats-container'
            >
                <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} >
                    <Text>Message</Text>
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} alignSelf='flex-end'>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} alignSelf='flex-end'>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} alignSelf='flex-end'>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} alignSelf='flex-end'>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} alignSelf='flex-end'>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} alignSelf='flex-end'>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} alignSelf='flex-end'>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} alignSelf='flex-end'>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} alignSelf='flex-end'>
                    <Text>Message</Text>
                </Flex>

                <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1}>
                    <Text>Message</Text>
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' p={3} m={1} alignSelf='flex-end'>
                    <Text>Message</Text>
                </Flex>
            </Flex>

            <BottomBar />
        </Flex>

    </Flex>
  )
}
