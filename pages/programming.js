import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Programming.module.css'
import NavBar from '../components/navbar'

export default function Programming() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Aaron Anidjar | Programming</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <NavBar />
            <br /><br /><br />
            <div className={styles.project}>
                <div className={styles.maintext}>
                    <h2 className={styles.mainheader}>Better Bitcoin Bureau</h2>
                    <p className={styles.maindescription}>The Better Bitcoin Bureau is a review site that I built with NextJS, NodeJS, and MongoDB. It is a review site for crypto wallets to try and prevent scams.</p>
                </div>
                <Image className={styles.sideimage} layout='raw' src="/betterbitcoinbureau2.png" width={800} height={500}/>
            </div>
            <div className={styles.project}>
                <video className={styles.sideimage} src="/cleanwestchester.mov" autoPlay loop/>
                <div className={styles.maintext}>
                    <h2 className={styles.mainheader}>Clean Westchester</h2>
                    <p className={styles.maindescription}>Clean Westchester is an environmental organization that I cofounded and built the web presence for. It was built with NextJS, ThreeJS, and Notion as a CMS for our blog.</p>
                </div>
            </div>
            <div className={styles.project}>
                <div className={styles.maintext}>
                    <h2 className={styles.mainheader}>Scarsdale Life Sciences Society</h2>
                    <p className={styles.maindescription}>The Scarsdale Life Sciences Society is an organization focused on spreading awareness about the importance of Life Sciences to Scarsdale. I built their web presence in NextJS with Notion as the CMS for the articles.</p>
                </div>
                <Image className={styles.sideimage} layout='raw' src="/slss.png" width={800} height={500}/>
            </div>
        </div>
    )
}