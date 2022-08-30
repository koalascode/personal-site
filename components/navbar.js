import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/NavBar.module.css'
import { useRouter } from 'next/router'


export default function NavBar({ allprops, properties }) {
    const [menuStatus, setMenuStatus] = useState()
    const [currentHover, setCurrentHover] = useState()

    const router = useRouter()

    const toggleMenu = () => {
        menuStatus === undefined ? setMenuStatus("open") : null;
        menuStatus === "open" ? setMenuStatus("closed") : null;
        menuStatus === "closed" ? setMenuStatus("open") : null;
    }

    useEffect(() => {
        const menuBtn = document.getElementById("menubtn");
        menuStatus === "open" ? menuBtn.classList.add('open') : null;
        menuStatus !== "open" ? menuBtn.classList.remove('open') : null
        if (menuStatus === "open") {
            document.getElementById("navpopup").style.display = "block"
        }
        if (menuStatus === "closed") {
         document.getElementById("navpopup").style.display = "none" 
        }

       
        currentHover === "blog" && router.route !== "/blog" ? document.getElementById("articlespreview").style.display = "flex" :document.getElementById("articlespreview").style.display = "none";
        currentHover === "film" && router.route !== "/film"  ? document.getElementById("filmpreview").style.display = "flex" :document.getElementById("filmpreview").style.display = "none";
        currentHover === "photo" && !router.route.includes("/photo") ? document.getElementById("photospreview").style.display = "flex" : document.getElementById("photospreview").style.display = "none";
    })    
    console.log(currentHover)
    return (
        <div className={styles.container}>
        <div className={styles.main}>
        <Link href="/" passHref>
        <h2 className={styles.headername}>Aaron Anidjar</h2>  
        </Link>
          <div className={styles.flexlinks}>
              <Link href="/film" passHref>
                  <p onMouseEnter={() => setCurrentHover("film")} className={styles.pagelink}>Filmmaking</p>
              </Link>
              <Link href="/programming" passHref>
                  <p onMouseEnter={() => setCurrentHover("programming")} onMouseLeave={() => setCurrentHover("none")} className={styles.pagelink}>Programming</p>
              </Link>
              <Link href="/photo" passHref>
                  <p onMouseOver={() => setCurrentHover("photo")} className={styles.pagelink}>Outdoor Photos</p>
              </Link>
              <Link href="/blog" passHref>
                  <p onMouseEnter={() => setCurrentHover("blog")} className={styles.pagelink}>Blog</p>
              </Link>
          </div>
          <div className={styles.menubtn} id="menubtn" onClick={toggleMenu}>
            <div className={styles.menubtnburger}></div>
          </div>
          <div>
          </div>
        </div>
        <div className={styles.mainarticles} id="articlespreview" onMouseLeave={() => setCurrentHover("none")}>
      {allprops ? allprops.results.map(prop => 
       <div key={`${prop?.properties?.Name?.title[0]?.plain_text}`} className={styles.articlepreview}>
          <p className={styles.blogdate}>{prop?.properties?.DatePublished?.date?.start}</p>
          <Image className={styles.coverimage} src={`${prop?.properties?.Image?.url}`} width={800} height={600} layout='raw'/>
          <div className={styles.maintext}>   
              <Link href={`/blog/${prop?.id}`}>
                  <div className={styles.articleteasertext}>
                      <h2 className={styles.blogtitle}>{prop?.properties?.Name?.title[0]?.plain_text}</h2>
                      <p className={styles.blogdescription}>{prop?.properties?.Content?.rich_text[0]?.plain_text}</p>
                  </div>
              </Link>
        </div>  
       </div> 
    ) : null}
    </div>
        <div className={styles.filmpreview} id="filmpreview" onMouseLeave={() => setCurrentHover("none")}>
            <div className={styles.individualvideo}>
                <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/yAPgEoZibNI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>China</h2>
                <p className={styles.videodescription}>Investigative piece on China&apos;s lending around the world.</p>
            </div>
            <div className={styles.individualvideo}>
                <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/3O6hal7pzaI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Iceland</h2>
                <p className={styles.videodescription}>An investigative piece about Iceland&apos;s economy and why the nation is so rich.</p>
            </div>
        </div>
        <div className={styles.photospreview} id="photospreview" onMouseLeave={() => setCurrentHover("none")}>
            <Link href="/photo/cr" passHref>
                <div className={styles.indivcontainer}>
                    <Image src="/cr/crfinal-13.jpg" className={styles.displayimg} width={600} height={400}/>
                    <h1 className={styles.headtext}>Costa Rica</h1>
                </div>
            </Link>
            <Link href="/photo/utah" passHref>
                <div className={styles.indivcontainer}>
                    <Image src="/utah/arizonafinal-16.jpg" className={styles.displayimg} width={600} height={400}/>
                    <h1 className={styles.headtext}>Utah</h1>
                </div>
            </Link>
            <Link href="/photo/assateague" passHref>
                <div className={styles.indivcontainer}>
                    <Image src="/assateague/assateaguefinal-14.jpg" className={styles.displayimg} width={600} height={400}/>
                    <h1 className={styles.headtext}>Assateague</h1>
                </div>
            </Link>
        </div>
          
        
            <div className={styles.navpop} id="navpopup">
            <Link href="/film" passHref>
                  <h1 className={styles.bigpagelink}>Filmmaking</h1>
              </Link>
              <Link href="/programming" passHref>
                  <h1 className={styles.bigpagelink}>Programming</h1>
              </Link>
              <Link href="/photo" passHref>
                  <h1 className={styles.bigpagelink}>Outdoor Photography</h1>
              </Link>
              <Link href="/blog" passHref>
                  <h1 className={styles.bigpagelink}>Blog</h1>
              </Link>
            </div>
        </div>
    )
}