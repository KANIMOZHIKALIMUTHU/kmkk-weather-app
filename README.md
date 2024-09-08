# Cities and Weather App

A React-based web application that displays a table of cities with infinite scroll, search functionality, and allows users to view the weather information for selected cities. Users can click on a city name to navigate to a detailed weather page or open the weather page in a new tab using right-click.

## Features

- Infinite scroll to load more cities.
- Search functionality with filtering as you type.
- Sorting options for city names, country names, and time zones.
- Click or right-click city names to navigate to the weather page.
- Display real-time weather data for the selected city using the OpenWeatherMap API.
- Dynamic background images on the weather page based on current weather conditions.

## Technologies Used

- React
- React Router
- Axios
- Infinite Scroll Component
- OpenWeatherMap API
- OpenDataSoft API (Cities Data)
- Custom CSS

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KANIMOZHIKALIMUTHU/kmkk-weather-app.git
   cd frontend
2. Install dependencies:

   npm install

3. Start the development server:

   npm start
   The app will be available at http://localhost:3000.

4. Usage
   
   Use the search bar to filter the list of cities.
   Click on a city name to navigate to a detailed weather page for that city.
   Right-click on a city name to open the weather page in a new tab.
   The weather page displays real-time weather information including temperature, weather condition, humidity, wind speed, and atmospheric pressure.
   The background image on the weather page changes dynamically based on the current weather conditions.
5. API Integration
   Cities Data
      The cities data is fetched from the OpenDataSoft API: https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000

   This API provides a list of cities with a population greater than 1,000.

6. Weather Data
   The weather data is fetched from the OpenWeatherMap API: https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={API_KEY}

   This API provides real-time weather data including temperature, weather conditions, humidity, wind speed, and more.

7. Future Improvements
   Add unit tests for key components.
   Implement user authentication for personalized weather data (e.g., favorite cities).
   Add loading spinners and error handling states.
   Improve performance with React Suspense and lazy loading.
   Optionally, include weather forecasts and not just current weather data.