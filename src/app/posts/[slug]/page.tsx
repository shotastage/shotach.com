import Link from "next/link";
import Head from "next/head";

import React from "react";

import layout from "@/components/Layout.module.scss";

import styles from "./Article.module.scss";
//import Image from 'next/image'

import {
  Flex,
  Navbar,
  Heading,
  Footer,
  FooterCopyright,
  SFImage,
  Heading2,
} from "@/components";

// Page Sections

import { getArticles, getArticleDetail } from "@/repository/article";
import { Article, ArticleContent } from "@/entities/article";

import Image from "next/image";

export async function generateStaticParams() {
  const articlesData = await getArticles();

  console.log(JSON.stringify(articlesData));

  return articlesData.contents.map((article) => ({
    slug: article.id,
  }));
}

function formatTimestamp(timestamp: string): string {
  const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
  ];

  const date = new Date(timestamp);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

function capitalizeFirstLetter(str: string): string {
  if (!str || str.length === 0) return str;

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const articlesData = await getArticles();
  const article = articlesData.contents.find((article: ArticleContent) => article.id === params.slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  const content: Array<ArticleContent> = [article];

  return (
    <div>
      <Head>
        <title>Shota Portfolio</title>
        <meta name="description" content="SHOTA's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={`/`}>
        <button className={styles.backButton}>
          <object
            className={styles.backButtonIcon}
            type="image/svg+xml"
            data="/icons/arrow-left.svg"
          >
            This image cannot be displayed due to technical problem causing on
            this browser.
          </object>
        </button>
      </Link>
      <div className={layout.articleContainer}>
        <div className={styles.updateStatus}>
          <span className={styles.updatedNew}>{capitalizeFirstLetter(content[0]?.category?.name!)}</span>
          <span>{formatTimestamp(content[0]?.updatedAt)}</span>
        </div>
        <h1 className={styles.heading}>{content[0]?.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${content[0]?.content}`,
          }}
          className={styles.detail}
        />
      </div>
      <Footer>
        <FooterCopyright />
      </Footer>
    </div>
  );
}
