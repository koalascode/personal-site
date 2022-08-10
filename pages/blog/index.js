import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '/styles/BlogMain.module.css'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../../components/navbar'



export default function BlogMain() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Aaron Anidjar | Blog</title>
                <link rel="icon" href="/blogicon.png"/>
            </Head>
            <NavBar />
            <div className={styles.content}>
                <div className={styles.main}>
                    <Link href="/blog/articles" passHref>
                        <h1 className={styles.title}>articles</h1>
                    </Link>
                    <Link href="/blog/daily" passHref>
                        <h1 className={styles.title}>daily thoughts</h1>
                    </Link>      
                </div>
            </div>

            
        </div>
    )
}