# specify base image 
FROM node:14-alpine
## When you get the alpine version of an image,it means you're getting the absolute most stripped down version of that image possible.

WORKDIR /usr/app
# Install dependencies
COPY ./ ./

RUN npm install

# Default command 
# CMD ["npm","start"]