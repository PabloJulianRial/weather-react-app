Weather Dashboard React App
Created by Pablo Rial

A personal dashboard application built with React that displays the current weather, a 7-day forecast, an interactive map, and a personal to-do list.

➡️ Live Demo ⬅️
Screenshot
Suggestion: Add a screenshot of your application here to give visitors a visual preview. Replace the placeholder below.

📋 Features
Real-time Weather: Displays current temperature, conditions, wind speed, and humidity.

7-Day Forecast: Shows the weather forecast for the upcoming week.

Change Location: Users can search for and set a new location to view weather data.

Interactive Map: Utilizes Leaflet to display the selected location on a map.

To-Do List: A fully functional to-do list to add and manage personal tasks.

Context API: Uses React Context for efficient state management across components.

Responsive Design: A clean and modern UI that works on various screen sizes.

🛠️ Tech Stack & Libraries
Core: React 18, TypeScript

Build Tool: Vite

Routing: React Router DOM

API Communication: Axios

Styling: Sass/SCSS

Mapping: Leaflet

Deployment: GitHub Pages

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js (which includes npm) installed on your computer.

npm

Bash

npm install npm@latest -g
Installation
Clone the repository:

Bash

git clone https://github.com/PabloJulianRial/weather-react-app.git
Navigate to the project directory:

Bash

cd weather-react-app
Install NPM packages:

Bash

npm install
Set up your Environment Variables:

This project requires an API key from a weather service to fetch data.

Create a .env file in the root of your project.

Add your API key to the .env file like this:

VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
Note: You will need to sign up for a weather API service like OpenWeatherMap or another provider to get your key.

Running the App
To run the app in development mode, execute the following command. This will start the Vite development server.

Bash

npm run dev
Open http://localhost:5173 (or the address shown in your terminal) to view it in the browser.

🏗️ Build & Deployment
Building for Production
To create a production-ready build of the app, run:

Bash

npm run build
This command bundles your app into static files in the dist directory.

Deploying to GitHub Pages
This project is configured to deploy directly to GitHub Pages.

First, run the build command:

Bash

npm run build
Then, run the deploy script:

Bash

npm run deploy
This will push the contents of the dist folder to the gh-pages branch of your repository.

📂 Project Structure
The project is organized into components and containers for modularity and clarity.

src/components: Contains reusable, presentational components (e.g., weatherCard, toDoItem).

src/containers: Contains higher-level components that manage state and logic (e.g., Dashboard, Weather).

src/context: Holds the WeatherContext for global state management.

src/App.tsx: The main application component where routing is handled.

📜 License
This project is licensed under the MIT License - see the LICENSE.md file for details.
