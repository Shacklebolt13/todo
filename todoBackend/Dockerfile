FROM openjdk:11
WORKDIR /app/backend
COPY . .
RUN chmod +x ./mvnw
RUN ./mvnw clean package 
RUN cp /app/frontend/dist/todo-app/* /app/backend/src/main/resources/static/ -r
EXPOSE 8080
RUN java -jar /app/backend/target/todo-app-0.0.1-SNAPSHOT.jar 
