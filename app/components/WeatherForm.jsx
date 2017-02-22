var React = require("react");
var ReactDOM = require("react-dom");
import { Button, FormGroup, FormControl } from 'react-bootstrap';

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = ReactDOM.findDOMNode(this.refs.location).value;
        if (location.length > 0) {
            ReactDOM.findDOMNode(this.refs.location).value = '';
            this.props.onSearch(location);
        }
    },


    render: function() {
        return (
            <div>
                <form onSubmit = { this.onFormSubmit }>
                    <FormGroup controlId="formBasicText" >
                        <FormControl type="text" placeholder="Enter city name" ref="location" />
                    </FormGroup>
                    <Button type='submit' bsStyle="primary" bsSize="large" block>Get weather!</Button>
                </form>
            </div>

        );
    }
});

module.exports = WeatherForm;
