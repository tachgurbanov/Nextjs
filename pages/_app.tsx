import React,{useState}from 'react';
import '../styles/globals.scss'
import 'antd/dist/antd.css';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
function MyApp({ Component, pageProps }) {
  const [queryClient] =  useState(() => new QueryClient())
  return (
  <QueryClientProvider client={queryClient}>
  <Hydrate state={pageProps.dehydratedState}>
    <Component {...pageProps} /> 
 </Hydrate>
  </QueryClientProvider>)
}

export default MyApp
