# Little Branch Theater - Claude Development Guide

## 🎭 Project Overview
Little Branch Theater is a Next.js 14 website for a new theater company in Boise, Idaho. The site showcases theatrical productions, provides information about the theater company, and includes an innovative "Beyond the Lobby" digital experience for audience members.

## 🏗️ Technical Stack
- **Framework**: Next.js 14.1.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom accent color (#a6e22e)
- **Animations**: Framer Motion
- **Fonts**: Inter (sans), Playfair Display (display)
- **Analytics**: Vercel Analytics & Speed Insights
- **Image Optimization**: Next.js Image component
- **CMS**: Sanity integration (configured but not actively used)
- **Deployment**: Docker-ready (port 3003)

## 📁 Project Structure
```
/Users/gzambran/ClaudeWorkspace/little-branch-theater/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with dark theme
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles & Tailwind imports
│   │   ├── metadata.ts         # SEO metadata
│   │   ├── sitemap.ts          # Sitemap generation
│   │   ├── ensemble/           # Team member showcase
│   │   ├── gallery/            # Photo gallery
│   │   ├── shows/              
│   │   │   └── upcoming/       # Current show (Honey Brown Eyes)
│   │   └── who-we-are/         # About page
│   ├── pages/                  # Pages Router (for special pages)
│   │   └── beyond-the-lobby.tsx # Special standalone experience
│   ├── components/             
│   │   ├── Header.tsx          # Main navigation
│   │   ├── Footer.tsx          # Site footer
│   │   ├── ContactModal.tsx    # Contact form modal
│   │   ├── TeamMember.tsx      # Team member cards
│   │   ├── GalleryLightbox.tsx # Photo gallery viewer
│   │   ├── YouTubeEmbed.tsx    # YouTube video component
│   │   ├── beyond-the-lobby/   # Components for Beyond the Lobby
│   │   └── ...                 # Other UI components
│   └── data/
│       ├── team-members.ts     # Team/cast data
│       └── beyond-the-lobby/   # Data for Beyond the Lobby experience
├── public/
│   └── images/                 # Static images
│       ├── ensemble/           # Team member photos
│       ├── sponsors/           # Sponsor logos
│       └── ...                 # Show posters, gallery images
├── docker-compose.yml          # Docker configuration
├── tailwind.config.js          # Tailwind configuration
└── package.json                # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary Accent**: `#a6e22e` (lime green) - Used for highlights, CTAs, and links
- **Background**: Pure black (`#000000`) for main site
- **Text**: White on dark backgrounds, gray-300 for secondary text
- **Beyond the Lobby**: Warm palette with `#D4A017` (gold) and `#8B4513` (brown)

### Typography
- **Display Font**: Playfair Display - Used for headings (font-display class)
- **Body Font**: Inter - Used for all body text (font-sans class)

### Key UI Patterns
- Dark theme throughout main site (class="dark" on html)
- Gradient shadows with accent color: `shadow-[0_0_35px_rgba(217,119,6,0.25)]`
- Hover animations with Framer Motion
- Responsive design with mobile-first approach

## 🎬 Current Production: Honey Brown Eyes

### Show Details
- **Dates**: May 22 - June 1, 2025
- **Venue**: Visual Arts Collective, Garden City, Idaho
- **Ticketing**: Through Alley Repertory Theater (ThunderTix)
- **Description**: Bosnia 1992 war drama about two former friends
- **Partnership**: Collaboration with Alley Repertory Theater

### Key Pages
1. **Homepage** (`/`): Features show poster, mission statement, CTA to "Who We Are"
2. **Productions** (`/productions`): Grid of current and past shows
3. **Honey Brown Eyes** (`/shows/honey-brown-eyes`): Full show details, trailer, tickets, sponsors, reviews
4. **Who We Are** (`/who-we-are`): Company mission and founders
5. **Gallery** (`/gallery`): Production photos
6. **Get Involved** (`/get-involved`): Community engagement opportunities (TBD)

## 🎭 Beyond the Lobby Experience

### Overview
A standalone, white-themed digital experience accessible via QR code from playbills. Provides historical context about the Bosnian War for audience members.

### Key Features
- **Separate Design**: White background, warm color palette (NOT dark theme)
- **Sections**:
  - Lobby Photo Gallery
  - Bosnian War Timeline (1992-1995)
  - Voices of the War (quotes)
  - War Photography
  - About Little Branch
- **Interactive Elements**: Photo modals, timeline media, quote carousel
- **Access**: `/beyond-the-lobby` (Pages Router for layout independence)

## 🚀 Development Commands
```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run start    # Start production server
./run-local.sh   # Local Docker deployment (port 3003)
```

## 📦 Key Dependencies
- **UI Components**: 
  - `@heroicons/react` - Icon library
  - `swiper` - Touch slider
  - `yet-another-react-lightbox` - Gallery lightbox
- **Animation**: `framer-motion` - Animations and transitions
- **CMS**: `@sanity/client`, `next-sanity` - Content management (configured)
- **Analytics**: `@vercel/analytics`, `@vercel/speed-insights`

## 🔧 Configuration Files
- **next.config.js**: Basic Next.js config with React strict mode
- **tailwind.config.js**: Custom accent color, font variables
- **docker-compose.yml**: Docker setup for port 3003
- **tsconfig.json**: TypeScript configuration with path aliases (@/)

## 🎯 Important Implementation Details

### Navigation
- Fixed header with mobile hamburger menu
- Skip to main content link for accessibility
- Social media links in footer

### SEO & Metadata
- Structured data for organization and events
- Open Graph tags
- Canonical URLs
- Sitemap generation

### Performance Optimizations
- Image optimization with Next.js Image
- Lazy loading for gallery images
- Client-side navigation with Next.js Link
- Analytics integration

### Accessibility
- ARIA labels on interactive elements
- Skip navigation link
- Semantic HTML structure
- Keyboard navigation support

## 🚨 Current State & Notes

### Active Features
- Full website for Honey Brown Eyes production
- Team member showcase with bios
- Photo gallery with lightbox
- Beyond the Lobby digital experience
- Contact modal functionality
- YouTube video embeds

### Future Considerations
- Sanity CMS is configured but not actively used for content
- Show archive/past productions section could be added
- Newsletter signup integration potential
- Donation/support page opportunity

## 🎨 Component Patterns

### Common Patterns
```tsx
// Motion animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>

// Accent color usage
className="text-accent hover:text-accent/80"
className="bg-accent hover:bg-accent/90"

// Shadow effects
className="shadow-[0_0_35px_rgba(217,119,6,0.25)]"
```

## 📝 Content Management

### Static Data
- Team members: `/src/data/team-members.ts`
- Beyond the Lobby content: `/src/data/beyond-the-lobby/`
- Images: `/public/images/`

### Dynamic Routes
Currently all routes are static. Future shows could use dynamic routing.

## 🔐 Environment & Deployment

### Local Development
- Default port: 3000
- Docker port: 3003
- No environment variables currently required

### Production
- Domain: littlebranchtheater.org
- Deployment platform: Likely Vercel (based on analytics)

## 💡 Key Business Context

### Theater Company
- **Founders**: Amela Karadža and Jovani Zambrano
- **Mission**: Connect communities through bold storytelling and diverse voices
- **Focus**: Local artists, underrepresented communities, meaningful conversation
- **Partners**: Alley Repertory Theater, Visual Arts Collective

### Sponsors
- Alley Repertory Theater
- Visual Arts Collective
- Arts Idaho
- Puffin Foundation

## 🎭 Special Considerations

### Beyond the Lobby
This is a unique feature - a separate digital experience for theater-goers accessed via QR code. It maintains its own design system (white/warm colors vs main site's dark theme) and provides educational context about the Bosnian War relevant to the play.

### Mobile Responsiveness
The site has specific mobile layouts, particularly for the show details page which reorganizes content for smaller screens.

### Future Shows
The structure suggests planning for multiple productions. The `/shows/upcoming` pattern could expand to include archives, seasons, etc.

---

## 🤖 Claude-Specific Tips

When working on this project:
1. **Respect the dual design systems** - Dark theme for main site, light/warm for Beyond the Lobby
2. **Use Framer Motion** for new animations to maintain consistency
3. **Follow the accent color pattern** - #a6e22e is the brand color
4. **Maintain accessibility** - The theater values inclusive experiences
5. **Consider the audience** - Mix of theater enthusiasts and general public
6. **Remember the context** - Small, new theater company with meaningful mission
7. **Test responsive layouts** - Significant mobile traffic expected
8. **Preserve the Beyond the Lobby experience** - It's a unique differentiator

This is a passion project for a new theater company bringing diverse voices to the stage. Quality and attention to detail matter.