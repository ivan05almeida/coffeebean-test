import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import css from '../lib/style';


export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Ivan de Paula Almeida Filho</title>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
          <link rel="shortcut icon" type="image/png" href="https://www.coffeebeantech.com/user/themes/cbt/img/favicon/favicon-32x32.png" sizes="32x32"/>
          <link rel="shortcut icon" type="image/png" href="https://www.coffeebeantech.com/user/themes/cbt/img/favicon/android-chrome-192x192.png" sizes="192x192"/>
          <link rel="shortcut icon" type="image/png" href="https://www.coffeebeantech.com/user/themes/cbt/img/favicon/favicon-96x96.png" sizes="96x96"/>
          <link rel="shortcut icon" type="image/png" href="https://www.coffeebeantech.com/user/themes/cbt/img/favicon/favicon-16x16.png" sizes="16x16"/>
          <style jsx global>{css}
          </style>
          <script type="text/javascript" id="socialid_api_script" src="http://staging.socialidnow.com/assets/api/socialid.js"></script>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
