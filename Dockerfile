# Use the official Node.js image as a base image
FROM node:21

# Create and change to the app directory
WORKDIR /app

# Copy package.json and package-lock.json to the app directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the app directory
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000
