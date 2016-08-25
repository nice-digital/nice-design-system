# Define from what image we want to build from
# Comes with Node.js and NPM already installed
FROM mhart/alpine-node:6.4

ENV PORT=80

# Create a directory to hold the application code inside the image, this will be the working directory for your application:
# Create app directory
RUN mkdir -p /app

#VOLUME ["/app/node_modules"]

WORKDIR /app

# Copy just the package.json so we can npm install
COPY package.json /app

# Install build tools for e.g. node-sass
RUN apk add --no-cache make gcc g++ python

# Install grunt CLI globally and node-gyp for building
RUN npm i -g grunt-cli node-gyp

# Install app dependencies
RUN npm install

# Copy application source into the docker image
COPY . /app

# Build dist version of app
RUN grunt dist

# Default command is running the node app itself
CMD [ "node", "web/server" ]

# Expose the port that the node app runs on
EXPOSE 80
