// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: 'Job',
      type: 'document',
      name: 'Job',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'employer', type: 'string' },
        { name: 'start', type: 'date' },
        { name: 'end', type: 'date' }
      ]
    },
    {
      title: 'Project',
      type: 'document',
      name: 'Project',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        {
          name: 'stack',
          type: 'array',
          of: [{ type: 'string', name: 'tech' }]
        },
        { name: 'github', type: 'url' },
        { name: 'start', type: 'date' },
        { name: 'end', type: 'date' }
      ]
    },
    {
      title: 'Talk',
      type: 'document',
      name: 'Talk',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'location', type: 'geolocation' },
        { name: 'time', type: 'date' },
        { name: 'slides', type: 'url' }
      ]
    }
  ])
})
