var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchResults = React.createClass({
  render(){
	if(this.porps.searchText != '') {
		var results = <h2 className="page-header">Results</h2>
	} else {
		var results = '';
	}
    return(
      <div className="search-form">

        <div>
	  <h2 className="page-header">{results}</h2>
        </div>

      </div>
    )
  },

})

module.exports = SearchResults;
