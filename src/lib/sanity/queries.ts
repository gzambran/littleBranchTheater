// Queries for fetching data from Sanity

// Show queries
export const upcomingShowQuery = `*[_type == "show" && dateTime(startDate) > dateTime(now())] | order(startDate asc)[0] {
  _id,
  title,
  slug,
  startDate,
  endDate,
  venue,
  description,
  mainImage,
  ticketLink,
  ticketsAvailable
}`

// Team queries
export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  headshot
}`

// Vision queries
export const visionQuery = `*[_type == "vision"][0] {
  mission,
  values,
  future
}`

// Gallery queries
export const galleryImagesQuery = `*[_type == "galleryImage"] | order(order asc) {
  _id,
  title,
  description,
  image,
  alt
}`