
# React, Styled-Components, Redux-Little-Router, Redux, Redux Saga, Babel, Webpack HMR boilerplate

## About
The original game was written while learning React on it's own as a purely client-side non-persistent game.
Since then, it has undergone several iterations:
v.1.0.1 Re-written while at the Grace Hopper Accademy, implementing css-animations. Remained client-side only, non-persistent state.
v.1.0.2 Current version, implementing redux as a state management method (with Immutable.js), styled components, redux-little-router for routing and redux saga in preparation for the backend.
The app continues to be a study playground that will more than likely continue to evolve as I learn (or try to learn!) more.

## Features
* Webpack Hot Module Reloading (HMR)
* Optional Webpack Dashboard for useful terminal output while developing
* A fairly production-ready webpack config (dll, uglify, minify, image compression, image inlining) (tailor it further based on the needs of your project)

## Installation
* clone the repo
* npm install
* npm start to run dev server

## Webpack DLL
* this plugin caches vendor dependencies so they're not rebuilt on every hot reload!
* by default, the cache is **not** updated when you update a dependencies, so the old version will be served until you update the cache.
* to update the cache, run `npm run build:dll`
* if you want to add a new dependency to the cache, add it to dll.webpack.config.js

## Website:
Game play: deployed at: [findMe](http://boring-leakey-fc2cb2.netlify.com)

## Future Plans:
1. Full game functionality served by a backend (probably Node with Hapi)
2. Database: I plan to use a relational db since I've been working in MongoDB for such a long time!
3. Websockets for multi-player games.
4. Ability for users to upload their own cards that will be vetted and approved before going live.
5. Categories for similarly themed cards (art, music, food, cartoons for the kiddies!, plants)
6. Enhanced game levels (increasing number of cards, increasing image comparison complexity)
