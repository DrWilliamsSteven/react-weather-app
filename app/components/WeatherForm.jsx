var React = require("react")
import { Button } from 'react-bootstrap';

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"></input>
                    <Button type='submit' bsStyle="primary">Get weather!</Button>
                </form>
            </div>

        );
    }
});

module.exports = WeatherForm;
