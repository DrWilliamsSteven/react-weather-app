var React = require("react")

var WeatherMessage = (props) => {
    var { temp, location } = props;
    return (
        <h3 className="text-center">It's {temp}&#8451; in {location} right now!</h3>
    );
};

module.exports = WeatherMessage;
