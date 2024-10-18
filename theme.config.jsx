import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
 
export default {
    logo: <div style={{"paddingLeft": "47px", "lineHeight": "38px", "background": "url('https://i.hizliresim.com/jdw864z.png') no-repeat left", "backgroundSize": "36px", "fontWeight": "550"}}>HDStore</div>,
    project: {
      link: 'https://github.com/harbiyelidev/hdstore-docs'
    },
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Nextra" />
        <meta property="og:description" content="The next site builder" />
      </>
    ),
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