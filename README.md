# Ticket Summarizer Frontend

A React-based frontend for the **Ticket Summarizer** application built with **React**, **Vite**, and **Axios**.

The application provides an intuitive interface for creating support tickets, viewing AI-generated summaries, and displaying ticket information by communicating with the Spring Boot backend through an Nginx reverse proxy.

---

## Features

* Create support tickets
* Display AI-generated summaries
* Display predicted priority
* Display predicted category
* View all submitted tickets
* Responsive user interface
* Integrated with Spring Boot backend
* Dockerized deployment

---

## Tech Stack

* React
* Vite
* Axios
* Docker
* Docker Compose
* Nginx
* AWS EC2

---

## Project Structure

```text
simple-ui/
│── src/
│── public/
│── nginx/
│── Dockerfile
│── docker-compose.yml
│── package.json
```

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Docker Deployment

### Build Docker Image

```bash
docker build -t simple-ui .
```

### Start Using Docker Compose

```bash
docker compose up --build
```

---

## Deployment

The frontend is deployed on an AWS EC2 instance using Docker and is served through Nginx.

Nginx is configured to:

* Serve the React frontend
* Forward `/api/*` requests to the Spring Boot backend

---

## What I Learned

During this project, I gained practical experience with:

* React and Vite
* API integration using Axios
* Docker containerization
* Docker Compose
* Nginx reverse proxy configuration
* AWS EC2 deployment
* Debugging frontend-backend communication

---

## Author

**Anisha TJ**

Developed as part of a full-stack deployment and cloud learning project.
