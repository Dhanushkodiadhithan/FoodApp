# 🍽️ Food App

A simple and clean recipe browsing application built with **React** and **CSS**.
This app displays a list of food items on the home page, and clicking on any item opens a detailed page showing the recipe or procedure for that food. This project is beginner-friendly and demonstrates component-based UI structure, props handling, and simple navigation.

---

## ⭐ Features

### 🏠 **Home Page – Food List**

* Displays multiple food items with images.
* Each card is clickable.
* Clean grid layout.

### 📄 **Recipe Detail Page**

* Opens when a food item is selected.
* Shows a static procedure for all dishes (same recipe for all).
* Demonstrates routing and UI rendering.

### 🎨 **Simple & Clean UI**

* Styled using plain CSS.
* Components like `Food`, `ListFood`, and `Header` are neatly structured.

### ⚛️ **Built With React**

* Functional components.
* Reusable code.
* Props-based data flow.

---

## 🛠️ Tech Stack

| Technology     | Purpose                                     |
| -------------- | ------------------------------------------- |
| **React**      | Front-end UI                                |
| **CSS**        | Styling                                     |
| **JavaScript** | Logic                                       |
| **Vite / CRA** | Development environment (as per your setup) |

---

## 📁 Folder Structure

```
src/
│
├── component/
│   ├── food.jsx
│   ├── food.css
│   ├── listfood.jsx
│   ├── listfood.css
│   ├── header.jsx
│   ├── header.css
│
├── App.jsx
├── App.css
├── index.jsx
├── index.css
├── setupTests.js
├── reportWebVitals.js
│
└── public/
    └── food images, icons etc...
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/food-app.git
cd food-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

or (if using Bun)

```bash
bun install
```

### 3️⃣ Start development server

```bash
npm start
```

or (Vite):

```bash
npm run dev
```

### 4️⃣ Open in browser

```
http://localhost:3000
```

or for Vite:

```
http://localhost:5173
```

---

## 🧪 How It Works

### ▶ Home Page

* Uses `listfood.jsx` to load all food items.
* Each food item is rendered using `food.jsx`.

### ▶ Recipe Page

* When a card is clicked, the selected food name is passed.
* Displays the same static recipe for all foods.

### ▶ Styling

* Pure CSS using separate `.css` files for each component.


## 📌 Future Improvements

* Add different recipes for each food
* Use an API to fetch real recipes
* Add search functionality
* Add category filters
* Add animation and transitions

---

## 🤝 Contributing

Pull requests and suggestions are welcome!

---

## 🧑‍🍳 Author

**Dhanushkodi Adhithan**
