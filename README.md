# Weather Dashboard React App

Created by [Pablo Rial](https://github.com/PabloJulianRial)

[![Build with Vite](https://img.shields.io/badge/Build%20with-Vite-blueviolet)](https://vitejs.dev/)
[![Powered by React](https://img.shields.io/badge/Powered%20by-React-61DAFB)](https://reactjs.org/)
[![Styled with Sass](https://img.shields.io/badge/Styled%20with-Sass-cc6699)](https://sass-lang.com/)

A personal dashboard application built with React that displays the current weather, a 7-day forecast, an interactive map, and a personal to-do list.

---


## 📋 Features

- **Real-time Weather:** Displays current temperature, conditions, wind speed, and humidity.
- **7-Day Forecast:** Shows the weather forecast for the upcoming week.
- **Change Location:** Users can search for and set a new location to view weather data.
- **Interactive Map:** Utilizes Leaflet to display the selected location on a map.
- **To-Do List:** A fully functional to-do list to add and manage personal tasks.
- **Context API:** Uses React Context for efficient state management across components.
- **Responsive Design:** A clean and modern UI that works on various screen sizes.

---

## 🛠️ Tech Stack & Libraries

- **Core:** [React 18](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **API Communication:** [Axios](https://axios-http.com/)
- **Styling:** [Sass/SCSS](https://sass-lang.com/)
- **Mapping:** [Leaflet](https://leafletjs.com/)
- **Deployment:** [GitHub Pages](https://pages.github.com/)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (which includes npm) installed on your computer.

- **npm**
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.  **Clone the repository:**

    ```sh
    git clone [https://github.com/PabloJulianRial/weather-react-app.git](https://github.com/PabloJulianRial/weather-react-app.git)
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd weather-react-app
    ```

3.  **Install NPM packages:**

    ```sh
    npm install
    ```

4.  **Set up your Environment Variables:**

    This project requires an API key from a weather service to fetch data.

    - Create a `.env` file in the root of your project.
    - Add your API key to the `.env` file like this:
      ```
      VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
      ```
    - **Note:** You will need to sign up for a weather API service like [OpenWeatherMap](https://openweathermap.org/api) or another provider to get your key.

### Running the App

To run the app in development mode, execute the following command. This will start the Vite development server.

```sh
npm run dev
```

Open http://localhost:5173 (or the address shown in your terminal) to view it in the browser.

## 🏗️ Build & Deployment

### Building for Production

To create a production-ready build of the app, run:

```bash
npm run build
```

This command bundles your app into static files in the `dist` directory.

### Deploying to GitHub Pages

This project is configured to deploy directly to GitHub Pages.

First, run the build command:

```bash
npm run build
```

Then, run the deploy script:

```bash
npm run deploy
```

This will push the contents of the `dist` folder to the `gh-pages` branch of your repository.

## 📂 Project Structure

The project is organized into components and containers for modularity and clarity.

- **src/components**: Contains reusable, presentational components (e.g., `weatherCard`, `toDoItem`).
- **src/containers**: Contains higher-level components that manage state and logic (e.g., `Dashboard`, `Weather`).
- **src/context**: Holds the `WeatherContext` for global state management.
- **src/App.tsx**: The main application component where routing is handled.


