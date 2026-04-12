<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# 🚀 S. K. Kiran – Robotics & Embedded Systems Portfolio

Welcome to my personal portfolio website!  
This project showcases my work in robotics, embedded systems, and intelligent automation.

---

## 🧑‍💻 About Me

I am a Mechatronics Engineering student passionate about building intelligent real-world systems by combining hardware and software.

My interests include:
- 🤖 Robotics & Autonomous Systems  
- 🔌 Embedded Systems & IoT  
- ⚙️ Control Systems & Automation  

---

## 📂 Featured Projects

### 🔹 Solar Panel Alignment System
Hydraulic-based solar tracking system to improve efficiency.

### 🔹 Smart Fertilizer System
Machine learning-based system for optimized fertilizer usage.

### 🔹 Waste Segregation System
Automated waste classification using sensors.

### 🔹 ROS Autonomous Robot
Simulation of an autonomous robot using ROS, Gazebo, and RViz.

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Animation:** Framer Motion  
- **Tools:** Vite, Git, GitHub  
- **Robotics:** ROS, Gazebo, RViz  

---

## 📄 Resume

👉 [Download Resume](./public/resume.pdf)

---

## 📫 Contact Me

- 📧 Email: sasthakiran046@gmail.com  
- 💼 LinkedIn: https://www.linkedin.com/in/kiran-s-k/  
- 💻 GitHub: https://github.com/KiranSastha  

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/KiranSastha/kiran-robotics-portfolio.git
cd kiran-robotics-portfolio
npm install
npm run dev
>>>>>>> 708141d03bba70c0bd26a346406a4be7a2a31089
