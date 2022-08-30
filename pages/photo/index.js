import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Photos.module.css'
import NavBar from '../../components/navbar'

export default function Photo() {
    return (
        <div className={styles.container}>
            <Head>
            <title>Aaron Anidjar | Photos</title>
            <link rel="icon" href="/favicon.png"/>
            </Head>
            <NavBar />
            <p className={styles.instruction}>(click on photo for place)</p>
            <div className={styles.photocontainer}>
                <Link href="/photo/hawaii" passHref>
                <div className={styles.indivcontainer}>
                    <Image src="/hawaiibestphotos4.jpg" className={styles.displayimg} width={600} height={400}/>
                    <h1 className={styles.headtext}>Hawaii</h1>
                </div>
                </Link>
                <Link href="/photo/iceland" passHref>
                <div className={styles.indivcontainer}>
                    <Image src="/iceland/icelandfinal-6.jpg" className={styles.displayimg} width={600} height={400}/>
                    <h1 className={styles.headtext}>Iceland</h1>
                </div>
                </Link>
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
                <Link href="/photo/acadia" passHref>
                <div className={styles.indivcontainer}>
                    <Image src="/acadia/acadiafinal-12.jpg" className={styles.displayimg} width={600} height={400}/>
                    <h1 className={styles.headtext}>Acadia</h1>
                </div>
                </Link>
            </div>
        </div>
    )
}