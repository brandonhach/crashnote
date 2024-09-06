FROM eclipse-temurin:17-jdk
WORKDIR /server
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline
CMD ["./mvnw", "spring-boot:run"]
