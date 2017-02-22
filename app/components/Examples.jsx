var React = require("react")
var { Link } = require("react-router")

// stateless functional component
var Examples = (props) => {
    return (
        <div >
            <h1 className="text-center">Examples</h1> 
            <p className="text-center"> Here are a few example locations to try out: </p>
            <ol>
                <li>
                    <Link to='/?location=London'>London</Link>
                </li>
                <li>
                    <Link to='/?location=Paris'>Paris</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;
