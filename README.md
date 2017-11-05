# FriendFinder.js
## A simple node.js / express.js application to see who's most compatible with you
- - - -
### Requirements
* Must have 10 questions with a scale of 1 to 5 based on how much the user agrees or disagrees with the question
* Must use express, body-parser, and path
* `htmlRoutes.js` must include two routes:
	* a Get route `/survey` which should display the survey page
	* a default, catch-all route that leads to home.html which displays the home page
* `apiRoutes.js` must include two routes:
	* a GET route with url `/api/friends` that will display a JSON of all possible friends
	* a POST route `/api/friends` that will handle incoming survey results. It will also handle the compatibility logic
* The application data should be saved inside `app/data/friends.js` as an array of objects
* Host application in Heroku
- - - -
