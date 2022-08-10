import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '/styles/BlogHome.module.css'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../../../components/navbar'


export default function BlogHome({properties, allprops}) {
    const title = properties.map(x => x.Name.title[0].plain_text);
    console.log(properties.map(x => x))
    //console.log(allprops.results.map(x => x.properties.Tags.multi_select.map(w => w.name)))

   return (
    <div className={styles.container}>
      <title>Aaron Anidjar | Blog</title>
      <link rel="icon" href="/blogicon.png"/>
      <NavBar />
       
        
        <div className={styles.articlescontainer}>
        {allprops.results.map(prop => 
         <div key={`${prop?.properties?.Name?.title[0]?.plain_text}`} className={styles.articlepreview}>
            <div className={styles.maintext}>   
                <Link href={`/blog/articles/${prop?.id}`}>
                    <div className={styles.articleteasertext}>
                        <p className={styles.blogdate}>{prop?.properties?.DatePublished?.date?.start}</p>
                        <h2 className={styles.blogtitle}>{prop?.properties?.Name?.title[0]?.plain_text}</h2>
                        <p className={styles.blogdescription}>{prop?.properties?.Content?.rich_text[0]?.plain_text}</p>
                    </div>
                </Link>
            </div>
          <Image className={styles.coverimage} src={`${prop?.properties?.Image?.files[0]?.name}`} width={800} height={600} layout="raw"/>

          
         </div> 
      )}
            
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