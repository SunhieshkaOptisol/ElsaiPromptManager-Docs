# Use Node.js 18 Alpine as base image
FROM node:20-alpine
 
# Set working directory
WORKDIR /app
 
# Copy package files
COPY package*.json ./
 
# Install ALL dependencies (including dev dependencies for build)
RUN npm ci
 
# Copy source code
COPY . .
 
EXPOSE 3000
 
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]