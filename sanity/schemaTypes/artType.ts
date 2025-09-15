import { defineField, defineType } from 'sanity'

export const artType = defineType({
  name: 'art',
  title: 'Art',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: rule => rule.custom((value, context) => {
        const parent = context?.parent as { asset?: { _ref?: string } }

        return !value && parent?.asset?._ref ? 'Alt text is required when an image is present' : true
      }),
    }),
    defineField({
      name: 'mediumType',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
  ],
})