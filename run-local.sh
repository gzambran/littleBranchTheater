#!/bin/bash

# Colors for better output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Determine build cache strategy
BUILD_CMD="docker-compose build"
if [ "$1" == "--no-cache" ]; then
  BUILD_CMD="docker-compose build --no-cache"
  echo -e "${YELLOW}⚠️  No-cache build requested.${NC}"
fi

echo -e "${YELLOW}Checking for existing containers...${NC}"
if docker-compose ps -q | grep -q .; then
  echo -e "${BLUE}Stopping and removing existing containers...${NC}"
  docker-compose down --volumes --remove-orphans
fi

echo -e "${BLUE}Rebuilding Little Branch...${NC}"
eval $BUILD_CMD

echo -e "${BLUE}Starting the container...${NC}"
docker-compose up -d

# Check if container started successfully
if [ $? -eq 0 ]; then
  echo -e "${GREEN}Container is running!${NC}"
else
  echo -e "${RED}Failed to start container. Check the logs for errors.${NC}"
  exit 1
fi