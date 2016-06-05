var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    var {title, message} = this.props;

    return (
      <div id="error-modal" className="reveal tiny" data-reveal="">
        <h4 className="text-center">{title}</h4>
        <p className="text-center">{message}</p>
        <p  className="text-center">
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
