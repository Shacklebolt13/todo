FROM openjdk:11
WORKDIR /app/backend
COPY . .
RUN ./mvnw clean package 
RUN cp /app/frontend/dist/todo-app/* /app/backend/src/main/resources/static/ -r
RUN java -jar /app/backend/target/todo-app-0.0.1-SNAPSHOT.jar 
