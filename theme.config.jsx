import React from 'react';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs.hdstore.info${asPath}`;
  const description = frontMatter.description || "Documentation for HDStore's resources for FiveM";

  return (
    <>
      <title>{title} - HDStore Docs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/hdstore.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

const config = {
  logo: (
    <div style={{ paddingLeft: "47px", lineHeight: "38px", background: "url('https://i.hizliresim.com/jdw864z.png') no-repeat left", backgroundSize: "36px", fontWeight: "550" }}>HDStore</div>
  ),
  project: {
    link: 'https://github.com/harbiyelidev/hdstore-docsv2',
  },
  chat: {
    link: 'https://discord.gg/hdstore',
  },
  docsRepositoryBase: 'https://github.com/harbiyelidev/hdstore-docsv2/blob/main',
  footer: {
    text: 'Copyright © HDStore 2024. All Rights Reserved.',
  },
  head: useHead,
  banner: {
    key: 'hdstore-discount',
    dismissible: false,
    text: (
      <a href="https://hdstore.tebex.io" target="_blank">
        🎉 20% Discount on all products →
      </a>
    ),
  },
  primaryHue: { dark: 200, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
};

export default config;
