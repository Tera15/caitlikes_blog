import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import VideoFrame from '../components/video-frame'
import { getInstaPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function VideoPlayer({ videos}) {
    const {items} = videos
    // console.log(items[0].fields.music.fields.file.url)
    // console.log(items[0].fields.music.fields.title)
  return (
   
      <>
        <Layout>
        
        <h1 className="text-center m-6 mb-0">RANDOM TITLE HERE</h1>
        <p className='text-center mt-5'>Random subheading content</p>
        <div className ='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-10 mx-10'>
         {
         
         items.map(video => {
             const{fields:{music:{fields:{file:{url}}}}, fields:{music:{fields:{title}}} } = video   
             
            console.log(url)
            return <VideoFrame src={url} title={title}/>
         })
         
         }
        </div>
        </Layout>
      </>
    
  )
}

export async function getStaticProps() {
    const videos = await getInstaPosts()
   return {
      props: {videos}
    }
  }
