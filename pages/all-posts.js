import Container from '../components/container'
import MoreStories from '../components/more-stories';
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'


export default function AllPosts({ preview, allPosts }) {

    return (
      <>
        <Layout preview={preview}>
        <Head>
            <title>Caitlikes</title>
        </Head>
          <Container>
            <MoreStories posts={allPosts}/>
          </Container>
        </Layout>
      </>
    )
  }
  
  export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview)
    return {
      props: { preview, allPosts },
    }
  }
  