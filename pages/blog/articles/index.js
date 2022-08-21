import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '/styles/BlogHome.module.css'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../../../components/navbar'


export default function BlogHome({properties, allprops, rightSideProps}) {

 return (
  <div className={styles.container}>
  <NavBar/>
    <title>Aaron Anidjar | Blog</title>
    <link rel="icon" href="/favicon.png"/>
      
      <div className={styles.articlescontainer}>
      <div className={styles.mainarticles}>
      {allprops.results.map(prop => 
       <div key={`${prop?.properties?.Name?.title[0]?.plain_text}`} className={styles.articlepreview}>
          <div className={styles.maintext}>   
              <Link href={`/articles/${prop?.id}`}>
                  <div className={styles.articleteasertext}>
                      <p className={styles.blogdate}>{prop?.properties?.DatePublished?.date?.start}</p>
                    {prop?.properties?.CreatedBy.people.map(x => 
                      <div key={x.name} className={styles.writer}>
                        <Image className={styles.writeravater} src={x.avatar_url} width={60} height={60}/>
                        <h3 key={x.name} className={styles.writername}>{x.name}</h3>
                      </div>)}
                      <h2 className={styles.blogtitle}>{prop?.properties?.Name?.title[0]?.plain_text}</h2>
                      <p className={styles.blogdescription}>{prop?.properties?.Content?.rich_text[0]?.plain_text}</p>
                  </div>
              </Link>
          </div>
          <Image className={styles.coverimage} src={`${prop?.properties?.Image?.url}`} width={800} height={600} layout='raw'/>
       
        
       </div> 
    )}
      </div>
    <div className={styles.rightarticles}>       
    {rightSideProps.results.map(prop => 
     <div key={`${prop?.properties?.Name?.title[0]?.plain_text}`} className={styles.sidearticlepreview}>
     <div className={styles.maintext}>   
         <Link href={`/articles/${prop?.id}`}>
             <div className={styles.articleteasertext}>
                 <p className={styles.blogdate}>{prop?.properties?.DatePublished?.date?.start}</p>
               {prop?.properties?.CreatedBy.people.map(x => 
                 <div key={x.name} className={styles.writer}>
                   <Image className={styles.writeravater} src={x.avatar_url} width={60} height={60}/>
                   <h3 key={x.name} className={styles.writername}>{x.name}</h3>
                 </div>)}
                 <h2 className={styles.blogtitle}>{prop?.properties?.Name?.title[0]?.plain_text}</h2>
                 <p className={styles.blogdescription}>{prop?.properties?.Content?.rich_text[0]?.plain_text}</p>
             </div>
         </Link>
     </div>
     <Image className={styles.coverimage} src={`${prop?.properties?.Image?.url}`} width={800} height={600} layout='raw'/>
  
   
  </div> 
  )}
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
            "contains": "Completed"
        }
       },
       "sorts": [
        {
            "property": "DatePublished",
            "direction": "descending"
        }
    ] 
      });

      const rs = await notion.databases.query({
        database_id: databaseId,
        "filter": {
          "property": 'Status', 
          "multi_select": {
            "contains": "RS"
        }
       },
       "sorts": [
        {
            "property": "DatePublished",
            "direction": "descending"
        }
    ] 
      });


      const properties = res.results.map(x => x.properties) //Returns id
      return {
        props: {properties: properties, allprops: res, rightSideProps: rs}
      } 
    }
    catch (e) {
      console.log(e)
    }
}



/*
async function testing() {
    const data = await fetch('/api/blogapi').then(res => res.json().then(data => data.results))
    console.log(data)

    return {
        props: {properties: data}
    }
}

testing()
*/