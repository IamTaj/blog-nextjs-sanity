export default {
  // name: 'article',
  // title: 'Article',
  // type: 'document',
  // groups: [
  //   {
  //     name: 'seo',
  //     title: 'SEO',
  //   },
  //   {
  //     name: 'ceo',
  //     title: 'CEO',
  //   },
  // ],
  // fields: [
  //   {name: 'title', title: 'Title', type: 'string'},
  //   {name: 'icon', title: 'Icon', type: 'image'},
  //   {
  //     name: 'related',
  //     title: 'Related',
  //     type: 'array',
  //     of: [{type: 'reference', to: [{type: 'article'}]}],
  //   },
  //   {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
  //   {name: 'seoKeywords', title: 'Keywords', type: 'string', group: 'seo'},
  //   {name: 'seoSlug', title: 'Slug', type: 'slug', group: 'seo'},
  //   {name: 'seoImage', title: 'Image', type: 'image', group: 'seo'},
  //   {name: 'ceoTitle', title: 'CEO title', type: 'string', group: 'ceo'},
  //   {name: 'ceoKeywords', title: 'Keywords', type: 'string', group: 'ceo'},
  //   {name: 'ceoSlug', title: 'Slug', type: 'slug', group: 'ceo'},
  //   {name: 'ceoImage', title: 'Image', type: 'image', group: 'ceo'},
  //   {
  //     name: 'productSKU',
  //     type: 'string',
  //     title: 'SKU',
  //     readOnly: ({currentUser}) => {
  //       return !currentUser.roles.find(({name}) => name === 'administrator')
  //     },
  //   },
  //   {
  //     name: 'link',
  //     type: 'object',
  //     title: 'Link',
  //     fields: [
  //       {
  //         name: 'external',
  //         type: 'url',
  //         title: 'URL',
  //         hidden: ({parent, value}) => !value && parent?.internal,
  //       },
  //       {
  //         name: 'internal',
  //         type: 'reference',
  //         to: [{type: 'article'}],
  //         hidden: ({parent, value}) => !value && parent?.external,
  //       },
  //     ],
  //   },
  // ],

  name: 'product',
  type: 'document',
  title: 'Product',
  fieldsets: [
    {
      name: 'links',
      title: 'Links',
      options: {columns: 2},
      readOnly: ({document}) => document?.title === 'Admin',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'external',
      type: 'url',
      title: 'URL',
      fieldset: 'links',
    },
    {
      name: 'internal',
      type: 'reference',
      to: [{type: 'url'}, {type: 'blog'}],
      fieldset: 'links',
    },
    
  ],
}
