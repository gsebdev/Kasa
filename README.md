# Kasa
This project was carried out as part of a training course with the OpenClassrooms platform.\
This is a ReactJS web app for an apartment rentals between individuals platform.\
[See demo](https://gsebdev.github.io/Kasa/)
## Features
* Fetch appartment list from a JSON file
* Slideshow component
* Collapse component
* React-router used for dynamic routes (id of the appartment) to display the appartment details page

## Set the Router type
If you need a Hash Router you can set this in the .env file, else the app will use the Browser Router
```
REACT_APP_USE_HASH_ROUTER=TRUE
```
## Available Scripts

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run deploy-demo`

Builds and deploy the demo on github pages, don't forget to set the REACT_APP_USE_HASH_ROUTER to TRUE in order to work on github pages.