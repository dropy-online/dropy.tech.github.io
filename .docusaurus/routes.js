
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/dropy-online/dropy.tech',
  component: ComponentCreator('/dropy-online/dropy.tech'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/blog',
  component: ComponentCreator('/dropy-online/dropy.tech/blog'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/blog/hello-world',
  component: ComponentCreator('/dropy-online/dropy.tech/blog/hello-world'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/blog/hola',
  component: ComponentCreator('/dropy-online/dropy.tech/blog/hola'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/blog/tags',
  component: ComponentCreator('/dropy-online/dropy.tech/blog/tags'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/blog/tags/docusaurus',
  component: ComponentCreator('/dropy-online/dropy.tech/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/blog/tags/facebook',
  component: ComponentCreator('/dropy-online/dropy.tech/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/blog/tags/hello',
  component: ComponentCreator('/dropy-online/dropy.tech/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/blog/tags/hola',
  component: ComponentCreator('/dropy-online/dropy.tech/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/blog/welcome',
  component: ComponentCreator('/dropy-online/dropy.tech/blog/welcome'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/docs',
  component: ComponentCreator('/dropy-online/dropy.tech/docs'),
  
  routes: [
{
  path: '/dropy-online/dropy.tech/docs/',
  component: ComponentCreator('/dropy-online/dropy.tech/docs/'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/docs/doc2',
  component: ComponentCreator('/dropy-online/dropy.tech/docs/doc2'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/docs/doc3',
  component: ComponentCreator('/dropy-online/dropy.tech/docs/doc3'),
  exact: true,
  
},
{
  path: '/dropy-online/dropy.tech/docs/mdx',
  component: ComponentCreator('/dropy-online/dropy.tech/docs/mdx'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
