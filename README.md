[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/OuSBNpwM)
# Nammabnb Project

Nammabnb Project

The word Namma stands for “my’’ in Tamil(நம்ம) and Kannada(ನಮ್ಮ)

- Project Overview <br>
The Nammabnb project is designed to replicate key functionalities of the popular accommodation booking platform, Nammabnb. This project incorporates HTML, CSS, and TypeScript for the front end, and MongoDB for backend data storage.

A video of the team explaining our project hosted on Google Drive: <br>
[Google Drive Video Link](https://drive.google.com/file/d/1EyBhAFJ5ydpz5TYg0VA3jNiLIDmdlUxO/view?usp=sharing)

# Features
1. Login Page
Description: The login page provides users with a secure authentication mechanism.
Implementation Details:
User credentials are securely processed.
Authentication tokens are used for secure user sessions.
It has a chatbot too

2. Landing Page
Description: The landing page is the primary interface for users to explore available accommodations.
Implementation Details:
Accommodation listings are retrieved from the MongoDB database.
Users can browse and filter listings based on various criteria.
Users can change language to book in their preferred language.
Users can save properties as "favorites" to view later.
Users can view their upcoming trips.

3. Host Page
Description: Host Page is the primary interface for hosts to list their properties
Implementation Details:
Accommodation listings are retrieved from the MongoDB database.
The host can view their properties.
The host can view the reservations that Users booked.


4. Payment Functionality
Description: The payment system allows users to complete bookings securely.
Implementation Details:
Users can enter payment details for selected accommodations.
Payment transactions are processed securely using established payment gateways.
Prerequisites

# Ensure that the following software is installed before running the project:
- Node.js
- MongoDB
- npm

![image](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/145234036/e8617333-971f-4822-a29c-6ce6c03a0004)


# Nammabnb - User Management API
Overview
Nammabnb is a project that implements user management functionalities for a property rental platform using Node.js and MongoDB. This API handles user registration, login, retrieval, update, and deletion, serving as a crucial part of the backend system for managing user-related operations.

Technologies Used
Node.js: JavaScript runtime for server-side development.
Express: Web application framework for Node.js, simplifying API development.
MongoDB: NoSQL database for efficient data storage.
Mongoose: MongoDB object modeling tool for Node.js.
Postman: A comprehensive API development and testing tool.
Setup

# Clone the Repository:
git clone https://github.com/your-username/nammabnb.git

# Install Dependencies:
npm i

# Error Handling
The API handles errors and responds with appropriate status codes and error messages for invalid requests or server errors.

# Testing
Use Postman or any API testing tool to test the API endpoints.
Send requests to the specified endpoints with valid request bodies.
Verify the responses and ensure that the API functions as expected.


# Project Tech Stack

This project is built using various technologies to create a modern and efficient web application. Here's a breakdown of the tech stack:

## Libraries/Frameworks

1. **MERN Stack:**
   - MongoDB (Database)
   - Express.js (Backend Framework)
   - React.js (Frontend Library)
   - Node.js (Runtime Environment)

2. **Next.js:**
   - React.js (Frontend Library)
   - Node.js (Runtime Environment)
   - Next.js (React Framework for Server-Side Rendering)

3. **Prisma:**
   - Prisma (Database Access Library)

4. **Axios:**
   - Axios (HTTP client for making requests)

5. **Zustand:**
   - Zustand (React state management library)

6. **NextAuth:**
   - NextAuth (Authentication library for Next.js)

7. **Redux:**
   - Javascript Library

## Languages

1. **JavaScript (JS):**
   - Core language for frontend (React) and backend (Node.js).

2. **TypeScript (TS):**
   - A superset of JavaScript that adds static typing.

3. **HTML:**
   - A markup language for structuring web content.

4. **CSS:**
   - Style sheet language for describing the presentation of a document written in HTML.

## Styling

1. **Tailwind CSS:**
   - Utility-first CSS framework.

## Authentication/Authorization

1. **Bcrypt:**
   - Library for hashing passwords.

2. **NextAuth:**
   - Handles authentication for Next.js applications.

## APIs

1. **Stripe API:**
   - Payment processing API.

2. **REST API:**
   - Architectural style for building web services.

## Database

1. **MongoDB:**
   - NoSQL database.

## Additional

1. **Stripe API:**
   - Payment processing API.

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google Authentication
- GitHub authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
- Favorites System
- Shareable URL filters <br>
- Payment checkout page
- payment page
- success thank you page


![WhatsApp Image 2023-12-13 at 8 30 38 PM](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/144633279/e919b1b8-93ee-4c3f-9c7d-0ac0ed5db677)
![WhatsApp Image 2023-12-13 at 8 31 12 PM](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/144633279/da2ec2e3-ac64-4e4b-b909-1105059b189c)
![WhatsApp Image 2023-12-13 at 8 47 40 PM](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/144633279/1a071edf-2f57-4d09-88aa-1415811cf6f1)
![paymentpage](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/144633279/87de8452-f9d1-4a14-a1cb-151d9f3eafe8)
![StripePage](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/144633279/103a90ec-128f-40be-a789-478fed61697b)
![image](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/144633279/2fa268b7-c2ec-43a6-9fb9-70a221c56eb0)
![WhatsApp Image 2023-12-13 at 11 46 26 PM](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/144633279/fc43fa22-b5bb-49ec-8151-8eecfd8737b0)


## Prerequisites

Make sure you have Node.js version 14.x installed.

## Cloning the Repository

```bash

Install Packages
npm i

Setup .env File
Create a .env file in the root of your project and add the following variables:

DATABASE_URL="mongodb+srv://narayanandee:Nammabnb@cluster0.0ylqfuz.mongodb.net/test"
NEXTAUTH_SECRET="NEXTAUTH_SECRET"
GITHUB_ID=845e59eec3934c95ca75
GITHUB_SECRET=83b6fb92cb52dd24c24207ee9d70d4fe0a41e7b7
GOOGLE_CLIENT_ID=1022443289191-5ju4ibd8cbvev4th0g7amobe285q6ph5.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="dydylqlwn"
AUTH_TOKEN=d41600f6fdd1272e1b19379bc6555133
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51OKjBEKXqBj2n8MJyJCxXOfRdWXHO7nVZnI9tJIBVsy9qLKnlbZgTVURMbsxqEoedHykktYUvZjkv6xsZsBpE3J300DEk0nvnV
STRIPE_SECRET_KEY=sk_test_51OKjBEKXqBj2n8MJexDFXubg0umAGmRpgakcPE0hcEgq7fVDHAryDl0ngRADd6payzkV8YZPdLIArrqPICc03ucU00uO5BiN1r
JWT_SECRET=jwtsecret

- Setup Prisma:
npx prisma db push

- Commands used for installing Libraries
npx create-next-app --typescript
npm i react-date-range
npm i -D @types/react-date-range
npm install react-spinners 
npm i stripe #for Stripe API (Payments)
npm i @reduxjs/toolkit-react-redux
npm install -D tailwindcss postcss autoprefixer
npm tailwindcss init-p
npm install react-hot-toast
npm install next-auth @prisma/client/ @next-auth/prisma-adapter


- Start the App
npm run dev

##github PR link for viewing code documentation
https://github.com/info-6150-fall-2023/final-project-techno-sync/tree/AbhinayPRforCodeDocumentation


Have used redux to manage app-wide state and to solve prop drilling
https://docs.google.com/document/d/1wm8Mf7IR-4q7Kl1YVr2ah0mpmdxR4gTWKcgLT2oyTWc/edit









