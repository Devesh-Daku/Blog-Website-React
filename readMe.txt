node_module have our dependencies
public folder have public files public to browser 
resource folder (src) stores our most of the resource

in src we don't need 
test file

delete the fifth line in index.js import reportWebVitals ...
delete the reportWebVitals form src and index.js

npm run start ::// will run the app in browser on a liver server local host
npm install ::// will download all the required modules for our web app that are mentioned inside the jasons
node_module folder is not uploaded to github so evertime using github to download the web app we need the install those 

the index.js will render App.js because of code given clearly
    root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
The App.js have a code written inside the function that is 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
looks similar to html , but it's not html it is jsx 

JSX 
    in jsx we use className as attribute act as class that was in html
    in javascript is class is reserved keyword so jsx here is className

so by deleting the code between the div have className="App"
we have left 
function
    function App() {
  return (
    <div className="App">
      // our written html and style 
    </div>
  );
}

note that : there is line "export default App;" in the end of App.js which says the function can be imported in other files while importing the app.js
we can create constants and variable just after the workd function(){ here ..}
can be implemented inside text and heading by { constantName } 
we can use int ,string but booleans and objects are not fine

The main game runs behind the App.js
    we build components like Navbar.js BlogDetails.js Sidebar.js
    and then add them to the App.js 
    App.js is rootComponent of our app
    so navbar.js , BlogDetails.js , Sidebar.js are nested to App.js 
    similarly Sidebar.js have further components like Categories.js Tag.js


import './App.css';
import Navbar from './Navbar'

function App() {
  const title = 'welcome to the new blog';
  const like = 50 ; 
  // const person = {name: 'yoshi', age:30};
  const link = "http://www.google.com"

  return (
    <div className="App">
      
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {like} times</p>

        <p>{10}</p>
        <p>{"hello, suppandi"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random()*10}</p>
        <a href={link}>Google</a>

      </div>
    </div>
  );
}

export default App;


So the App.css will work for providing style to our App
we are deleitng the App.css file in this project and using index.css as our main style 

funcion name is say handleClick 
    if we use it in onClick={handleClick()} the () will invoke the function without clicking on it 
    so we must use onClick = {handleClick} 
    but what if we have something to input inside the handleClick but using parenthesis will invoke it 
    ex onClick={handleClick('suppandi')}
    will work if it is 
    <button onClick={() =>{handleClickAgain('Suppandi')}}>click me again</button>


crating a json data server 
by creating the data folder and creating a db.json file having our data stored in json format
now in different terminal running the data on server by command
npx json-server --watch data/db.json --port 8000

EndPoints 
/blog       GET     Fetch all Blog
/blog/{id}  GET     Fetch a single blog
/blog       POST    Add a new Blog
/blog/{id}  DELETE  Delete a blog


npm run start ::// to run the live server 
npx json-server --watch data/db.json --port 8000 ::// to run data server to provide data