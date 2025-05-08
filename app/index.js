import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mikufu | Home</title>
        <meta name="description" content="Mikufu - Revolutionizing your digital experience." />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
