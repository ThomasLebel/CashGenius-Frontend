import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(ctx) {
  const { locale } = ctx.__NEXT_DATA__; // Récupère la langue dynamique

  return (
    <Html lang="fr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}