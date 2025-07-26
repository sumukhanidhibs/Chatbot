# Spring AI Tool

This project demonstrates using Spring Boot with [Spring AI](https://github.com/spring-projects/spring-ai) to call OpenAI for text and image generation. A minimal React application built with Vite is included in `spring-ai-react/` to interact with the backend.

## Features

- Chat endpoint (`/ask-ai`) with optional GPT-4o support.
- Dall-E image generation via `/generate-image`.
- Recipe generator endpoint (`/recipe-creatorr`).
- Simple React front-end with tabs for Chat, Image Generator and Recipe Generator.

## Getting Started

1. **Set the OpenAI API Key**

   Edit `src/main/resources/application.properties` and provide your OpenAI API key:

   ```
   spring.ai.openai.api-key=YOUR_OPENAI_KEY
   ```

2. **Run the backend**

   Use Maven to start the Spring Boot application:

   ```bash
   mvn spring-boot:run
   ```

   The server runs on `http://localhost:8080`.

3. **Run the React front‑end**

   ```bash
   cd spring-ai-react
   npm install
   npm run dev
   ```

   The React app will start on `http://localhost:5173` (default Vite port).

## Project Structure

- `src/main/java` – Spring Boot backend with controllers and services.
- `src/main/resources/application.properties` – configuration (OpenAI key).
- `spring-ai-react/` – Vite + React front-end.

## Endpoints

- `GET /ask-ai?prompt=...` – simple chat response.
- `GET /ask-ai-options?prompt=...` – chat using GPT‑4o with custom temperature.
- `GET /generate-image?prompt=...` – returns an array of generated image URLs.
- `GET /recipe-creatorr?ingredients=...&cuisine=...` – generates a recipe.

## Building for Production

Run `mvn package` to build the backend JAR. The React application can be built with `npm run build` and served by your preferred web server.

---

This repository is intended as a starting point for experimenting with Spring AI and OpenAI.
