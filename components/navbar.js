import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/NavBar.module.css'


export default function NavBar() {
    const [menuStatus, setMenuStatus] = useState()
    const toggleMenu = () => {
        menuStatus === undefined ? setMenuStatus("open") : null;
        menuStatus === "open" ? setMenuStatus("closed") : null;
        menuStatus === "closed" ? setMenuStatus("open") : null;
    }

    useEffect(() => {
        const menuBtn = document.getElementById("menubtn");
        menuStatus === "open" ? menuBtn.classList.add('open') : null;
        menuStatus !== "open" ? menuBtn.classList.remove('open') : null
    })

    useEffect(() => {
       if (menuStatus === "open") {
           document.getElementById("navpopup").style.display = "block"
       }
       if (menuStatus === "closed") {
        document.getElementById("navpopup").style.display = "none" 
       }
    })
    

    return (
        <div className={styles.container}>
        <div className={styles.main}>
        <Link href="/" passHref>
        <h2 className={styles.headername}>Aaron Anidjar</h2>  
        </Link>
          <div className={styles.flexlinks}>
              <Link href="/film" passHref>
                  <p className={styles.pagelink}>Filmmaking</p>
              </Link>
              <Link href="/programming" passHref>
                  <p className={styles.pagelink}>Programming</p>
              </Link>
              <Link href="/photo" passHref>
                  <p className={styles.pagelink}>Photography</p>
              </Link>
              <Link href="/blog" passHref>
                  <p className={styles.pagelink}>Blog</p>
              </Link>
          </div>
          <div className={styles.menubtn} id="menubtn" onClick={toggleMenu}>
            <div className={styles.menubtnburger}></div>
          </div>
        </div>
          
        
            <div className={styles.navpop} id="navpopup">
            <Link href="/" passHref>
                  <h1 className={styles.bigpagelink}>Filmmaking</h1>
              </Link>
              <Link href="/" passHref>
                  <h1 className={styles.bigpagelink}>Programming</h1>
              </Link>
              <Link href="/blog" passHref>
                  <h1 className={styles.bigpagelink}>Blog</h1>
              </Link>
            </div>
        </div>
    )
}