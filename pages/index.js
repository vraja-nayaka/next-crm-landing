import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next crm landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to NEXT CRM LANDING
        </h1>
      </main>

      <footer className={styles.footer}>
        let's coding
      </footer>
    </div>
  )
}
