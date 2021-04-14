/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DataDoc',
  tagline: 'DataDoc, la doc de Datafleet',
  url: 'https://datafleet.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Datafleet',
  projectName: 'DataDoc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DataDoc',
      logo: {
        alt: 'Datafleet logo',
        src: 'img/datafleet_orange.png',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} DataDoc, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: './docs',
          routeBasePath: '/',
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/datafleet_orange.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(243,142,20)',
          },
        ],
      },
    ],
  ],
};
