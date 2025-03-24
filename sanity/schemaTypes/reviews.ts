import { defineField, defineType } from 'sanity';
import { FaStar } from 'react-icons/fa'; // Using a star icon for reviews

export default defineType({
  name: 'review',
  title: 'Review',
  description: 'Schema for customer reviews',
  type: 'document',
  icon: FaStar, // Use a star icon for the review schema
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the reviewer',
      validation: (rule) => rule.required().min(2).max(50),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rate the product/service (1-5 stars)',
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      description: 'Write the review comment',
      validation: (rule) => rule.required().min(10).max(500),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Select the date of the review',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      description: 'Upload the reviewer\'s avatar',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Add alternative text for the avatar',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Review',
      type: 'boolean',
      description: 'Mark this review as featured to highlight it',
      initialValue: false,
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'reference',
      description: 'Link this review to a specific product (optional)',
      to: [{ type: 'project' }], // Replace 'product' with your product schema name
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description: 'Add tags to categorize this review (e.g., "customer service", "quality")',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'comment',
      media: 'avatar',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle || 'No comment',
        media,
      };
    },
  },
});