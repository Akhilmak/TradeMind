FROM maven:3-eclipse-temurin-17 AS BUILD
COPY Application-Backend .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-alpine
COPY --from=build Application-Backend/target/*.jar trademind.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","trademind.jar"]