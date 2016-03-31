var React = require('react');
var ReactDOM = require('react-dom');

// Store Picker 
// This will let us make <StorePicker />

var StorePicker = React.createClass({
	render: function() {
		return (
			<h1>Hello</h1>
		)
	} 
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));