var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Result = React.createClass({
  render(){
    return(
      <div>
        <p className="content lead">
          {this.props.result.Result}
        </p>

      </div>
    )
  },

})

module.exports = Result;