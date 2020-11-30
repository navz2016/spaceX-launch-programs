# spaceX-launch-programs   [![Build Status](https://travis-ci.com/navz2016/spaceX-launch-programs.svg?branch=main)](https://travis-ci.com/github/navz2016/spaceX-launch-programs)

[View App](https://spacex-programs-launch.herokuapp.com/)

## Project Details

A front-end single page application which uses public api to fetch its data. Data can be filtered through various filters available.
The app is server side rendered with the use of **React** library.

Initial page is rendered using node.js which also serves the app. Following important dependencies are used:
- express
- react router
- babel
- body parser

## Build and Packaging

Boiler plate for build and packaging is made using following plugins:
- webpack
- babel loader
- css loader
- url loader

The application is deployed on **Heroku**, and **Travis** is used for CI. It is configured to automatically trigger a build every time something is pushed on the `main` branch following which it is delivered to Heroku for deployment.

Before deployment through Travis CI, unit test cases get checked. Test cases are written using following libraries:
- jest
- enzyme


## Highlights

- Application is server-side rendered, which helps in boosting the initial page load time and increasing the SEO scores.
- Fully responsive to covers all range of devices
- Used fully functional approach with react hooks which increases code readability
- Custom hooks used to reuse the logics
- Multiple highly reusable dummy components result in easier unit testing
- Used lazy loading to defer loading off-screen images which results in reduced initial page load time
- Used memoizing to prevent unnecessary rerenders, increasing the performance of functional components
- Used best practises and performation optimizations, resulting in a high lighthouse score

## Scripts Available

To run the project on local machine following command used:
### `npm run dev`

Following this, app can be viewed at [http://localhost:8080](http://localhost:8080) in the browser.

To run unit tests, command used:
### `npm run test`

To build app in production, following command used:
### `npm run build`

## Lighthouse Scores

**Local code on chrome dev tools**
![localcode](https://user-images.githubusercontent.com/57329295/100627435-04be2280-334d-11eb-93c5-410ea11963a9.png)

**Deployed code on chrome dev tools**
![prod_code_chrome](https://user-images.githubusercontent.com/57329295/100628027-c5dc9c80-334d-11eb-8404-0ce67993d1b9.png)

**web.dev**
![web.dev](https://user-images.githubusercontent.com/57329295/100628215-fae8ef00-334d-11eb-8928-fc500023a900.png)


