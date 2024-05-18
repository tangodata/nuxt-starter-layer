export default defineAppConfig({
  // Configure Content Wind here
  cover: '/cover.jpg',
  socials: {
    twitter: 'Atinux',
    github: 'Atinux/content-wind',
    mastodon: '@atinux@webtoo.ls'
  },

  docus: {
    title: 'Nuxt-Starter-Layer',
    description: 'The documentation template.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'tangoeast',
      github: 'tangodata/nuxt-starter-layer',
      facebook: {
        label: 'Facebook',
        icon: 'simple-icons:facebook',
        href: 'https://facebook.com/tangoeast'
      }
    },
    github: {
      dir: 'content',
      owner: 'tangodata', repo: 'nuxt-starter-layer', branch: 'main',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
  },

})
