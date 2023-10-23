const STATES = [
  {title: 'Alabama', value: 'AL'},
  {title: 'Alaska', value: 'AK'},
  {title: 'Arizona', value: 'AZ'},
  // ...
]

export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => [
        Rule.min(5).warning('A minimum of 5 characters of Title is required'),
        Rule.max(20).warning('Title of less than 20 characters are better'),
      ],
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Sub Title',
      hidden: ({document}) => !document?.title,
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      options: {
        dateFormat: 'DD/MM/YYYY',
        calendarTodayLabel: 'Today',
      },
      validation: (Rule) => Rule.required().min('2020-01-01'),
    },
    {
      name: 'blogcontent',
      title: 'Blog Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Description',
              options: {
                isHighlighted: true,
              },
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'authorref',
      type: 'reference',
      title: 'Author',
      to: [
        {
          type: 'author',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverimage',
      type: 'image',
      title: 'Cover Image',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'state',
      title: 'Publish Loaction',
      type: 'string',
      options: {
        list: STATES,
        layout: 'dropdown',
      },
    },
    // {
    //   name: 'link',
    //   type: 'object',
    //   title: 'Link',
    //   fields: [
    //     {
    //       name: 'external',
    //       type: 'url',
    //       title: 'URL',
    //       hidden: ({parent, value}) => !value && parent?.internal,
    //     },
    //     {
    //       name: 'internal',
    //       type: 'reference',
    //       to: [{type: 'article'}],
    //       hidden: ({parent, value}) => !value && parent?.external,
    //     },
    //   ],
    // },
  ],
  
}
