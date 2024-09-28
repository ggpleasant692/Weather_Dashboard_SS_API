# Weather_Dashboard_SS_API


## Overview
The Weather Dashboard is a web application that allows users to search for a city's current and future weather conditions. By leveraging the OpenWeather API, users can view a 5-day weather forecast along with the current temperature, humidity, and wind speed. The app also maintains a search history for easy access to previously searched cities.

## Technologies Used
- **HTML**: For structuring the web application.
- **CSS**: For styling the dashboard and enhancing user experience.
- **JavaScript**: For handling API requests and dynamically updating the DOM.
- **OpenWeather API**: For retrieving weather data.
- **localStorage**: To store and manage search history.

## What I Learned
Through the development of this project, I gained valuable experience in:
- **Working with APIs**: I learned how to make GET requests to external APIs and handle the JSON responses.
- **Dynamic DOM Manipulation**: I practiced using JavaScript to update the HTML dynamically based on user input and API data.
- **Error Handling**: I improved my skills in managing user input errors and providing feedback within the application.
- **Persistence with localStorage**: I discovered how to store data on the client-side to create a more user-friendly experience.

## Challenges Faced
1. **Displaying Future Weather Cards**: Initially, I struggled to get the future forecast cards to display correctly when searching for a city. I resolved this by updating the code to correctly parse and show the forecast entry data for each day.

2. **Finding Icon Documentation**: I had difficulty locating the correct documentation for the weather icons provided by OpenWeather. After some investigation, I discovered that higher-resolution icons were available, which I then incorporated into the dashboard for better visual representation.

3. **localStorage Issues**: I encountered a problem where the search history was not persisting correctly after a page refresh. To remedy this, I ensured that the search history was being saved in localStorage correctly and added a function to load the history on page load. This way, users can see their previous searches even after refreshing the page.
