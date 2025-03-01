#!/bin/bash

# Colors for better output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Checking for existing containers...${NC}"
if docker-compose ps -q | grep -q .; then
  echo -e "${BLUE}Stopping and removing existing containers...${NC}"
  docker-compose down
fi

echo -e "${BLUE}Building Little Branch Theater website container...${NC}"
docker-compose build

echo -e "${BLUE}Starting the container...${NC}"
docker-compose up -d

# Check if container started successfully
if [ $? -eq 0 ]; then
  echo -e "${GREEN}Container is running!${NC}"
  echo -e "${GREEN}Open http://localhost:3000 in your browser to see the website.${NC}"
  echo ""
  echo -e "${YELLOW}Note:${NC} The first load might take a few moments as Next.js starts up."
  echo -e "${YELLOW}The site uses placeholder data since no Sanity project is connected.${NC}"
  echo ""
  echo -e "To stop the container, run: ${BLUE}docker-compose down${NC}"
  echo -e "To view logs, run: ${BLUE}docker-compose logs -f${NC}"
else
  echo -e "${RED}Failed to start container. Check the logs for errors.${NC}"
  exit 1
fi