var React = require("react")
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

var WeatherForm = React.createClass({
    getInitialState() {
        return {
            value: ''
        };
    },

    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.state.value
        if (location.length > 0) {
            this.setState({ value: '' });
            this.props.onSearch(location);
        }
    },

    handleChange(e) {
        this.setState({ value: e.target.value });
    },

    render: function() {
        return (
            <div>
                <form onSubmit = { this.onFormSubmit }>
                    <FormGroup controlId="formBasicText" >
                      <FormControl
                        type="text"
                        placeholder="Enter city name"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Button type='submit' bsStyle="primary" bsSize="large" block>Get weather!</Button>
                </form>
            </div>

        );
    }
});

module.exports = WeatherForm;
