# Feed-the-foodie

## Description

We have created a website that helps the user come up with recipe ideas but also suggests nearby restaurants that would match the cuisine they're interested in.

The application helps people find recipes they hadn't thought of before or restaurants they didn't know about.

## Application usage

![demo](./assets/images/Feed%20The%20Foodie.gif)

Due to time constraints and changes to our team dynamic, we ran out of time to fully develop the restaurants page. Because of this, the images and maps in this page are hardcoded in the HTML code, meaning no matter what restaurant is returned by the API, the photo will not change. 

If you would like to see the functionality of the TripAdvisor API retrieving images, please refer to the favourites page when the restaurant ID stored in local storage is used to make a request to the API.

## Screenshots

### Home page

![Home page](./assets/images/screenshots/home-page.png)

### Recipes

![Recipes page](./assets/images/screenshots/recipes.png)

### Restaurants

![Restaurants page](./assets/images/screenshots/restaurants.png)

### Favourites

![Favourites page](./assets/images/screenshots/favourites.png)

### Shopping list

![Shopping list page](./assets/images/screenshots/shopping-list.png)

## Deployment

https://sarasg89.github.io/feed-the-foodie/

## Credits

This application uses two APIs: [TripAdvisor](https://tripadvisor-content-api.readme.io/reference/overview) and [Spoonacular](https://spoonacular.com/food-api/docs).

We used [Tailwind](https://tailwindcss.com/docs/installation) to style this page and use their documentation for guidance.

In order to use the TripAdvisor API, we had to set up a CORS proxy on GCP following [this](https://github.com/taichunmin/gcf-cors-anywhere) tutorial. To summarize, the Google Cloud Function runs our code without needing a server, because Google creates it for us, runs the code and closes the server immediately.

The original repo for this project can be found [here](https://github.com/MohammadKouchaki/Feed-the-foodie). The owner of this repo is no longer part of the project so it had to be cloned here in order to deploy the application. Please refer to the original repo for commit and branch history.

## Project Proposal and Presentation

[Here](https://docs.google.com/document/d/1AQT4OEH4UhSiaxFsiAVgNsJgzWs-vwxX/edit?usp=share_link&ouid=102341349698427392931&rtpof=true&sd=true) is a link to view our initial project proposal

Our presentation is accessible on [this](https://www.canva.com/design/DAFaA6s-QW8/e3X8dgEmiYC-qLPmN6SdpQ/edit) link

## License

MIT License

Copyright (c) 2023 Group-Project_team5

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
