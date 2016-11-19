var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
  render(){
    return(
      <div className="alert alert-info">
        <form>
          <div className="form-group">
            <label>Search For Something...</label>
            <input type="text" className="form-control" ref="text" />
          </div>
        </form>
      </div>
    )
  },

})

module.exports = SearchForm;
