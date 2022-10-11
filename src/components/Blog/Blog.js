import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog-question1'>
                <h2>What is the purpose of React router? </h2>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
                Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.

                Setting up the React Application: Create a React application using create-react-app and lets call it geeks.
                </p>
            
            </div>

            <div className='blog-question1'>
                <h2>how does context API works?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                </p>
            </div>

            <div className='blog-question1'>
                <h2>what is useRef hook in react js?</h2>
                <p>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 
                The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 
                
                </p>
            </div>
        </div>
    );
};

export default Blog;