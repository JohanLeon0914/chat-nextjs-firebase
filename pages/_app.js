import { ChakraProvider } from "@chakra-ui/react"
import Login from "../components/Login"
import Sidebar from "../components/SideBar"
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    {/* <Login /> */}
    {/* <Sidebar /> */}
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
