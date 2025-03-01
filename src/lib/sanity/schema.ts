// Sanity schema definitions
// These are for reference and would normally be defined in a separate Sanity Studio project

export const showSchema = {
  name: 'show',
  title: 'Show',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ticketLink',
      title: 'Ticket Link',
      type: 'url',
    },
    {
      name: 'ticketsAvailable',
      title: 'Tickets Available',
      type: 'boolean',
      initialValue: false,
    },
  ],
}

export const teamMemberSchema = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 999,
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

export const visionSchema = {
  name: 'vision',
  title: 'Vision',
  type: 'document',
  fields: [
    {
      name: 'mission',
      title: 'Mission',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'future',
      title: 'Future',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}

export const galleryImageSchema = {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 999,
    },
  ],
}