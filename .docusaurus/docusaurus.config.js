export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "dropy",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Team dropy, Inc. Built with Docusaurus."
    }
  },
  "title": "dropy tech",
  "tagline": "The tagline of my site",
  "url": "http://dropy-online.github.io/",
  "baseUrl": "/dropy-online/dropy.tech",
  "favicon": "img/favicon.ico",
  "organizationName": "dropy-online",
  "projectName": "dropy.tech",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "doc1",
          "sidebarPath": "/Users/happytime870naver.com/Desktop/dropy/dropy.tech/sidebars.js",
          "editUrl": "https://github.com/dropy-online/dropy.tech.github.io/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/dropy-online/dropy.tech.github.io/"
        },
        "theme": {
          "customCss": "/Users/happytime870naver.com/Desktop/dropy/dropy.tech/src/css/custom.css"
        }
      }
    ]
  ]
};