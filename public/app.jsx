var React = require("react")
var ReactDOM = require("react-dom")
    //var Greeter = require("Greeter")

import Greeter from 'Greeter';

var firstName = 'Steven';
var message = "This is from the component!";

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);
