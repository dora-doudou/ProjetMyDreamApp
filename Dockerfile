#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 1
FROM nginx:alpine
COPY --from=node /app/dist/my-dream-app /usr/share/nginx/html
