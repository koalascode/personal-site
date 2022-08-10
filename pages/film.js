import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Film.module.css'
import NavBar from '../components/navbar'


export default function Film() {
    return (
        <div>
            <Head>
            <title>Aaron Anidjar | Film</title>
            <link rel="icon" href="/favicon.png"/>
            </Head>
            <NavBar />

            <div className={styles.videocontainer}>
                <div className={styles.individualvideo}>
                <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/3O6hal7pzaI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Iceland</h2>
                <p className={styles.videodescription}>An investigative piece about Iceland&apos;s economy and why the nation is so rich.</p>
                </div>

                <div className={styles.individualvideo}>
                <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/rwTQnE9bS3E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Mount Rainier</h2>
                <p>A longer piece on a hiking trip to Mount Ranier.</p>
                </div>

                <div className={styles.individualvideo}> 
                <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/0ZMsKeh6abs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Grand Teton</h2>
                <p>A short piece showing Grand Teton.</p>
                </div>

                <div className={styles.individualvideo}>
                <iframe className={styles.video} width={560} height={315} src="https://www.youtube.com/embed/Mh-b4LC54ik" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Yellowstone</h2>
                <p>A short piece showing Yellowstone.</p>
                </div>
                
            </div>
                
            
        </div>
    )
}