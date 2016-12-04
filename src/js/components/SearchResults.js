var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Result = require('./Result')

var SearchResults = React.createClass({
  render(){
	if(this.props.searchText != '') {
		var results = <h2 className="page-header">Results for {this.props.searchText}</h2>
	} else {
		var results = '';
	}
    return(
      <div className="search-form">

        <div>
	       {results}
         {
           this.props.results.map((result,i) => {
             return (
               <Result result={result} key={i} />
             )
           })
         }
        </div>

      </div>
    )
  },

})

module.exports = SearchResults;
