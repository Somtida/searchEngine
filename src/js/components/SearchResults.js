var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchResults = React.createClass({
  render(){
    return(
      <div className="search-form">
        
        <div>
	  <h2 className=“page-header”>Results</h2>
        </div>

      </div>
    )
  },

})

module.exports = SearchResults;
