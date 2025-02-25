# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all frontend files into the container
COPY . .

# Expose port 3000 for frontend
EXPOSE 3000

# Start the frontend app
CMD ["npm", "start"]
