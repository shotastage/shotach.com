import React from 'react';
import { Box, CardSquare, CardIcon, Heading3, Heading4, Flex, Spacer } from '../../../components';

export const WorksShotachCom = () => {
  return (
    <Flex flexDirection='column' alignItems='flex-start' marginRight='15px' marginLeft='15px'>
      <Heading3>shotach.com</Heading3>
      <p>https://shotach.comは@shotasgaeのポートフォリオサイトです。</p>
      <Box>
        <Heading4>背景と要求</Heading4>
      </Box>
      <p>このポートフォリオサイトは以下のような要求を達成したいと考えました。</p>
      <ul>
        <li>資金や労力を使わずにサイトを開発・維持できること</li>
        <li>低価格でレスポンスの高いWebページを構築すること</li>
      </ul>
      <Heading4>使用した技術</Heading4>
      <Box center width='100%'>
        <Spacer />
        <CardSquare>
          <CardIcon type='image/svg+xml' data={`${process.env.PUBLIC_URL}/assets/react.svg`} />
        </CardSquare>
        <CardSquare>
          <CardIcon
            type='image/svg+xml'
            data={`${process.env.PUBLIC_URL}/assets/typescript-icon.svg`}
          />
        </CardSquare>
        <CardSquare>
          <CardIcon type='image/svg+xml' data={`${process.env.PUBLIC_URL}/assets/html-5.svg`} />
        </CardSquare>
        <Spacer />
      </Box>
      <p>
        このサイトはReactを使用してFull-TypeScriptで記述されています。全てのページはReactを用いたSPAとして記述されており
        表示されるコンテンツは一部REST APIにより取得し動的に表示されるのが特徴です。
        また、以下のライブラリを使用しています。
      </p>
      <ul>
        <li>styled-components</li>
        <li>react-modal</li>
        <li>react-router-dom</li>
      </ul>

      <Box marginTop='20px'>
        <strong>styled-components</strong>
        <p>
          styled-componentsは、CSSをJSで書くことができるライブラリです。ReactなどのJavaScriptベースで画面を組み立てるフレームワークでは、CSSの記述をJSON形式で行うため今までのCSSと比較して可読性に難がありました。
        </p>
        <p>
          しかし、styled-componentsは、CSSの構文を崩すことなくJSインラインで記述が可能でありReactのコンポーネントとして値を返却するのでpropsに応じて変化させるなどの動的な挙動を実現しやすくしています。
        </p>
      </Box>
      <Box marginTop='20px'>
        <strong>react-modal</strong>
        <p>
          react-modalはModalウィンドウを実装するためのシンプルなライブラリです。ちょうど、この画面もreact-modalを使って作られています。
        </p>
      </Box>
      <Box marginTop='20px' marginBottom='100px'>
        <strong>react-router-dom</strong>
        <p>
          ReactなどのSPAは全てindex.html１ページで提供されます。しかし、サイトの構造やUI的観点からURLやページという概念が必要な場合があります。
          react-routerは、Reactで作られたSPAに対して、このページとルーティングを行います。
        </p>
      </Box>
      <Heading4>インフラ</Heading4>
      <p>このWebサイトはGithubにプッシュされるとNetlifyを使用して自動でデプロイを行います。</p>
      <Box marginBottom='80px' />
    </Flex>
  );
};
