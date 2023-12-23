FROM node:alpine as builder
WORKDIR '/app'

COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .
RUN npm run build

## Create container for ngnix and move build file to /usr/share/nginx/html dir 
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html