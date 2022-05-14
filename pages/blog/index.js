import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '/styles/BlogHome.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function BlogHome({properties, allprops}) {
    const title = properties.map(x => x.Name.title[0].plain_text);
    console.log(allprops.results.map(x => x.properties.Tags.multi_select.map(w => w.name)))


   return (
    <div className={styles.container}>
      <title>Blog</title>
      <link rel="icon" href="/blogicon.png"/>
        <h1 className={styles.header}>📝 My Blog</h1>
        <div className={styles.filterbuttoncontainer}>
        <form>
          <select className={styles.filterbutton}>
            <option value="writing">Writing</option>
            <option value="programming">Programming</option>
            <option value="filmmaking">Filmmaking</option>
            <option value="resting">Testing</option>
          </select>
        </form>
        </div>
        
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
   )
}


export async function getServerSideProps() {
    const { Client } = require("@notionhq/client")

    const notion = new Client({
        auth: "secret_eEpKZQubXG2NI5glqvnvj2bVfqe3QNSFIvP8AYV5XKz", //Check whether you have the correct token in the .env.local file.
      })
      
    const databaseId = "cb7872286310407cbe674ccd8a3ed2f7"
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