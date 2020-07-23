import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

/*
Notes to brandon:

Current issues are that the greeting crashes.

Note the usage of chrome.storage.local . This is chrome extension storage, and is very hard to use because theres no way to check it or play around with it. 
I reccomend switching over to html localstorage (https://www.w3schools.com/html/html5_webstorage.asp). This will allow us to run everything as a website with no dependence on chrome extension stuff.
The other issue is managing state and state update from the input. Currently, need to be able to pull out input without triggering a state update every time, as a state update causes the useEffect section to be run. 

We need to use the useEffect to check for information on initial load. 

Fixes are:
- change storage
- better handle state and lifecycle
- properly load from loaclstorage on initial, and update local storage on input

More functionality:
- make it like Momentum, where you can go back and change name
*/
const Greeting = (props) => {
    const [displayName, setDisplayName] = useState(null);

    useEffect(() => {
        console.log("remounting");
        // chrome.storage.local.get({'Personalization': null}, (data) => {
        //     console.log(data);
        //     if (data.Personalization !== null) {
        //         let info = data.json();
        //         setDisplayName(info["displayName"]);
        //     } 
        // });
        if (localStorage.getItem("displayName"))
            setDisplayName(localStorage.displayName)

    }, []);

    const handleKeyDown = (e) => {
        console.log("keypress");
        // code 13 is <enter>
        if (e.keyCode === 13) {
            console.log("enter pressed");
            // let data = {"displayName": displayName};
            // chrome.storage.local.set({"Personalization": data}, function() {
            //     console.log('Value is set to ' + data);
            //   });
            localStorage.setItem("displayName", displayName)
            console.log('Value is set to ' + displayName);
        }
    }

    const handleChange = (e) => {
        setDisplayName(e.target.value)
        localStorage.displayName = e.target.value;
    }

    return (
        <div>
            <span>Hello, </span>
            <TextField 
                // label="Name"
                defaultValue="friend"
                value={displayName}
                onChange={handleChange}
                // onKeyDown={(e) => handleKeyDown(e)}
            />
        </div>
    );

}

export { Greeting };