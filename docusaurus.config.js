const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Avanti Docs',
  tagline: 'Documentação interna da galera da Avanti',
  url: 'https://avanti.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'avanti', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Avanti',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Documentação',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/penseavanti/',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/penseavanti',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/penseavanti/',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/penseavanti/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Avanti, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/avanti/docs/edit/master/',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/avanti/docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
