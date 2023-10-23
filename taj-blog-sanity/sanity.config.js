import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
  DashboardWidgetContainer,
} from '@sanity/dashboard'
import {documentListWidget} from 'sanity-plugin-dashboard-widget-document-list'

export default defineConfig({
  name: 'default',
  title: 'taj-blog-sanity',

  projectId: '9vl22nzn',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    dashboardTool({
      widgets: [
        projectInfoWidget(),
        projectUsersWidget({
          layout: {width: 'large'},
        }),
        documentListWidget({
          layout: {
            width: 'small',
          },

          title: 'Authors Name',
          query: '*[_type == "author"]',
          // createButtonText: 'Create new blog post',
        }),
        documentListWidget({
          layout: {
            width: 'medium',
          },

          title: 'Published blogs by title',
          query: '*[_type == "blog"]',

          // createButtonText: 'Create new blog post',
        }),

        documentListWidget({
          showCreateButton: true,
          limit: 5,
          types: ['blog'],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
