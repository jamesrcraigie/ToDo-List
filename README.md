# Frontend template

Uses rollup and tailwind cli to independantly manage css and js file compiling. Currently configured with tailwind and a demo react component.

# Todo 

* Add watch tasks for dev
* Add production build task
* Investigate if sass is needed as tailwind is being used

# Project layout

### views
Stores all the html in ejs files.

### views/partials
This can be used for any html that needs to be repeated across mulitple pages.

### js
Stores all the development javascript files

### css
Stores css files

### wwwroot
Public directory used by express. Use this to stores images, icons etc

### tailwind.config.js
Configuration file for tailwindcss

### rollup.config.mjs
Configuration file for rollup

### server.js
Entry point for the express js server

# Quickstart guide

1. Run `npm install`
2. Run `npm run dev` to build js and css files
3. Run `npm run serve` to start node server