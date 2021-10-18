
Steps to run in local environment:

Goto package.json folder

Type npm install in the command line

Add below lines in .env file (still I dint added this path in the git ignore file )

REACT_APP_API_URL = https://www.flickr.com/services/rest/
REACT_APP_API_KEY = d31cafd82266d3a79e899608f6e83727


Problem: 

To develop an app of photo gallery based on the search results.

Solution: 

The App should get the images from flickr.com using an axios API call to the server and displaying it in the grid format.

Features: 

1.  The UI should be minimilistic for usage for better functionality.
2.  on click event for enlarging the image  which displays the image dimension and also done additionally functionality like close the overlay image.
3.  Dimension of the image file is retrieved using another API call by passing the Photo_id and Api key as the query parameter.

Technologies used :

1.  React
2.  Axios 
3.  PropTypes
4.  React Hoooks
5.  ES6
6.  Flicker API



• Reasoning behind your technical choices: 
1.  Html and CSS was used to do the basic design the overall look and feel of the UI.
2.  React with hooks lifecylce was used to render the component for reusablity ,
3.  Axios for fetching the data from the flicker API and its very flexible to use it in react application


• Trade-offs: 

1. The only trade-off made was neglecting the feature to display the image memory size, which could have been made by hitting the image URl in the api call and pull the image size by the response. 

