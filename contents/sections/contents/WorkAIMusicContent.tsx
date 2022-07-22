import React from 'react';

export const BgDescript = () => {
  return (
    <React.Fragment>
      <p>
        YouTubeやTikTokなどの動画配信サービスの急成長に伴い、動画クリエイターはプロ・アマチュア問わず誰しも自分の表現したい動画に最も合う楽曲を求めています。
      </p>
      <p>しかし、ピンと来るような楽曲を１から探すのは簡単なことではありません。</p>
      <p>
        時間をかけて見つけられたとしても権利上の問題で使えなかったり、また既に多くの動画で使われていてオリジナリティを表現するのが難しかったりします。
      </p>
    </React.Fragment>
  );
};

export const CsDescript = () => {
  return (
    <React.Fragment>
      <p>
        動画に使えるぴったりな曲が見つからない。
        <br />
        そんな時は、<strong>「作曲」</strong>してしまうのが一番の解決策です。
      </p>
      <p>
        自作曲の楽曲であれば権利を気にする必要もありませんし、ユニークな存在ですから誰かと被ることもありません。
      </p>
      <p>
        しかし、多くの人にとって「作曲」は非常に難しい創作活動です。
        <br />
        専門のトレーニングを受けた人でなければ難しいでしょう。誰でもできない作業であることは確実です。
      </p>
    </React.Fragment>
  );
};

export const TechDescript = () => {
  return (
    <p>
      このシステムでは機械学習モデルの作成にTensorFlowを用いたました。また、ニューラルネットのプログラミングおよび学習データの変換プログラムの開発にはPythonを用いました。
      学習データーの作成や、出力された楽曲の再生にはMIDI (General MIDI Format)を利用しました。
    </p>
  );
};

export const AIMusicContent = {
  section1: {
    headingImageWebP:
      'https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Faimusic%2Faim_header.webp?alt=media',
    headingImagePng:
      'https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Faimusic%2Faim_header.png?alt=media',
  },
  section2: {
    audio:
      'https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Faimusic%2FRNN%20Generated%20Music%20%202017_06_24.mp3?alt=media&token=61861644-13a5-4151-92c7-6384dbcfda3f',
  },
};
