#!/bin/bash

    # Colors for output
    GREEN='\033[0;32m'
    BLUE='\033[0;34m'
    NC='\033[0m'

    echo -e "${BLUE}🦄 Starting Unicorn Transcription deployment...${NC}"

    # Install dependencies
    echo -e "${GREEN}Installing dependencies...${NC}"
    npm install

    # Build the application
    echo -e "${GREEN}Building the application...${NC}"
    npm run electron:build

    echo -e "${BLUE}✨ Build complete! Your application is ready in the 'release' folder.${NC}"
    echo -e "${GREEN}You can find your packaged application at:${NC}"
    echo -e "  • Mac: release/Unicorn Transcription.app"
    echo -e "  • Windows: release/Unicorn Transcription.exe"
    echo -e "  • Linux: release/unicorn-transcription.AppImage"
