import React, {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/layout'
import { useQuery } from 'react-query'
import {axiosInstance} from 'utils/axiosInstance'
import { Table } from 'antd';
export default function FirstPost() {
const [page, setPage] = useState(0)
// const getPosts = async (page = 0) =>{
//     const {data} = await axiosInstance.get('/posts?_limit=10&_page=' + page);
//     return data
//     }
 
const getPosts = (page = 0) => axiosInstance.get('/posts?_limit=10&_page=' + page).then((res) => res.data )
 
const {
  isLoading,
  isError,
  error,
  data,
  isFetching,
  isPreviousData,
} = useQuery(['posts', page], () => getPosts(page), { keepPreviousData : true })

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: true, 
    width: '20%',
  },
  {
    title: 'Title',
    dataIndex: 'title',    
    width: '20%',
  },
  {
    title: 'Body',
    dataIndex: 'body',
  },
];


  return (  
    <Layout>    
      <Head>
        <title>First Post</title>
        <meta name="description" content="Place the meta description text here."/> 
        <meta name="author" content="Kerim Tachgurbanov"/> 
        <meta name="keywords" content="HTML, CSS, JavaScript"/> 
        <meta property="og:title" content="Page/Post Title" />
        <link rel="canonical" href="https://www.getcredo.com/"/>     
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Credo – Hire the best pre-vetted SEO, PPC, and digital marketing firms"/>
        <meta property="og:description" content="Looking to hire an SEO, PPC, or digital marketing firm/consultant? We’ve created a network of vetted providers and will help you hire the right one!"/>
        <meta property="og:url" content="https://www.getcredo.com/"/>
        <meta property="og:site_name" content="Credo"/>
        <meta property="og:image" content="https://www.getcredo.com/wp-content/uploads/2019/10/credo-mark-trans.png"/>
        <meta property="og:image:secure_url" content="https://www.getcredo.com/wp-content/uploads/2019/10/credo-mark-trans.png"/>
        <meta property="og:image:width" content="400"/>
        <meta property="og:image:height" content="400"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:description" content="Looking to hire an SEO, PPC, or digital marketing firm/consultant? We’ve created a network of vetted providers and will help you hire the right one!"/>
        <meta name="twitter:title" content="Credo – Hire the best pre-vetted SEO, PPC, and digital marketing firms"/>
        <meta name="twitter:site" content="@getcredo"/>
        <meta name="twitter:image" content="https://www.getcredo.com/wp-content/uploads/2019/10/credo-mark-trans.png"/>
        <meta name="twitter:creator" content="@getcredo"/>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
      </Head>
      <h1>First Post</h1>
      <span>Current Page: {page + 1}</span>
       <button
         onClick={() => setPage(old => Math.max(old - 1, 0))}
         disabled={page === 0}
       >
         Previous Page  
       </button> 
       <button
         onClick={() => {
           if (!isPreviousData && data) {
             setPage(old => old + 1)           
           } 
         }}
         // Disable the Next Page button until we know a next page is available
       disabled={isPreviousData || !data ? true:false }
       >
         Next Page
       </button>
      <h2>
      <Table
        columns={columns}
        rowKey={record => record.id}
        dataSource={data}         
        loading={isLoading}
        
      />
      </h2>
    </Layout>
  )
}