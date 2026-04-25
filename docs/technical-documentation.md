# 📄 Technical Documentation

## 📌 Overview

This portfolio website is a front-end web application built using HTML, CSS, and JavaScript.
It showcases projects, skills, and contact information while demonstrating advanced functionality such as API integration, state management, and dynamic user interaction.

---

## 🧱 Project Structure

```
202278660-fatimahalshehab-assignment3/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── README.md
```

---

## ⚙️ Core Features Implementation

### 1. 🎨 UI & Layout

* Built using semantic HTML structure
* Styled with CSS using a glassmorphism design
* Responsive layout using CSS Grid and media queries

---

### 2. 🔗 API Integration

* GitHub API is used to fetch repositories dynamically
* Implemented using `fetch()` with async/await
* Displays repository name, description, and link

```javascript
fetch("https://api.github.com/users/Fatimah-Alshehab/repos")
```

* Includes basic error handling if the request fails

---

### 3. 🧠 Complex Logic

#### Project Filtering

* Filters projects based on selected category
* Uses `data-category` attributes

#### Visitor Timer

* Tracks time spent on the website
* Uses `setInterval()` to update every second

#### Form Validation

* Checks if fields are filled
* Validates email format using regex
* Displays dynamic feedback messages

---

### 4. 🧠 State Management

* Dark mode state is stored using `localStorage`
* Font size adjustments persist during interaction
* UI updates dynamically based on user actions

---

### 5. 🎯 DOM Manipulation

* Elements are selected using `querySelector` and `getElementById`
* Dynamic content (GitHub projects) is created using `createElement()`
* Event listeners are used for interaction handling

---

### 6. ⚡ Performance Optimization

* Images use lazy loading to improve performance
* Efficient event handling and minimal DOM updates
* Clean and organized CSS to reduce redundancy

---

## 🔄 User Interaction Flow

1. User opens the website
2. UI elements load with animations
3. User can:

   * Toggle dark/light mode
   * Filter projects
   * View GitHub repositories
   * Submit contact form
4. Timer starts automatically and updates continuously

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* GitHub API

---

## 📌 Summary

This project demonstrates the integration of modern web development concepts including dynamic data fetching, state management, and user interaction.
The application is designed to be clean, responsive, and efficient while maintaining simplicity and clarity.
