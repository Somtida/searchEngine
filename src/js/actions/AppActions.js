var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  searchText(search) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_TEXT,
      search
    })
  },

}

module.exports = AppActions;
