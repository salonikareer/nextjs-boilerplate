import Head from 'next/head'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Saloni Kareer - Software Engineer</title>
        <meta name="description" content="Portfolio of Saloni Kareer, Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Header/>
      <div className="container mx-auto px-4">
        <About/>
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer/>
    </>
  )
}