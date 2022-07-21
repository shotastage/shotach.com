import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Flex, Navbar, Heading, Image, Footer, FooterCopyright, SHModal } from '../components';
import { Avator, Name, UserName } from '../components/AppComponent';
import { TopBanner } from '../components/TopPopup';

import { StorySection, Works, Writings, SkillsSection, SocialSection } from '../sections';

import { BizCard, BizCardButton, BizDepartment } from '../contents/BizCard';

import { ApiClient } from 'mini-apiclient';
import { API_KEYS } from '../env-values';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="SFC16 政策メディア研究科 | RG NECO Swift, FlutterとGoが好きです. Bhaaとか http://l.pnstr.com とか http://tipstock.net 作ってます"
        />
        <meta property="og:site_name" content="shotastageのポートフォリオ" />
        <meta property="og:title" content="@shotastageのポートフォリオ" />
        <meta property="og:description" content="SFC16 政策メディア研究科 | RG NECO Swift, FlutterとGoが好きです. Bhaaとか http://l.pnstr.com とか http://tipstock.net 作ってます" />
        <meta property="og:url" content="https://shotach.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://shotach.com/images/avator.jpg" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>@shotastage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">shotach.com!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
