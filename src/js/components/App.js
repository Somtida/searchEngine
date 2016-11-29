var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');
var SearchResults = require('./SearchResults');


function getAppState() {
  return {
    results: AppStore.getResults(),
    searchText: AppStore.getSearchText()
  }
}


var App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getAppState());
  },

  render(){
    return(
      <div>
        <SearchForm />
        <SearchResults results={this.state.results} />
      </div>
    )
  }
})

module.exports = App;
