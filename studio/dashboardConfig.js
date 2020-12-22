export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5fe13727afbbcf008df4e736',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-u6iudq85',
                  apiId: '45b72bcc-f399-435b-9316-5617393a050b'
                },
                {
                  buildHookId: '5fe13728b08b8700a51b41cd',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-fin3p259',
                  apiId: '2e6aabaa-4a7e-422f-87e5-933697c9890b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jumus-jumbuck/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-fin3p259.netlify.app', category: 'apps'}
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
