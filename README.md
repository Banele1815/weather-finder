# Weather Finder

Weather Finder is a responsive React application that allows users to search for current weather conditions in cities worldwide. It retrieves live weather data from the Weatherstack API.

## Features

- Search for weather by city
- Automatically loads Johannesburg on startup
- Displays current temperature and weather conditions
- Displays feels-like temperature, humidity and wind speed
- Weather icons supplied by Weatherstack
- Loading indicator during API requests
- Friendly error messages
- Responsive desktop, tablet and mobile design
- Custom React hook for weather logic

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- Weatherstack API
- Fetch API

## Project Structure

```text
src/
├── components/
│   ├── ErrorMessage.jsx
│   ├── LoadingSpinner.jsx
│   ├── SearchForm.jsx
│   └── WeatherCard.jsx
├── hooks/
│   └── useWeather.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

You need:

- Node.js
- npm
- A Weatherstack API key

### Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Enter the project:

```bash
cd weather-finder
```

Install the dependencies:

```bash
npm install
```

Create a `.env.local` file in the main project folder:

```text
VITE_WEATHERSTACK_API_KEY=your_weatherstack_api_key
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Available Commands

```bash
npm run dev
```

Starts the development server.

```bash
npm run lint
```

Checks the source code for linting problems.

```bash
npm run build
```

Creates a production build in the `dist` folder.

## Environment Variables

The project requires:

```text
VITE_WEATHERSTACK_API_KEY
```

The real `.env.local` file must not be committed to GitHub. Use `.env.example` to show the required variable without exposing the real key.

## How It Works

1. The user enters a city.
2. `SearchForm` sends the city to the custom `useWeather` hook.
3. The hook calls the Weatherstack API using `fetch()`.
4. React displays a loading state while the request runs.
5. Successful weather data is formatted and displayed by `WeatherCard`.
6. Failed requests display a friendly error message.

## API Credit

Weather information is provided by [Weatherstack](https://weatherstack.com/).

## Author

Gcina Banele Kubeka