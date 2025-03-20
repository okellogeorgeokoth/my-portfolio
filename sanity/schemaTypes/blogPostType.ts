import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons'; // Optional: Use an icon for the blog post type

export const blogPostType = defineType({
  name: 'blogPost', // Name of the schema
  title: 'Blog Post', // Display name in the Sanity Studio
  type: 'document', // Type of schema
  icon: UserIcon, // Optional: Add an icon for visual representation
  fields: [
    // Title Field
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(), // Ensure the title is required
    }),

    // Slug Field
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title', // Automatically generate the slug from the title
        maxLength: 96, // Limit the slug length
      },
      validation: (Rule) => Rule.required(), // Ensure the slug is required
    }),

    // Author Reference Field
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }], // Reference the `author` schema
      validation: (Rule) => Rule.required(), // Ensure the author is required
    }),

    // Featured Image Field
    defineField({
      name: 'image',
      type: 'image',
      title: 'Featured Image',
      options: {
        hotspot: true, // Enable image cropping
      },
      validation: (Rule) => Rule.required(), // Ensure the image is required
    }),

    // Excerpt Field
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'A short description of the blog post.',
      validation: (Rule) => Rule.required().max(200), // Limit the excerpt to 200 characters
    }),

    // Content Field (Rich Text)
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        defineArrayMember({
          type: 'block', // Basic text blocks
          styles: [
            { title: 'Normal', value: 'normal' }, // Normal text style
            { title: 'Heading 1', value: 'h1' }, // H1 style
            { title: 'Heading 2', value: 'h2' }, // H2 style
            { title: 'Heading 3', value: 'h3' }, // H3 style
            { title: 'Quote', value: 'blockquote' }, // Blockquote style
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' }, // Bullet list
            { title: 'Numbered', value: 'number' }, // Numbered list
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' }, // Bold text
              { title: 'Emphasis', value: 'em' }, // Italic text
              { title: 'Underline', value: 'underline' }, // Underline text
              { title: 'Strike', value: 'strike-through' }, // Strikethrough text
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) => Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }), // Validate URL
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image', // Allow images in the content
          options: { hotspot: true }, // Enable image cropping
        }),
      ],
      validation: (Rule) => Rule.required(), // Ensure the content is required
    }),

    // Published At Field
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      validation: (Rule) => Rule.required(), // Ensure the publish date is required
    }),

    // Categories Field
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{ type: 'reference', to: [{ type: 'category' }] }], // Reference a `category` schema
    }),
  ],

  // Preview Configuration
  preview: {
    select: {
      title: 'title', // Display the title in the preview
      author: 'author.name', // Display the author's name
      media: 'image', // Display the featured image
      publishedAt: 'publishedAt', // Display the publish date
    },
    prepare(selection) {
      const { title, author, media, publishedAt } = selection;
      return {
        title: title,
        subtitle: `By ${author} on ${new Date(publishedAt).toLocaleDateString()}`, // Format the subtitle
        media: media, // Show the featured image
      };
    },
  },
});