var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');

var CHANGE_EVENT = 'change';

var _items = [];
var _searchText = "";

var AppStore = assign({}, EventEmitter.prototype, {
  setSearchText(search) {
    _searchText = search.text;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.SEARCH_TEXT:
      AppAPI.searchText(action.search);
      AppStore.setSearchText(action.search);
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.RECEIVE_RESULTS:
      AppStore.setResults(action.results);
      AppStore.emit(CHANGE_EVENT);
      break;


  return true;
});

module.exports = AppStore;
