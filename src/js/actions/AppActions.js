var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  searchText(search) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_TEXT,
      search
    })
  },
  receiveResults(results) {
    // console.log(results);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_RESULTS,
      results
    })
  },


}

module.exports = AppActions;
