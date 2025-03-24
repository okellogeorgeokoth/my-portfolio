import { defineField, defineType } from 'sanity';
import { FaStar, FaCheckCircle, FaImage } from 'react-icons/fa';

export default defineType({
  name: 'review',
  title: 'Review',
  description: 'Customer testimonials and product reviews',
  type: 'document',
  icon: FaStar,
  fields: [
    defineField({
      name: 'name',
      title: 'Reviewer Name',
      type: 'string',
      description: 'Full name of the reviewer',
      validation: (Rule) => Rule.required().min(2).max(50),
    }),

    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      description: "Reviewer's company/organization (optional)",
      validation: (Rule) => Rule.max(50),
    }),

    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      description: "Reviewer's professional position (optional)",
      validation: (Rule) => Rule.max(50),
    }),

    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating from 1 to 5 stars',
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
      options: {
        list: [
          { title: '★', value: 1 },
          { title: '★★', value: 2 },
          { title: '★★★', value: 3 },
          { title: '★★★★', value: 4 },
          { title: '★★★★★', value: 5 },
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'comment',
      title: 'Review Content',
      type: 'text',
      description: 'The main review text (50-500 characters)',
      validation: (Rule) => Rule.required().min(50).max(500),
      rows: 4,
    }),

    defineField({
      name: 'date',
      title: 'Review Date',
      type: 'date',
      description: 'When the review was submitted',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'MMMM D, YYYY',
      },
      initialValue: new Date().toISOString().split('T')[0],
    }),

    defineField({
      name: 'avatar',
      title: 'Reviewer Avatar',
      type: 'image',
      description: 'Profile photo of the reviewer',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Accessible description of the avatar',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'screenshot',
      title: 'Screenshot Evidence',
      type: 'image',
      description: 'Optional screenshot proving the review (e.g., email, social media post)',
      icon: FaImage,
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Description of the screenshot',
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Brief context about the screenshot',
        }),
      ],
    }),

    defineField({
      name: 'verification',
      title: 'Verification',
      type: 'object',
      description: 'Review verification details',
      icon: FaCheckCircle,
      fields: [
        defineField({
          name: 'verified',
          title: 'Verified',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'method',
          title: 'Verification Method',
          type: 'string',
          options: {
            list: [
              { title: 'Email', value: 'email' },
              { title: 'Social Media', value: 'social' },
              { title: 'Video', value: 'video' },
              { title: 'Other', value: 'other' },
            ],
            layout: 'radio',
          },
        }),
        defineField({
          name: 'date',
          title: 'Verification Date',
          type: 'date',
        }),
      ],
    }),

    defineField({
      name: 'product',
      title: 'Related Product',
      type: 'reference',
      description: 'Product/project this review is about',
      to: [{ type: 'project' }],
      options: {
        disableNew: true,
      },
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description: 'Categories for organizing reviews',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          { title: 'Customer Service', value: 'customer-service' },
          { title: 'Product Quality', value: 'product-quality' },
          { title: 'Delivery', value: 'delivery' },
          { title: 'Design', value: 'design' },
          { title: 'Performance', value: 'performance' },
        ],
      },
    }),

    defineField({
      name: 'isFeatured',
      title: 'Featured Review',
      type: 'boolean',
      description: 'Show this review in featured sections',
      initialValue: false,
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique identifier for this review',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'comment',
      rating: 'rating',
      media: 'avatar',
      verified: 'verification.verified',
    },
    prepare({ title, subtitle, rating, media, verified }) {
      const stars = Array(rating).fill('★').join('');
      return {
        title: `${title} ${verified ? '✓' : ''}`,
        subtitle: `${stars} - ${subtitle?.slice(0, 50)}...`,
        media,
      };
    },
  },

  orderings: [
    {
      title: 'Rating, High',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }],
    },
    {
      title: 'Date, Recent',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [{ field: 'isFeatured', direction: 'desc' }],
    },
  ],
});