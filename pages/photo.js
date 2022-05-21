import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Photos.module.css'
import NavBar from '../components/navbar'

export default function Photo() {
    return (
        <div className={styles.container}>
            <Head>
            <title>Aaron Anidjar | Photos</title>
            <link rel="icon" href="/favicon.png"/>
            </Head>
            <NavBar />



            <h2 className={styles.title}>Gallery</h2>
            <div className={styles.photocontainer}>
                <Image className={styles.image} src="/foliage1.jpg" width={6000} height={4000} layout='raw'/>
                <Image className={styles.image} src="/hawaiibestphotos2.jpg" width={6000} height={4000} layout='raw'/>
                <Image className={styles.image} src="/foliage2.jpg" width={6000} height={4000} layout='raw'/>
                <Image className={styles.image} src="/hawaiibestphotos3.jpg" width={6000} height={4000} layout='raw'/>
                <Image className={styles.image} src="/foliage3.jpg" width={6000} height={4000} layout='raw'/>
                <Image className={styles.image} src="/hawaiibestphotos4.jpg" width={6000} height={4000} layout='raw'/>
                <Image className={styles.image} src="/foliage4.jpg" width={6000} height={4000} layout='raw'/>
                <Image className={styles.image} src="/hawaiibestphotos8.jpg" width={6000} height={4000} layout='raw'/>
                <Image className={styles.image} src="/foliage5.jpg" width={6000} height={4000} layout='raw'/>
                <Image className={styles.image} src="/hawaiibestphotos6.jpg" width={6000} height={4000} layout='raw'/>
                <Image className={styles.image} src="/hawaiibestphotos1.jpg" width={6000} height={4000} layout='raw'/>
                
                <Image className={styles.image} src="/hawaiibestphotos7.jpg" width={6000} height={4000} layout='raw'/>
            </div>
        </div>
    )
}