import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
 
export default {
    logo: <div style={{"paddingLeft": "47px", "lineHeight": "38px", "background": "url('https://i.hizliresim.com/jdw864z.png') no-repeat left", "backgroundSize": "36px", "fontWeight": "550"}}>HDStore</div>,
    project: {
      link: 'https://github.com/harbiyelidev/hdstore-docs'
    },
    head() {
      const { asPath, defaultLocale, locale } = useRouter()
      const { frontMatter } = useConfig()
      const url =
        'https://docs.hdstore.info' +
        (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
   
      return (
        <>
          <meta name="description" content="A store that produces premium scenarios for a game called FiveM!" />
          <meta name="google-site-verification" content="googleb14168684a72b411.html" />
          <meta name="robots" content="noindex,nofollow" />
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content="HDStore" />
          <meta property="og:title" content={frontMatter.title || 'HDStore Docs'} />
          <meta
            property="og:description"
            content={frontMatter.description || 'A store that produces premium scenarios for a game called FiveM!'}
          />
          <meta property="og:image" content="https://i.imgur.com/rpv9yPd.jpeg" />
          <meta property="og:image:secure_url" content="https://i.imgur.com/rpv9yPd.jpeg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1920" />
          <meta property="og:image:height" content="1080" />
          <meta property="og:image:alt" content="A store that produces premium scenarios for a game called FiveM!" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="HDStore Docs" />
          <meta name="twitter:creator" content="@vezironi" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={frontMatter.title || 'HDStore Docs'} />
          <meta property="og:description" content={frontMatter.description || 'A store that produces premium scenarios for a game called FiveM!'} />
          <meta property="og:image" content="https://i.imgur.com/rpv9yPd.jpeg" />
        </>
     )
    },
    useNextSeoProps() {
      return {
        titleTemplate: "%s - HDStore Docs",
      }
    },
    chat: {
      link: 'https://discord.gg/hdstore'
    },
    banner: {
        key: 'hdstore-discount',
        dismissible: false,
        text: (
          <a href="https://hdstore.tebex.io" target="_blank">
            🎉 20% Discount on all products →
          </a>
        )
    },
    sidebar: {
        toggleButton: false
    },
    navigation: {
        prev: true,
        next: true,
    },
    feedback: {
        useLink() {
            return 'https://discord.gg/hdstore'
        }
    },
    footer: {
      content: (
          <span>
              Copyright © HDStore 2024. All Rights Reserved.
          </span>
      )
    },
    faviconGlyph: '🐍'
}