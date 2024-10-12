/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'r2.fivemanage.com',
            pathname: '/VX91vF0f30DDYFZbWik6j/images/**',
          },
        ],
      },
};
import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

export default withNextra(nextConfig);