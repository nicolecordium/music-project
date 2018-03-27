# MUSICPROJECT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

## Running the application

1. Run `yarn` or `npm install` to install all dependencies before attempting to build or run the server. 
2. Ensure you have a `.env` file in the root folder with values `API_KEY={{API_KEY_HERE}}` and 
`BASE_URI=https://api.nextbigsound.com`. Also make sure those values are in `src\environments\environment.ts`.
3. Run `npm run start` to run the client applicaton and Node API server. 
4. Navigate to `http://localhost:4200/`.

## Using the application

1. Enter an artist in the input and click the Search button. 
2. Select an artist from the list that appears below.
3. A visualization of data for the artist's activity over the past year will be displayed below. 
A circle node will be rendered for each event type in a week - larger nodes will indicate more events of that type took place.
The nodes are linked in proximity by which week the events took place in. 
Nodes are draggable and zoomable for more detail.

## Implementation

The visualization comes from this resource: https://medium.com/netscape/visualizing-data-with-angular-and-d3-209dde784aeb
It's a great tutorial for utilizing the d3 library with Angular!
