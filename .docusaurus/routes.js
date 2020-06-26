
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/dropy-online/dropy.tech.github.io',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/blog',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/blog'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/blog/hello-world',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/blog/hello-world'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/blog/hola',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/blog/hola'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/blog/tags',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/blog/tags'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/blog/tags/docusaurus',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/blog/tags/facebook',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/blog/tags/hello',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/blog/tags/hola',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/blog/welcome',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/blog/welcome'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/docs',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/docs'),
  
  routes: [
{
  path: '/dropy-online/dropy.tech.github.io/docs/',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/docs/'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/docs/doc2',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/docs/doc2'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/docs/doc3',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/docs/doc3'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech.github.io/docs/mdx',
  component: ComponentCreator('/dropy-online/dropy.tech.github.io/docs/mdx'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
