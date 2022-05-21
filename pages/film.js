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
                <div>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/3O6hal7pzaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Iceland</h2>
                <p>Description about the video</p>
                </div>

                <div>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/rwTQnE9bS3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Mount Rainier</h2>
                <p>Description about the video</p>
                </div>

                <div>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/0ZMsKeh6abs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Grand Teton</h2>
                <p>Description about the video</p>
                </div>

                <div>
                <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/Mh-b4LC54ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Yellowstone</h2>
                <p>Description about the video</p>
                </div>
                
            </div>
                
            <div className={styles.photocontainer}>

            </div>
        </div>
    )
}