import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vitrin.me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Hi , I'm Ali Bohlooli &#128075;</h2>
      <h3>Go to /posts to see all jsonPlaceHolder posts </h3>
      <h3>Go to /posts/[id] to see [id]th post </h3>
    </div>
  )
}
