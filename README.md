# Character-Counter-App
A real-time text analysis tool built with React, TypeScript, Redux, and Modular CSS.

Features
✅ Character, word, and sentence counting
✅ Option to exclude spaces in character count
✅ Set a custom character limit
✅ Letter density analysis
✅ Keyboard navigable
✅ Responsive design for different screen sizes

Tech Stack
#React – UI library
#TypeScript – Strongly typed JavaScript
#Redux Toolkit – State management
#Modular CSS – Component-specific styling

Installation & Setup
1. Clone the Repository
sh
Copy
Edit
git clone https://github.com/yourusername/character-counter.git
cd character-counter
2. Install Dependencies
sh
Copy
Edit
npm install
or

sh
Copy
Edit
yarn install
3. Start the Development Server
sh
Copy
Edit
npm run dev
or

sh
Copy
Edit
yarn dev
The app will be available at http://localhost:5173 (if using Vite).

Folder Structure
csharp
Copy
Edit
character-counter/
│── src/
│   ├── assets/              # Static assets (images, icons)
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page components (Home.tsx)
│   ├── redux/               # Redux store & slice
│   ├── styles/              # Modular CSS styles
│   ├── App.tsx              # Main app component
│   ├── index.tsx            # Entry point
│── public/                  # Static files (index.html, favicon)
│── package.json             # Dependencies & scripts
│── tsconfig.json            # TypeScript configuration
│── README.md                # Project documentation
