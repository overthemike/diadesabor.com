import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>diadesabor.com</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <img src="/salsas.jpg" alt="salsa" />
        <div className="hero-content">
          <h1>Coming soon: All your salspectations!</h1>
        </div>
      </main>

    </div>
  )
}
