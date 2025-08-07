# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
# COPY package*.json ./
RUN npm install



# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

