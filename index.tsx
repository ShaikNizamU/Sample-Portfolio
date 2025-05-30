import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>MD Nizamuddin U | React Native Developer</title>
        <meta name="description" content="Portfolio of MD Nizamuddin U, a React Native Developer passionate about building sleek mobile experiences." />
      </Head>
      <main className="bg-gray-100 text-gray-800">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
