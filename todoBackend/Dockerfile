FROM openjdk:11
WORKDIR /app/backend
COPY . .
RUN chmod +x ./mvnw
RUN apt install tree
RUN ls /
RUN cp /app/frontend/dist/todo-app/* /app/backend/src/main/resources/static/ -r
RUN ./mvnw clean package 
EXPOSE 8080
RUN java -jar /app/backend/target/todo-app-0.0.1-SNAPSHOT.jar 
