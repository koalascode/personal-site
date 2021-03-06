import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'

export default function Home({ properties, allprops }) {
  return (
    <div className={styles.container}>
        <title>Aaron Anidjar | Home</title>
        <link rel="icon" href="/favicon.png"/>
        <NavBar />
      <div className={styles.main}>


      <div className={styles.sectiononetext}>
     
     <div className={styles.hellocontainer}>
     <img className={styles.wavehand} src="/wave.png" height={50} width={50}/>
     <h1 className={styles.header}>Hello</h1>
     </div>
    
     <a href="#intro">
       <h3 className={styles.downarrow}>↓</h3>
     </a>
     
   </div>

   <div className={styles.introcontainer} id="intro">
     <p className={styles.introduction}>I am a...</p>
   </div>

   <div className={styles.flexcontainer}>
     <Image className={styles.fleximage} layout='raw' src="/portfoliophoto.jpg" width={1200} height={800}/>
     <div className={styles.flextext}>
       <h1 className={styles.flextextheader}>Filmmaker</h1>
       <p className={styles.flexmaintext}>I have been filmmaking for 5 years now and have been recently enamored with investigative journalism. I love filming and editing these videos as well as scripting and planning.</p>
       <div className={styles.logocontainer}>
         <a href="https://www.youtube.com/channel/UCWXDVtw6EhVyX-2zL0KmtKw" target="_blank" rel="noopener noreferrer">
           <Image src="/ytlogo.png" width={45} height={45}/>
         </a>    
         <p></p> 
       </div>
       
     </div>
   </div>


   <div className={styles.flexcontainer}>
     <div className={styles.flextext}>
       <h1 className={styles.flextextheader}>Programmer</h1>
       <p className={styles.flexmaintext}>I am a full stack web developer as well as an aspiring competative programmer. To learn more about what I am currently building check my GitHub and my blog.</p>
       <div className={styles.logocontainer}>
         <a href="https://github.com/koalascode" target="_blank" rel="noopener noreferrer">
           <Image src="/githublogo.png" width={45} height={45}/>
         </a>    
         <p></p> 
       </div>   
     </div>
     <Image className={styles.fleximage} layout='raw' src="https://lh3.googleusercontent.com/pw/AM-JKLUR7z6iJH57jl8NRd1ShWteeFGNlyTNO1Ayc49tVOliA7f4UELSZp1jinokfTQjpte-mdZl6oRp1wkniFVBp7C9IGgrgXLGGrdMKKIhOVAWVt64SRpzwojh3Zo5eJ5nFnABd7dS863m9htwMsLQLXm2=w2160-h1440-no?authuser=0" width={1200} height={800}/>
   </div>

   <div>
     <h2 className={styles.blogshead}>Latest Blog Posts:</h2>
     <div className={styles.articlescontainer}>
      {allprops.results.map(prop => 
      
       <div className={styles.articlepreview} key={prop.properties.Tags.multi_select.map(x =>x.name)}>
         <div className={styles.imgcontainer}>
         <Image className={styles.coverimage} src={`${prop?.properties?.Image?.files[0]?.name}`} width={700} height={500}/>
        </div>
         
       
         <div className={styles.tagsflex}>
           {prop.properties.Tags.multi_select.map(x => <p key={x?.name} className={styles.tag}><b style={{color: x.color}}># </b>{x.name}</p>)}
         </div>
         <Link href={`/blog/${prop?.id}`}>
           <div className={styles.articleteasertext}>
             <h2 className={styles.blogtitle}>{prop?.properties?.Name?.title[0]?.plain_text}</h2>
             <p className={styles.blogdescription}>{prop?.properties?.Content?.rich_text[0]?.plain_text}</p>
           </div>
         </Link>
       
       </div>  
   )}
   </div>
   </div>


      </div>
     
     

    </div>
    
  )
}

export async function getServerSideProps() {
  const { Client } = require("@notionhq/client")

  const notion = new Client({
      auth: process.env.NOTION_KEY, //Check whether you have the correct token in the .env.local file.
    })
    
  const databaseId = process.env.NOTION_DATABASE_ID
  try {
      const res = await notion.databases.query({
        database_id: databaseId,
        "filter": {
          "property": 'Status', 
          "multi_select": {
            "contains": "FrontPage"
        }
       },
       "sorts": [
        {
            "timestamp": "created_time",
            "direction": "descending"
        }
    ] 
      });
      //This is the code snipper to get the title, it is deep inside.
      const properties = res.results.map(x => x.properties) //Returns id
      return {
        props: {properties: properties, allprops: res}
      } 
    }
    catch (e) {
      console.log(e)
    }
}