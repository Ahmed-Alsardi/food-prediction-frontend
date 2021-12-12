FROM node:17-alpine as node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/food-prediction-angular /usr/share/nginx/html
