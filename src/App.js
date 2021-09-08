import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>WHAT IS REACT </h1>
  
     <p>React is a library of Javascript for building user interface. React is in OpenSource javascript library. React is created by facebook. React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC. </p>
     <h1>SPA VS MPA </h1>
     <p>Single-page applications allow you to simulate the work of desktop apps. The architecture is arranged in such a way that when you go to a new page, only a portion of the content is updated. Thus, there is no need to re-download the same elements. This is very convenient for developers and users</p>
     <h1>ANGULAR VS REACT:</h1>
     <p>Angular is a framework while React is a Library. With Angular we can build complete application but with react we can not build complete complete application we have to used third party libraries with react to build the complete application. Angular is build by Google while React is build by Facebook.  </p>
     <h1>LIBRARY VS FRAMEWORK</h1>
     <p>The key difference between JavaScript libraries and frameworks is that libraries consist of functions that an application can call to perform a task, while a framework defines how a developer designs an application. In other words, the framework calls on the application code, rather than the other way around</p>
     <h1>DOM VS VIRTUAL DOM </h1>
     <p>The Virtual DOM is an abstraction of the HTML DOM. It is lightweight and detached from the browser-specific implementation details. Since the DOM itself was already an abstraction, the virtual DOM is, in fact, an abstraction of an abstraction. ... There's no big difference between the “regular” DOM and the virtual DOM.</p>
     <h1>ONE WAY DATABINDIND VS TWO WAY</h1>
     <p>In one-way data binding information flows in only one direction, and is when the information is displayed, but not updated. In two-way data binding information flows in both directions, and is used in situations where the information needs to be updated</p>
    </div>
  );
}

export default App;
