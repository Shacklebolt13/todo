FROM node:18-alpine3.15
WORKDIR /app/frontend
COPY . .
RUN npm install
RUN npm run build --prod
RUN ls /
RUN apt update && apt install tree