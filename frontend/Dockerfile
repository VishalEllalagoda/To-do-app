# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
#RUN npm install

# Install dependencies with proper permissions
RUN npm install --unsafe-perm=true --allow-root

# Copy all frontend files into the container
COPY . .

# Ensure react-scripts has execution permissions
RUN chmod +x node_modules/.bin/react-scripts

# Create a non-root user and switch to it
RUN useradd -m appuser
USER appuser

# Expose port 3000 for frontend
EXPOSE 3000

# Set environment variable to disable auto-opening the browser
ENV BROWSER=none

# Start the frontend app
CMD ["npm", "start"]
