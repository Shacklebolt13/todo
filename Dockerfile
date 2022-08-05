FROM node:18-alpine3.15 AS frontend
WORKDIR /app/frontend
COPY todoApp .
RUN npm install
RUN npm run build --prod
RUN pwd
RUN ls
RUN apt update && apt install tree
RUN tree /app/

FROM openjdk:11
WORKDIR /app/backend
COPY todoBackend .
RUN chmod +x ./mvnw
COPY --from=frontend /app/frontend/dist/todo-app ./
RUN apt install tree
RUN ls 
RUN tree /app/


