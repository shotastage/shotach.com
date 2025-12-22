import Link from "next/link";
import Head from "next/head";

import React from "react";

import layout from "@/components/Layout.module.scss";

import {
  Flex,
  Navbar,
  Heading,
  Footer,
  FooterCopyright,
  SFImage,
  Heading2,
} from "@/components";

import { TopBanner } from "@/components/TopPopup";

// Page Sections
import { HighlightCard, ProfileCard, WorkCardsContainer } from "@/sections";
import { WorkCard } from "@/sections";

import { getArticles } from "@/repository/article";
import { Article, ArticleContent } from "@/entities/article";

export default async function Home() {
  let articles: Article[] = [];

  try {
    const articleData = await getArticles();
    articles = [articleData];
  } catch (error) {
    console.error('Failed to fetch articles:', error);
  }

  return (
    <div>
      <Head>
        <title>Shota's Portfolio</title>
        <meta name="description" content="SHOTA's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={layout.container}>
        <Navbar>Shota's Portfolio</Navbar>
        <div className={layout.Row} id="portfolio">
          <div className={layout.Col2}>
            <ProfileCard className="w-16 md:w-32 "></ProfileCard>
          </div>
          <div className={layout.Col2}>
            <HighlightCard className="w-16 md:w-32 "></HighlightCard>
          </div>
        </div>

        <Heading2 id="works">Works</Heading2>
      </div>
      <WorkCardsContainer>
        {
          articles[0]?.contents
            ?.filter((article: ArticleContent) => article?.category?.name === 'works')
            .map((article: ArticleContent) => {
              return <WorkCard key={article.id} cardTitle={article.title} href={article?.id} eyecatch={article.eyecatch?.url}></WorkCard>;
            })
        }
      </WorkCardsContainer>
      <div className={layout.container}>
        <Heading2>Writings</Heading2>
      </div>
      <WorkCardsContainer>
        {
          articles[0]?.contents
            ?.filter((article: ArticleContent) => article?.category?.name === 'writings')
            .map((article: ArticleContent) => {
              return <WorkCard key={article.id} cardTitle={article.title} href={article?.id} eyecatch={article.eyecatch?.url}></WorkCard>;
            })
        }
      </WorkCardsContainer>
      <div className={layout.container}>

        <Heading2>Skills & Experiences</Heading2>
        <p>Comming soon...</p>
        <Heading2>Social</Heading2>
        <p>Comming soon...</p>
      </div>
      {/* <StorySection stories={stories}/> */}

      {/*
      <Works />
      <Writings />
      <SkillsSection />
      <SocialSection />
        */}
      <Footer>
        <FooterCopyright />
      </Footer>
    </div>
  );
}
