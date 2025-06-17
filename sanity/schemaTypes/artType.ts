import {defineField, defineType} from 'sanity'

export const artType = defineType({
  name: 'art',
  title: 'Art',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'mediumType',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})