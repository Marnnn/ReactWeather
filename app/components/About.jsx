var React = require('react');
var {Link} = require('react-router');

var About = () => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        The Glutes Weather app is a React application that connects to <a href="http://openweathermap.org/">Open Weather Map</a> to
        allow you to find out the temperature in your chosen city.
      </p>
      <br></br>
      <p>
        You can find the full project on GitHub <a href="https://github.com/Marnnn/ReactWeather">here</a>.
      </p>
      <br></br>
      <p>
        Head to the <Link to="/examples">Examples</Link> page to try out some cities.
      </p>
    </div>
  )
};

module.exports = About;
