import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";
import { ST } from "next/dist/shared/lib/utils";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Center h="100vh">
        <Stack
            align="center"
            bgColor="gray.600"
            p={16}
            rounded='lg'
            spacing={12}
            boxShadow="lg"
        >
          <Box
            bgColor="blue.500"
            w="fit-content"
            p={5}
            rounded='lg'
            boxShadow="md"
          >
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>
          <Button boxShadow="md">Sign in With Google</Button>
        </Stack>
      </Center>
    </>
  );
}
