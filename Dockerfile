FROM node:18-alpine AS base

# Install dependencies for building node modules
RUN apk add --no-cache libc6-compat python3 make g++

# Create working directory
WORKDIR /app

# Dependencies layer
FROM base AS deps
# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies explicitly
RUN npm install next@14.1.0 react@18 react-dom@18 @sanity/client@6.12.3 @sanity/image-url@1.0.2 next-sanity@7.0.17 @heroicons/react@2.1.1 framer-motion@11.0.3 yet-another-react-lightbox@3.15.6
RUN npm install -D tailwindcss@3.3.0 autoprefixer@10.0.1 postcss@8 typescript@5 @types/react@18 @types/react-dom@18

# Builder layer
FROM base AS builder
WORKDIR /app

# Copy node_modules from deps
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the application source
COPY . .

# Set environment variables
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=placeholder
ENV NEXT_PUBLIC_SANITY_DATASET=production
ENV NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03

# Build the application
RUN npm run build

# Runner layer
FROM base AS runner
WORKDIR /app

# Create app user to run the app more securely
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set production environment variables
ENV NODE_ENV production
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=placeholder
ENV NEXT_PUBLIC_SANITY_DATASET=production
ENV NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03

# Copy the necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Switch to the nextjs user
USER nextjs

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]