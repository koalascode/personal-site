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
     <Image className={styles.fleximage} src="https://lh3.googleusercontent.com/9oSmPhdhMs1ecs13ucqyzP-xNb0CBCxhcEy9kF1ZN5-YZKwqC9etKIp3s87wXvevOoEckrHHdmFqIqpMRWkkdJobPX6mGg5eJntdk95wzIB7ctx0HLG9VbCFVJ2iqElQoT8OtYRVaUCesiZchT66yeA2t5wYCZ3aAcGrpdSLhAA7vtKbaPWQiG7cmnUNxINUD8kqIb5lUUxZ6ft1WbYjHYCcvUE_CuTvXPlC6CNqMvOLUAwKfgABRAER8v0YP5J_T7OJUZZXq5qDEMHjbKvG65BnsXAPBn6Z3axBguZkxnsVn35NhTRPT9gSWLmATGmcOH9SqEMdvkJFacdFUCM2MhcqjNJpmTbIE29gn1-_xoVEGrcNiVxL1JzIKlXxL5MYVEwjo9tlN-QmDTBDOpAxWaLuIB3IkYx4AxMXCqjhoyHuP8eZuzPrUDw19V2z75-UZtmKciQXiajNPgDaV9gdGNtZF3_7HqgrfHrI8_NE190ul_0skyAm0LdoOx_vOv1nuxqLr8ohaQUrl6ZRrNlc_zvJ4G0wG-FnQsjMTmO3khJKLI3Qm8yvF04c2T8ns0wEpR2efbTPK0YJIodl9HOcXgGj4r9iCPPEEybQHXOlRvj9XucqJLrfMcMECWVs2cMbqVtZbnQ3tWk8jVWP0YDEvVbYRXYf_SzM_UBDmpbP3Sh1kUWa-eQxGzN9d1NPV-giDZF5aDGQWBAI6mu_nHkWhPysqGY2apaCWGwrHdJyCkWz7bh8nnLqCaiVxY9Uch74MndDEqZibEW2g2Z_BLfJnM2paOjdo83FsGkeAg=w2160-h1378-no?authuser=0" width={600} height={400}/>
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
     <Image className={styles.fleximage} src="https://lh3.googleusercontent.com/pw/AM-JKLUR7z6iJH57jl8NRd1ShWteeFGNlyTNO1Ayc49tVOliA7f4UELSZp1jinokfTQjpte-mdZl6oRp1wkniFVBp7C9IGgrgXLGGrdMKKIhOVAWVt64SRpzwojh3Zo5eJ5nFnABd7dS863m9htwMsLQLXm2=w2160-h1440-no?authuser=0" width={600} height={400}/>
   </div>

   <div>
     <h2 className={styles.blogshead}>Latest Blog Posts:</h2>
     <div className={styles.articlescontainer}>
      {allprops.results.map(prop => 
      
       <div className={styles.articlepreview} >
         <Image className={styles.coverimage} src={`${prop?.properties?.Image?.files[0]?.name}`} width={700} height={500}/>
       
         <div className={styles.tagsflex}>
           {prop.properties.Tags.multi_select.map(x => <p className={styles.tag}><b style={{color: x.color}}># </b>{x.name}</p>)}
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