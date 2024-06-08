# My Website
This website is a reflection of who I am, and also serves as a portfolio of what I'm able to accomplish by myself.

# Tree
├───src
│   ├───Content
│   │   ├───About
│   │   ├───Documentation
│   │   ├───Home
│   │   │   └───Buttons
│   │   ├───Projects
│   │   └───View
│   ├───Footer
│   │   └───SoundControl
│   ├───Header
│   │   ├───BackBtn
│   │   ├───Banner
│   │   └───Socials
│   ├───Overlay
│   ├───Scenery
│   │   ├───BackgroundFade
│   │   ├───Cloud
│   │   ├───Hills
│   │   ├───Moon
│   │   ├───Mountains
│   │   ├───Sailboat
│   │   ├───Stars
│   │   └───Sun
│   └───Sound
│       └───media
└───workshop

# Development
Simply run `npm run dev` to hotload the project. It will output a local port which the website will run on.

# Testing
run `npm test` for an output of any issues with the code. Currently it's stuck on the way src tags are used with imports of .mp3's and .png's, though this doesn't affect the code.

# Deployment
The project can be built using the command `vite build`, which will output the project to the dist folder. 
Actual deployment is still being investigated since this website cannot exisit locally forever.
