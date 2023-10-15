import Head from 'next/head';
import { FC } from 'react';
import { NavBar } from '../ui';

interface IShopLayoutProps {
  children?: React.ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout: FC<IShopLayoutProps> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        {/* metatags para compartir en redes sociales */}
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {/* para compartir url de imagen en redes sociales */}

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <nav>
        <NavBar />
      </nav>

      {/* TODO: Sidebar*/}
      <main
        style={{
          margin: '80px auto',
          maxWidth: '1400px',
          padding: '0px 30px',
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer>{/* TODO: Footer custom */}</footer>
    </>
  );
};
