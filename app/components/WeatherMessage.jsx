var React = require("react")

var WeatherMessage = (props) => {
    var { temp, location } = props;
    return (
        <p>It's {temp} in {location}!</p>
    );
};

module.exports = WeatherMessage;
