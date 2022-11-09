
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name='keywords' content='ninjas'/>
    </Head>
    <div>
     
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Occaecat cillum dolore eiusmod incididunt voluptate proident ut minim amet cupidatat ex incididunt.</p>
      <p className={styles.text}>Sit ad id dolore non. Ipsum mollit qui veniam non nisi duis et amet incididunt esse. Exercitation aliqua magna voluptate ad do velit id exercitation mollit. Tempor consequat veniam est laborum aliquip laboris anim ipsum consequat laboris enim esse ex. Sint commodo elit commodo 
        eu nostrud nisi voluptate officia ad eu consectetur anim tempor.
      </p>
      <Link href='ninjas' className={styles.btn}>See ninja listing</Link>
      

    </div>
    </>
  )
}
