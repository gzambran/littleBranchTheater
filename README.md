# Little Branch Theater Website

A Next.js website for Little Branch Theater, a new theater company bringing fresh perspectives to the stage.

## Project Overview

- **Client**: Little Branch, a new theater company
- **Objective**: A website highlighting upcoming shows, introducing the company, showcasing vision, and featuring a media gallery
- **Design Theme**: Dark theme with black/white + a purple accent color (#6B46C1)

## Features

- Built with Next.js 14 and App Router
- Responsive design with Tailwind CSS
- Dynamic content management with Sanity CMS
- Interactive gallery with lightbox functionality
- Subtle animations with Framer Motion

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/little-branch-theater.git
cd little-branch-theater
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

Update the `.env.local` file with your Sanity project credentials.

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sanity CMS

This project uses Sanity CMS for content management. To set up your own Sanity studio:

1. Create a new Sanity project at [sanity.io](https://www.sanity.io/)
2. Use the schemas in `src/lib/sanity/schema.ts` as a reference
3. Update your `.env.local` file with your Sanity project credentials

## Deployment

The site is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository to Vercel
3. Configure environment variables
4. Deploy

## Docker Quick Start

For a quick preview of the site design, you can run a static HTML version using Docker:

```bash
./run-local.sh
```

This will build and start a Docker container with a simplified static version of the site, accessible at http://localhost:3000.

> **Note**: The static Docker version is for demonstration purposes only and doesn't include all the features of the full Next.js site.

## Docker Configuration

The project includes multiple Docker configurations:

- `dockerfile.static` - A simple static HTML version (recommended for quick demo)
- `dockerfile.simple` - A simplified Next.js version
- `Dockerfile` - The full Next.js application (requires proper dependency setup)

To use a specific configuration, update the `docker-compose.yml` file to point to the desired Dockerfile.

## License

[MIT](LICENSE)