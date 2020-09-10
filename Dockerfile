#stage 1 : Environnement node.JS
FROM node:latest as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

#stage 2 : Application web MyDreamApp
FROM nginx:alpine
COPY --from=build-step /app/dist/my-dream-app /usr/share/nginx/html
