import {defineType, defineField} from 'sanity'

export const featured = defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    }),
    defineField({
      name: 'linkText',
      title: 'linkText',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'smallText1',
      title: 'SmallText1',
      type: 'string',
    }),
    defineField({
      name: 'smallText2',
      title: 'SmallText2',
      type: 'string',
    }),
    defineField({
      name: 'smallText3',
      title: 'SmallText3',
      type: 'string',
    }),
    defineField({
      name: 'smallText4',
      title: 'SmallText4',
      type: 'string',
    }),
    defineField({
      name: 'midText1',
      title: 'MidText1',
      type: 'string',
    }),
    defineField({
      name: 'midText2',
      title: 'MidText2',
      type: 'string',
    }),
    defineField({
      name: 'midText3',
      title: 'MidText3',
      type: 'string',
    }),
    defineField({
      name: 'midText4',
      title: 'MidText4',
      type: 'string',
    }),
    defineField({
      name: 'largeText1',
      title: 'LargeText1',
      type: 'string',
    }),
    defineField({
      name: 'largeText2',
      title: 'LargeText2',
      type: 'string',
    }),
    defineField({
      name: 'largeText3',
      title: 'LargeText3',
      type: 'string',
    }),
    defineField({
      name: 'largeText4',
      title: 'LargeText4',
      type: 'string',
    }),
  ],
})
