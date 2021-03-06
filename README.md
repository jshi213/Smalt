# Smalt Starfish Group 38 - SE750/CS732 Project

# Documentation

Welcome to Smalt - A Spotify Music Alternative Listening Technology.

## Overview
Smalt is a Web Application intended for mobile use that utilises the Spotify API to create playlists established by hosts which a number of guest users can contribute on. Songs added to the playlist by the guests of the party, will be queued based on the number of likes each song receives i.e. the songs at the top of the playlist would have received the highest number of likes. 

## Features
* Multiple 'rooms' can be created to host multiple parties.
* Screen resolution - scales to size regardless of device whether it be a smart phone or tablet.  
* Voting - guests can 'like' a song based on their personal preferences.
* Hosts don't need to manually queue songs based on guests preferences - the highest voted songs will be queued first. 

## Deployment Instructions
1. Open a new Terminal window and enter the following to clone the Project repository: `git clone https://github.com/jshi213/Smalt.git`
2. After cloning the repository, navigate to the Smalt directory in any terminal. 
3. Install all the required dependencies and packages using the following command:  `npm install`  (this will have to be run in both frontend and backend directories, as well as the root Smalt directory for the next command to work)
4. Run the project on your local machine from the root Smalt directory: `npm run dev`
5. Navigate to localhost:3000 in your browser to use the application.

## How to Use

### Host
1. Click on 'HOST A PLAYLIST'.
2. Agree to the Terms and Conditions imposed by Spotify.
3. Enter a room name. 
4. After entering a room name, you will be directed to the homepage which displays the room code.
5. Guests will be able to enter this code to use the room. 
6. Songs will begin to be added to a playlist shown on screen, which will be ordered based on the number of likes. 

### Guests
1. Click on 'JOIN A PLAYLIST'.
2. Enter the room code that is generated by the host.
3. Simply search for songs and start adding them to the playlist.
4. 'Like' the songs by preference, by clicking on the heart on the right hand side of each song. 

Note: Each new tab opened on the browser will act as a unique user, use this method to test functionality. 

## Known Bugs and Issues

1. The playing functionality is currently incomplete and dysfunctional. 
2. No test suite.
3. Incomplete UI (not-so-appealing design)
4. Devices button and menu button on homepage incomplete.
5. To resolve DB issues or if DB needs to be accessed, please contact 

## Meeting Minutes

The following are records of our Meeting Minutes we stored on our shared Project Google Drive folder. 

### 01/04/21 - Zoom meeting
* Decided on app layout
* Made initial Figma wireframes
* Discussed GitHub workflow
* Spoke about how we would manage around timezone differences and commitments outside of Uni
* Made initial commit onto repo

### 07/04/21 - Zoom meeting
* Assigned roles to team members
* Pranesh - Database Schema and Queries set up
* Joel - Host project on Heroku
* Josh - Assist with frontend
* JingWei - Design homepages for host and user

### 16/04/21 - Zoom meeting
* Joel took initiative to create some issues for our team to work on
* Group mostly worked on Assignment 2 for the entire Zoom meeting

### 21/04/21 - Zoom meeting
* Spotify Authentication and login responsibility 
* Agreed to meet at Uni on Sunday 25/04/21 to work on the project
* Added more issues to be worked on 

### 25/04/21 - In-person & Zoom meeting
* Discussed issues with backend - errors when running the app.
* Added more issues to be worked on

### 01/05/21 - In-person & Zoom meeting
* Discussed Spotify API documentation and the endpoints required
* Database having issues with saving songs to database
* Merged outstanding pull requests

### 05/05/21 - In-person & Zoom meeting
* Andrew's Canvas announcements today
* Decided Heroku is not necessary for deployment 
* Agreed on a mutual time to present the project in class
* Refactor of code - all files to ensure consistency and readability
* Songs not playing

### 09/05/21 - In-person & Zoom meeting
* Refactor of code - changes made to new files and existing files to ensure consistency and readability
* Fix any bugs
* Play/pause/stop functionality to be added
* Submitted the assignment

## Tasks Breakdown

| [Joel Shin (Full-stack & Team lead)](https://github.com/jshi213) | Josh Burton (Mostly Full-stack)  | Jingwei Min (Frontend)    | Pranesh Chand (Backend)                      |
| ------------------------------------------------------------ | -------------------------------- | ------------------------- | -------------------------------------------- |
| Create issues on GitHub                                      | Spotify login and authentication | Design pages for frontend | Database Connection & Schema Setup           |
| Backend - All Aspects                                        | Backend - Endpoints & Sockets    | search bar error message  | Assisted with creating Db Queries            |
| Frontend - All Aspects                                       | Initialised DB Queries           | icon button               | Write README.md file                         |
| Initialisation of GitHub Repository                          | Backend - All Aspects            | format the outlook        | Write Wiki on GitHub Repo                    |
| Heavily assisted all team members                            | Frontend - All Aspects           | update css style          | Facilitated both Zoom and In-person meetings |
| Code reviews                                                 | Code reviews                     |                           |                                              |
| Wrote part of README                                         | Assisted all team members        |                           |                                              |

Please note 'All Aspects' denotes both Joel and Josh are well experienced in these areas of software development and went above and beyond their means to assist other team members in the Project with the tasks, including carrying out their own tasks that they were assigned for Full Stack development. 
