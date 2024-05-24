## Nare League React Project
Welcome to the Nare League React project! This project is designed to provide a user-friendly interface for managing periods, matches, competitions, and more markets in the Nare League ecosystem.

## Setup
Follow these steps to set up and run the project locally:

## Clone the repository:

```bash

git clone https://github.com/your-username/nare-league.git
```
## Dependencies 

```bash 

"react-router-dom": "^6.14.2",
"moment": "^2.29.4",
"axios": "^1.4.0",
"react": "^18.2.0",
"@reduxjs/toolkit": "^1.9.5",
"react-redux": "^8.1.1",
"bootstrap": "^5.3.0",  the choice of css libraries ie antd, bootstrap or mui is upto you
"react-bootstrap": "^2.8.0", this is optional


````

## Install dependencies:

```bash

cd nare-league

npm install
```
## Run the development server:

```bash

npm start
```


## Open the application:

Visit http://localhost:3000 in your web browser to view the Nare League application.


### Current NareLeague implementations
```bash
https://betnare.com/nare-league
```

### Frontend Dependencies
#### React Router DOM: "^6.14.2"

Used for handling navigation and routing within the React application.
#### Moment.js: "^2.29.4"

Utilized for parsing, validating, manipulating, and displaying dates and times in the Nare League application. Useful for displaying in-play time and off-play time.
#### Axios: "^1.4.0"

A promise-based HTTP client for making requests to the backend API endpoints. Used for fetching data from the server.
#### React: "^18.2.0"

The core library for building user interfaces in the Nare League React project.
#### @reduxjs/toolkit: "^1.9.5"

Provides utilities for managing Redux state in a more efficient and ergonomic way. Used for state management in the Nare League application.
#### React-Redux: "^8.1.1"

Official React bindings for Redux. Used to connect Redux state to React components in the Nare League application.

## UI Libraries (Optional)
### Bootstrap: "^5.3.0"

A popular CSS framework for building responsive and mobile-first websites. Used for styling components in the Nare League application.
### React-Bootstrap: "^2.8.0"

A library of Bootstrap components built with React. Optional, but can be used to enhance UI consistency and speed up development.
 
### Redux
Redux Tests
- The use of Redux actions,slices, reducers, and selectors this involves knowledge of react redux and redux toolkit. 



## Axios 
Axios tests
- Ensure that the application handles response data and errors appropriately.
- Axios allows you to define interceptors and middlewares to preprocess requests or responses before they are handled.
-  Request Transformation: Modifying request data or headers before sending them to the server.


## endpoints to use 

```bash

- Periods:      https://api.betnare.com/v1/nare-league/periods
- competitons:  https://api.betnare.com/v1/categories
- matches:      https://api.betnare.com/v1/nare-league/matches
- Playouts:     https://api.betnare.com/v1/nare-league/live
- results:      https://api.betnare.com/v1/nare-league/results
- standings:    https://api.betnare.com/v1/nare-league/standings

```


## Available Items
The Nare League project provides access to the following items:

- *Periods*: Manage periods of matches within the league.
- *Matches*: View and manage individual matches, including odds.
- *Playouts*: View and manage individual scores and outcomes.
- *Competitions*: Explore competitions within the league and their standings ie countries game options.
- *More Markets*: Access additional markets and betting options for matches.

## Description of task

### API Integration:

Utilize Axios to make HTTP requests to the provided endpoints for:
- Periods
- Competitions
- Matches
- Playouts
- Results
- Standings

### Data Mapping and Display:

- Fetch competitions data and map it to display competition names and images( visit the site to get images for the countries).
- Fetch periods data for the competion *default competition is 2*  during call pass competition_id 2 as you default on navigations call with the desired id and display them accordingly with their periods (matches or playouts).
- Depending on the selected competition or period, fetch and display matches or playouts data.
- Display additional market options for matches(this should only be available on matches tab, same as periods should only be available on matches tab).
- Handle in-play status to determine whether to call matches or playouts data.

### Navigation:

Implement navigation between different sections of the application:
- Matches
- Results
- Standings

Ensure appropriate navigation based on the current tab (matches, results, standings).
Provide the ability to navigate back to the main competitions screen.
### User Interface:

Design and implement user interfaces for displaying competitions, periods, matches, playouts, results, and standings.
Consider using React components and libraries like React-Bootstrap or Material-UI for UI consistency and responsiveness.

### Error Handling:

Implement error handling for failed API requests or unexpected responses.
Display appropriate error messages to the user and provide options for retrying requests or navigating back. ie you can turn of wifi on nare league and see how this is done or you can implement it in a way more appropriate to you


### Key Tests:
- Data Retrieval: Ensure successful retrieval of data from the provided API endpoints.
- Data Mapping: Verify that data is correctly mapped and displayed in the UI components.
- Navigation: Test navigation between different sections of the application and ensure correct rendering based on the selected tab.
- Error Handling: Test error handling scenarios and verify that appropriate error messages are displayed to the user.
