FROM node:18-alpine3.15-slim
WORKDIR /app/frontend
COPY . .
RUN npm install
RUN npm run build --prod