# 🔢 Smart Input Combiner - React + TailwindCSS

A simple yet intelligent React app that **adds numbers** or **combines strings** based on user input. This project showcases dynamic behavior in form handling using React's state management, styled beautifully with Tailwind CSS.

## 🚀 Features

- Add two numeric values
- Concatenate two strings if inputs are not numbers
- Responsive and modern UI with Tailwind CSS
- Uses React functional components and hooks
- Displays result dynamically

## 🛠️ Tech Stack

- **React** – Frontend library
- **Tailwind CSS** – Utility-first CSS framework
- **Vite** – Fast build tool for modern web projects

## 📂 Project Structure

<Pre>
  ```
  multiple-input-react/
├── node_modules/
├── public/
│   ├── assets/                # Static assets (images, fonts, etc.)
│   └── index.html            # Main HTML template
├── src/
│   ├── App.css               # Main application styles
│   ├── App.jsx               # Root React component
│   ├── index.css             # Global styles
│   ├── main.jsx              # Application entry point
│   ├── MultipleInp.jsx       # Multiple input component
│   └── ResultComp.jsx        # Results display component
├── .gitignore
├── .eslint.config.js         # ESLint configuration
├── package-lock.json
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
└── vite.config.js            # Vite configuration
  ```
</Pre>


## 💡 How to Use

1. **Clone the Repository**

   git clone https://github.com/yourusername/smart-input-combiner.git
   cd smart-input-combiner

2. Install Dependencies

   npm install
   
3.Run the App

 npm run dev

✨ How It Works
If both inputs are valid numbers → it adds them.

If one or both are not numbers → it joins them as strings with a space in between.

Output is shown dynamically below the form.

GitHub Repo : [https://github.com/Vishwanathangit/Input-Combiner-React.git]

LiveDemo : [https://input-combiner-react.vercel.app/]
