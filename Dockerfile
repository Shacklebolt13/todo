FROM node:18-alpine3.15 AS frontend
WORKDIR /app/frontend
COPY todoApp .
RUN npm install
RUN npm run build --prod

FROM openjdk:11
WORKDIR /app/backend
COPY todoBackend .
RUN chmod +x ./mvnw
COPY --from=frontend /app/frontend/dist/todo-app ./src/main/resources/static/
RUN apt update && apt install tree -y
RUN ls 
RUN tree /app/


