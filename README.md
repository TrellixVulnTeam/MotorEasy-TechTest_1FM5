<h1>MotorEasy Task</h1>

<h2>Installation</h2>

<p>Ensure you have node installed in order to run a server locally, installation instructions can be found <a href="https://nodejs.org/en/download/">here</a></p>

<p>Once node is installed, clone this repo by opening your favourite terminal and using the follow command "git clone https://github.com/ashryan/MotorEasy-TechTest"</p>

<p>Great, once you've cloned the repo you can cd into it by typing "cd MotorEasy-TechTest"</p>

<p>Next we need to start the server, cd into the server directory and type "node ." </p>

<img src="https://i.ibb.co/Tg4vccn/startserver.png" />

<p>The local server should now be up and running, next open a new terminal and cd back into MotorEasy-TechTest. To get the client side of the app running cd into the client directory by typing "cd client" and run "npm install" to get all the dependancies. Once this is done type "npm start".
You should now have a local client up and running</p>

<h2>Additional Technologies Used</h2>

<p>Material-UI - I utilised Material-UI for some of the UI elements of the task. MUI allowed me to style the app faster, whilst still delivering a good user experience. However, I fully recognise the benefits of creating customised components. 
</p>

<p>React-Number-Format - This package allows easy formating of numbers within React and is a great for time-sensitive tasks.</p>

<p>Mongoose - Using the Mongoose ODM to structure schemas provided convience for querying the database and works well on a simple application like this. However, if the collection structure was less predictable, using the standard MongoDB driver would have been more appropriate.</p>

<h2>Requirements</h2>

<h3>Database</h3> 
<p> I created a mongodb database with two collections, Tyres and Brands. </p>

<img src="https://i.ibb.co/sVn5ds4/mongo-brands.png" />

<img src="https://i.ibb.co/wNtSm52/mongodb-tyres.png" />
 
 <h3>Backend</h3>
 <h4>Create an API for providing tyre information.</h4>
 <p>I created an API with 5 endpoints for returning data from the database. <br> "/tyres" returns all tyres in the collection, useful for using in combination with a React useEffect hook in order to request all results on intial page load. <br> "/tyres/:brand" returns all tyres from a selected brand, for example, "/tyres/dunlop" returns all tyres in the db with the brand of dunlop. <br> "/tyres/title/:title" returns tyres in the db that match or partially match the provided param. For example, "/tyres/title/b" would return all tyres with a title beginning with the letter "b". In order to get partial string querying working with mongo I utilised Regex. 
 <br>"/brands" returns all the brands in the brands collection.</p>

  <h4>Optional Tyre API can accept pagination request</h4>
  <p>I created a "/tyres/pages" endpoint that when queried with a page number returns a limit of 9 documents from the Tyres collection. It also returns the total amount of pages. For example, "/tyres/pages/?page=1" would return the second set of 9 tyres from the tyres collection.<br>Unfortunately, I was unable to integrate this into the client-side in time, however I have included a screenshot from postman to show it working</p>

<img src="https://i.ibb.co/BPmxRBt/post-pagination.png" />

<h3>Client-side</h3>
<h4>Create a listing web page to connect to the API</h4>
<p>I created a listing web page using React that displays the tyres fetched from the database.</p>
<img src="https://i.ibb.co/CvnY7Bs/tyre-listing.png" />

<h4>Add some filters such as title, size, brand</h4>
<p>I included filters for title and brand. When filtering the database is queried with a new fetch request and results are returned based on the given param. Another approach would have been to only fetch the whole tyre collection on intial page load and then used JavaScript methods such as .filter and .reduce to get the tyres matching a given condition, however given the relative small size of the database, the lack of demand on the server and the opportunity to practice express/node, I opted for the former option. In a production enviroment, I'm sure this architectural decision would need to be made carefully.</p>

<img src="https://i.ibb.co/LkvMC56/filter-title.png"/>
<img src="https://i.ibb.co/kSLysTV/filter-brand.png" />







