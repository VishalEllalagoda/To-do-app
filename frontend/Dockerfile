# Use Node.js as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install
RUN chmod -R 777 node_modules

# Copy all frontend files into the container
COPY . .

# Expose port 3000 for frontend
EXPOSE 3000

# Start the frontend app
CMD ["npm", "start"]
