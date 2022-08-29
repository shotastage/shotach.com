import React from "react";
import { Box, Heading3, Heading4, Flex } from "../components";
import styles from "../styles/BizCard.module.scss";

export const BizCard = (props: {
  onClick: () => void;
  children: Array<JSX.Element>;
}) => {
  return <div className={styles.BizCard} {...props} />;
};

export const BizDepartment = (props: { children: string }) => {
  return <span className={styles.BizDepartment} {...props} />;
};

export const BizCardButton = (props: { onClick: () => void }) => {
  return <button className={styles.BizCardButton} {...props} />;
};

export const BizCardDetail = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      marginRight="15px"
      marginLeft="15px"
    >
      <Heading3>プロフィール</Heading3>
      <Box marginTop="3em" marginBottom="1em">
        <Heading4>経歴</Heading4>
      </Box>
      <p className={styles.ModalText}>
        <span>
          2020年に同大学大学院に進学。クラウドシステムの設計・実装やiOSプラットフォームの開発に従事。
          <br />
          研究では、主に自律分散型モバイルアプリケーションプラットフォームの研究に取り組んでいる。
        </span>
      </p>
      <p className={styles.ModalText}>
        <span>
          大学２年の時に新規サービスの立ち上げと事業化を思い立つ。路上アーティストに特化したライブ配信サービスを企画し、設計開発に取り組み起業するが資金不足で断念。
        </span>
      </p>
      <p className={styles.ModalText}>
        <span>
          中高を得て2016年に慶應義塾大学SFC
          環境情報学部に進学。同年秋学期に研究室に所属し機械学習による自動作曲の研究に取り組むとともに、Webアプリケーションからモバイルアプリケーションなど開発分野の手を広げる。
          <br />
        </span>
      </p>
      <p className={styles.ModalText}>
        中学生の時にビックカメラに置いてあったMacBook
        Airのデザインに惹かれLinuxのカスタマイズやツールの開発、OSSへのコントリビューションを始める。
        <br />
      </p>
      <Heading4>SHOTA&apos;s Philosophy</Heading4>
      <p>自分がソフトウェアを開発する理由はただ一つ</p>
      <p>「おもしろい」から</p>
      <p>テクノロジーを用いて使ってる人に驚きを届けられると思うからです。</p>
      <p>従って、以下のポイントは非常にこだわります。</p>
      <ul>
        <li>ユーザー視点に立った仕様の策定</li>
        <li>使っているだけで楽しさを体験できる工夫</li>
      </ul>
      <Box marginBottom="100px" />
    </Flex>
  );
};