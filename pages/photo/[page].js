import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/PhotosMain.module.css'
import NavBar from '../../components/navbar'
import { useRouter } from 'next/router'
import { useEffect, useState, useId } from 'react'

export default function PhotoMain() {
    const [modalPath, setModalPath] = useState()
    const router = useRouter()
    const query = router.query
    const page = query.page
    let pageHeader = page[0].toUpperCase() + page.slice(1)
    page == "cr" ? pageHeader = "Costa Rica" : null;
    

    const hawaiidesc = "Hawaii needs no introduction, it is a place with endlessly beatiful landscapes and wildlife. These photos were taken on Maui, Kauai, and the Big Island."
    const icelanddesc = "Iceland is a country with landscapes and geological features that are not available anywhere else, it is truely spectacular. The majority of the photos were taken in Iceland's southern region, but others are from different parts of the country."
    const crdesc = "Costa Rica's diverse flora and fauna are spectacular to behold. These photos are a collection between Arenal, Monte Verde, and Uvita."
    const utahdesc = "Utah is a state with incredible natural beauty, from the Grand Canyon to the Wave there are views everywhere."
    const acadiadesc = "Acadia may not be the most incredible national park, but it's homey atmosphere, close proximity, and fall beauty make it a worthwhile visit."
    const assateaguedesc = "Assateague is a lesser known location than the rest, being located on the coast of Maryland, but it is impressive for it's wild horses and natural beauty. We went camping and were hence able to wake up early to see the horses."

    const description = {"hawaii": hawaiidesc, "iceland": icelanddesc, "acadia": acadiadesc, "assateague": assateaguedesc, "cr": crdesc, "utah": utahdesc}
    const path = {"hawaii": "/hawaiibestphotos", "iceland": "/icelandbestphoto", "acadia": "/acadia/acadiafinal-", "assateague": "/assateague/assateaguefinal-", "cr": "/cr/crfinal-", "utah": "/utah/arizonafinal-"}
    const length = {"hawaii": 8, "iceland": 10, "acadia": 37, "assateague": 19, "cr": 19, "utah": 53}

    const fileArr = []
    for (let i = 1; i < length[page]; i++) {
        console.log(path[page] + `${i}`)
        fileArr.push(path[page] + i)
    }
    

    const handleModal = (e) => {
        document.getElementById("imgmodal").showModal()
        path = e.target["data-loaded-src"]
        setModalPath(path)
    }

   

    return (
        <div className={styles.container}>
            <Head>
            <title>Aaron Anidjar | Photos</title>
            <link rel="icon" href="/favicon.png"/>
            </Head>
            <NavBar />
            <div>
                <h1 className={styles.header}>{pageHeader}</h1>
                <p className={styles.description}>{description[page]}</p>
            </div>
            <div className={styles.flex}>
            <div className={styles.imgcontainer}>
                {fileArr.map(file => <Image className={styles.img} src={`${file}.jpg`} onClick={handleModal} key={useId()} width={600} height={500} layout='raw'/>)}
            </div>
            </div>
            <dialog className={styles.modalcontainer} id="imgmodal">
                <Image id="modalimg" src={modalPath == undefined ? "/acadia/acadiafinal-1" : modalPath} className={styles.img} width={600} height={400} layout='raw'/>
            </dialog>
           
            
        </div>
    )
}