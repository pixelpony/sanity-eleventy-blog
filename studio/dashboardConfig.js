export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62e6dbe267682617bb4bce03',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-up7x69ut',
                  apiId: '225625a7-6a23-4690-bcd0-a8e4e69d7103'
                },
                {
                  buildHookId: '62e6dbe3b929a714deef065d',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-1qpy3sfr',
                  apiId: '0e50195f-60f0-4ab7-8170-fe9b3b475e23'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixelpony/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-1qpy3sfr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
