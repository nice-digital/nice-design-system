# Define from what image we want to build from
# Comes with Node.js and NPM already installed
FROM node:6.4

ENV PORT=80

# Create a directory to hold the application code inside the image, this will be the working directory for your application:
# Create app directory
RUN mkdir -p /app

#VOLUME ["/app/node_modules"]

WORKDIR /app

# Copy just the package.json so we can npm install
COPY package.json /app

# Install grunt CLI globally
RUN npm i -g grunt-cli

# Install app dependencies
RUN npm i

# Copy application source into the docker image
COPY . /app

# Build dist version of app
RUN grunt dist

# Default command is running the node app itself
CMD [ "node", "web/server" ]

# Expose the port that the node app runs on
EXPOSE 80
