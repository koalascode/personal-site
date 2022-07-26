import Head from 'next/head'
import styles from '/styles/ArticleTemplate.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavBar from '../../../components/navbar'

export default function Article({ allprops, pageprops }) {
    console.log(pageprops.results)
    const items = pageprops.results.map(x => 
        <div key="test">
        {x.type === "heading_1" ? <h1 className={styles.h1}>{x.heading_1?.rich_text[0]?.plain_text}</h1> : null}
        {x.type === "heading_2" ? <h2 className={styles.h2}>{x.heading_2?.rich_text[0]?.plain_text}</h2> : null}
        {x.type === "heading_3" ? <h3 className={styles.h3}>{x.heading_3?.rich_text[0]?.plain_text}</h3> : null}
        {x.type === "paragraph" ? <p className={styles.paragraph}>{x.paragraph?.rich_text[0]?.plain_text}</p> : null}
        <ul>
        {x.type === "bulleted_list_item" ? <li>{x?.bulleted_list_item?.rich_text[0]?.plain_text}</li> : null}
        {x.type === "numbered_list_item" ? <li>{x?.numbered_list_item?.rich_text[0]?.plain_text}</li> : null}
        </ul>
        
        {x.type === "to_do" ? <form><input type="checkbox"/><label>{x?.to_do?.rich_text[0].plain_text}</label></form> : null}
        {x.type === "quote" ? <p className={styles.quote}>&quot;{x?.quote?.rich_text[0]?.plain_text}&quot;</p> : null} 
        {x.type === "image" ? <div className={styles.imagediv}><img className={styles.articleimage} src={`${x.image?.file?.url}`}/></div> : null}
        {x.type === "video" ? <iframe className={styles.articlevideo} src={`${x?.video?.external?.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : null} 
        </div>
       
    )
    return (
        <div>
            <title>{allprops.properties.Name.title[0].plain_text}</title>
            <link rel="icon" href="/blogicon.png"/>
            <NavBar />
            <br />
            <div className={styles.allarticle}>
            <h1 className={styles.title}>{allprops.properties.Name.title[0].plain_text}</h1>
            <div className={styles.headerinfo}>
                <div className={styles.writer}>
                    <Image className={styles.writeravater} src={`${allprops.properties.CreatedBy.created_by.avatar_url}`} width={60} height={20}/>
                    <h3>By: {allprops.properties.CreatedBy.created_by.name} </h3>
                </div>
                
                <p className={styles.publisheddate}>{allprops.properties.DatePublished.date.start}</p>
            </div>

            <div className={styles.articlemain}>
           {items}
            </div>
            </div>
          
            
        </div>
    )
}

export function Route() {
    const router = useRouter()
    const query = router.query
    //console.log(query)
    return {
        query
    }
}

export async function getServerSideProps({ query }) {
    const { Client } = require('@notionhq/client');

    const notion = new Client({ auth: "secret_eEpKZQubXG2NI5glqvnvj2bVfqe3QNSFIvP8AYV5XKz" });
    
    const pageId = query.page;
    const res = await notion.pages.retrieve({ page_id: pageId });

    const response = await notion.blocks.children.list({

        block_id: pageId,
    
        page_size: 50,
    
      });

    return {
        props: { allprops: res, pageprops: response }
    }
}
