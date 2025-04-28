# 🎨 Wild Canvas

**Wild Canvas** is a beautiful e-commerce site dedicated to animal paintings, offering users a smooth and modern shopping experience.  
Built with **Angular**, **Angular Material**, and **Mockoon**, it includes features like **searching**, **sorting**, and a full **cart management** system.

---

## 🚀 Tech Stack

- **Angular** – Frontend Framework
- **Angular Material** – UI Components & Design
- **Mockoon** – Mock API for local development

---

## 🏗️ Project Structure

```
AMAZING-ANIMAL-PAINTING-SITE/
│
├── .angular/                # Angular configuration
├── .vscode/                 # VSCode settings
├── node_modules/            # Project dependencies
├── public/
│   └── assets/              # Static files and assets
├── src/
│   ├── app/
│   │   ├── cart/
│   │   │   ├── cart-view/    # Cart page components
│   │   │   ├── cart.module.ts
│   │   │   ├── cart.service.ts
│   │   │   └── cart.service.spec.ts
│   │   ├── models/
│   │   │   ├── product.ts    # Product model
│   │   │   └── product.spec.ts
│   │   ├── product/
│   │   │   ├── product-list/ # Product list UI
│   │   │   ├── product.module.ts
│   │   │   ├── product.service.ts
│   │   │   └── product.service.spec.ts
│   │   ├── app-routing.module.ts # Routing between components
│   │   ├── app.component.*    # Root component files
│   │   └── app.module.ts      # App module setup
│   ├── environments/          # Environment settings
│   ├── index.html             # Main HTML page
│   ├── main.ts                # Angular entry point
│   └── styles.css             # Global styles
├── angular.json
├── package.json
└── README.md
```

---

## ✨ Key Features

- 🛒 **Product Listing** — Explore a wide range of animal paintings.
- 🔍 **Live Search** — Quickly find paintings by name.
- 🧹 **Sorting Options** — Sort products by name or price.
- 🛒 **Cart Management** — Add, remove, and manage cart items.
- 🧪 **Mock API** — Data served via Mockoon for a full offline development experience.

---

## 📦 How to Run Locally

### Prerequisites
- Node.js and npm
- Angular CLI
- Mockoon (or any mock API tool)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/wild-canvas.git
   cd wild-canvas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run Mockoon**
   - Import the environment or manually create endpoints matching `/products`, `/cart`, etc.

4. **Start the Angular application**
   ```bash
   ng serve
   ```
   Visit `http://localhost:4200/` in your browser.

---

## 📋 To-Do List

- [ ] Add product filters by category
- [ ] Implement checkout functionality
- [ ] Improve mobile responsiveness
- [ ] Add animations with Angular Animations

---

## 🤝 Contribution

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

> Made with ❤️ for wildlife art lovers.
