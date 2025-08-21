# 3D Developer Portfolio

<div align="center">
  <img src="https://github.com/Sarthak-code360/3D_Portfolio/assets/74900672/1b06669e-4e61-4648-b5e9-e9dc1a8d18dc" alt="Project Banner">
</div>

<div align="center">

A stunning, interactive 3D portfolio website built with React, Three.js, and Tailwind CSS.

</div>

## 🚀 Introduction

This project is a beautiful and responsive 3D portfolio website. It leverages the power of **Three.js** and **React Three Fiber** to create engaging 3D animations and models, providing a unique and immersive user experience. The portfolio is designed to showcase projects, skills, and experiences in a modern and visually appealing way.

## ✨ Features

- **Interactive 3D Models**: Engaging and animated 3D graphics.
- **Responsive Design**: Fully responsive and looks great on all devices, from mobile phones to desktops.
- **Reusable Components**: Built with a modular and scalable architecture using React components.
- **Custom Animations**: Smooth and beautiful animations powered by Framer Motion.
- **Contact Form**: A functional contact form that allows visitors to send emails directly from the website.
- **Performance Optimized**: Optimized for performance with lazy loading and other best practices.

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [React Three Drei](https://github.com/pmndrs/drei)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)
- [EmailJS](https://www.emailjs.com/)

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/3dfolio.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd 3dfolio
   ```
3. **Install the dependencies:**
   ```sh
   npm install
   ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📂 Project Structure

<pre>
/
├── public/
│   ├── desktop_pc/
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── canvas/
│   │   └── ...
│   ├── constants/
│   ├── hoc/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .gitignore
├── index.html
├── package.json
├── README.md
└── ...
</pre>

- **`public/`**: Contains static assets, including 3D models and images.
- **`src/`**: Contains the main source code of the application.
  - **`assets/`**: Images, logos, and other static assets.
  - **`components/`**: Reusable React components.
    - **`canvas/`**: Components related to Three.js canvas and 3D models.
  - **`constants/`**: Application constants and configuration.
  - **`hoc/`**: Higher-Order Components for adding reusable logic.
  - **`styles/`**: Global styles and Tailwind CSS configuration.
  - **`utils/`**: Utility functions.
  - **`App.jsx`**: The root component of the application.
  - **`main.jsx`**: The entry point of the React application.

## 🚀 Deployment

This project can be easily deployed to various hosting platforms. The `package.json` file includes a script for deploying to GitHub Pages.

To deploy the application to GitHub Pages, run the following command:

```sh
npm run deploy
```

This will build the application and push the contents of the `dist` directory to a `gh-pages` branch on your GitHub repository.

## 🙏 Acknowledgements

- This project was inspired by and based on the tutorial by [JavaScript Mastery](https://www.youtube.com/@javascriptmastery).
- 3D models from [Sketchfab](https://sketchfab.com/).

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
