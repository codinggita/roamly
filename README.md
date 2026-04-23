# ROAMLY #

# 🧳 TravelEase – Smart Travel Companion

**TravelEase** is a full-stack web application built for travelers who face three major real-world problems:

1. **Unreliable hotel & café WiFi** – No more guessing if WiFi works before sitting down.
2. **Finding trusted doctors with clear costs** – Emergency or routine checkups without fear of overcharging.
3. **Regional menu accessibility** – Never struggle with a menu in a different language again.

> 🏆 Built for **Razorpay Problem Statement Challenge**  
> 🎯 Solves 3 high-impact travel problems (Scores: 90.5, 100, 76.5)

---

## 📸 Figma Design

> 🔗 [https://www.figma.com/design/OgEdwRnqRReyt0DUaiH3o0/1st.fig?node-id=8-19&t=H0LtTSz89vxF1ouq-1]

---

## 📑 Table of Contents

- [Problem Statements](#problem-statements)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Installation & Setup](#installation--setup)
- [API Endpoints](#api-endpoints)
- [Authentication (JWT)](#authentication-jwt)
- [Database Schema (MongoDB)](#database-schema-mongodb)
- [Screenshots](#screenshots)
- [Future Scope](#future-scope)
- [Team](#team)
- [License](#license)

---

## 🎯 Problem Statements

| # | Problem | Itch Score | Industry |
|---|---------|------------|----------|
| 1 | Why is hotel and café WiFi unreliable for travelers? | 90.5 | Travel |
| 2 | How can travelers quickly find trusted doctors with clear costs in unfamiliar cities? | 100 | Travel |
| 3 | How can regional menus be made more accessible for interstate travellers? | 76.5 | Travel |

---

## ✨ Features

### 📡 WiFi Trust Index
- Real-time WiFi speed check (upload/download/latency)
- Crowd-sourced ratings & reviews for hotels/cafés
- Map view with WiFi reliability heatmap
- Last verified timestamp
- Report bad/slow WiFi

### 🏥 DocClear – Trusted Doctors + Transparent Costs
- Search doctors by city, specialty, or symptom
- Verified consultation fees (GP, Specialist, Surgeon)
- Medicine cost estimates for common prescriptions
- User reviews with price transparency badges
- Emergency contact & location sharing

### 🍛 MenuLens – Regional Menu Decoder
- Upload or capture menu photo (OCR powered)
- Instant translation (Hindi, Tamil, Telugu, Kannada, Bengali, Gujarati, Marathi)
- Dish description, spice level, veg/non-veg/egg
- Allergen filters (gluten, dairy, nuts, Jain, vegan)
- Price conversion & portion size guide

### 🔐 User System (JWT Auth)
- Signup / Login with email
- JWT token stored in HTTP-only cookie or localStorage
- Protected routes for adding reviews, ratings, and menu translations
- User profile with travel preferences

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React 18 + Vite + TailwindCSS |
| State Management | React Context API + useReducer |
| Routing | React Router DOM v6 |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose ODM |
| Authentication | JWT (JSON Web Token) + bcryptjs |
| HTTP Client | Axios |
| OCR | Tesseract.js (client-side) / Google Vision API |
| Translation | Google Translate API (free tier) |
| Maps | Leaflet / Mapbox GL |
| Charts | Recharts (for WiFi speed trends) |
| Styling | TailwindCSS + DaisyUI / HeadlessUI |
| Deployment | Vercel (Frontend) + Render / Railway (Backend) |
