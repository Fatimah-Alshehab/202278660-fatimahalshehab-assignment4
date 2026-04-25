# 📄 Technical Documentation

## 📌 Overview

This project is a front-end web application built using HTML, CSS, and JavaScript.
It demonstrates dynamic behavior, API integration, and user interaction within a structured and responsive design.

---

## 🧱 Architecture

The application follows a simple client-side architecture:

* HTML → structure
* CSS → styling and layout
* JavaScript → logic and interactivity

---

## ⚙️ Core Features

### 1. 🎨 UI & Layout

* Semantic HTML structure
* CSS Grid for layout
* Glassmorphism design style
* Responsive design using media queries

---

### 2. 🔗 API Integration

* Uses GitHub API to fetch repositories
* Implemented with async/await and fetch()

```javascript
fetch("https://api.github.com/users/Fatimah-Alshehab/repos")
```

* Dynamically creates project cards in the DOM

---

### 3. 🧠 JavaScript Functionality

#### Dynamic Greeting

* Displays greeting based on current time

#### Project Filtering

* Filters projects using data attributes
* Updates UI dynamically

#### Show More / Show Less

* Controls visibility of project cards
* Improves user experience and layout clarity

#### Visitor Timer

* Tracks time spent on the page using setInterval

#### Form Validation

* Validates inputs and email format
* Displays feedback messages

---

### 4. 🧠 State Management

* Dark mode stored in localStorage
* UI updates based on saved state

---

### 5. ⚡ Performance Optimization

* Lazy loading images
* Efficient DOM updates
* Minimal reflows and repaints

---

## 🔄 Execution Flow

1. DOMContentLoaded triggers script execution
2. UI elements initialize (theme, greeting, timer)
3. GitHub API data is fetched and displayed
4. User interactions update UI dynamically

---

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript (ES6)
* GitHub API

---

## 📌 Summary

The project demonstrates the integration of front-end development concepts including dynamic data fetching, UI state management, and interactive features.
It is designed to be clean, responsive, and efficient.
