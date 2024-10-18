import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
 
export default {
    logo: <div style={{"paddingLeft": "47px", "lineHeight": "38px", "background": "url('https://i.hizliresim.com/jdw864z.png') no-repeat left", "backgroundSize": "36px", "fontWeight": "550"}}>HDStore</div>,
    project: {
      link: 'https://github.com/harbiyelidev/hdstore-docs'
    },
    head() {
      const { asPath, defaultLocale, locale } = useRouter();
      const { frontMatter } = useConfig();
      const url =
        'https://docs.hdstore.info' +
        (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    
      useEffect(() => {
        // Google Tag Manager
        const gtmScript = document.createElement('script');
        gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f);})(window, document, 'script', 'dataLayer', 'GTM-KC7JLDSC');`;
        document.head.appendChild(gtmScript);
    
        // Clarity Script
        const clarityScript = document.createElement('script');
        clarityScript.innerHTML = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r); t.async=1; t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "okidmfbd8q");`;
        document.head.appendChild(clarityScript);
    
        // Google Analytics
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-33BM3CCKNX';
        document.head.appendChild(gaScript);
    
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-33BM3CCKNX');
      }, []);
    
      return (
        <>
          <meta name="google-site-verification" content="5slTPZBcbfGTxlXmX3dN-JH32Qr4C-Kf5ZR68XewxXU" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content={
              frontMatter.description ||
              'Discover the top-rated FiveM scripts and mods at HD Store. Secure, high-performance ESX and QBCore resources tailored for your server. Unlock exclusive Tebex deals today!'
            }
          />
          <meta name="author" content="HarbiyeliDev" />
          <meta
            name="keywords"
            content="Top FiveM Scripts, Buy ESX Scripts, QBCore Mods, Secure Tebex Mods, Premium FiveM Deals, Custom FiveM Server Scripts, Roleplay Mods, Tebex Store, High-Performance GTA V Mods, HDStore, Tebex Fivem, Fivem Store, Docs, HDStore Docs"
          />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="HDStore" />
          <meta
            property="og:title"
            content={frontMatter.title || 'HDStore Docs'}
          />
          <meta
            property="og:description"
            content={
              frontMatter.description ||
              'Discover the top-rated FiveM scripts and mods at HD Store. Secure, high-performance ESX and QBCore resources tailored for your server. Unlock exclusive Tebex deals today!'
            }
          />
          <meta property="og:image" content="https://i.imgur.com/rpv9yPd.jpeg" />
          <meta
            property="og:image:alt"
            content={
              frontMatter.description ||
              'Discover the top-rated FiveM scripts and mods at HD Store. Secure, high-performance ESX and QBCore resources tailored for your server. Unlock exclusive Tebex deals today!'
            }
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@vezironi" />
        </>
      );
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