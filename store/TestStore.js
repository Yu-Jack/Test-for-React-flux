var actions = require('../action/TestActionCreator'),
	TestDispatcher = require('../dispatch/TestDispatcher'),
	EventEmitter = require('events').EventEmitter,
	extend = require('util')._extend;

var Store = new EventEmitter();

var arrItems = [];

extend(Store,{
	getAll: function(){
		return {
			arrItems:arrItems
		}
	}
});

Store.dispatchToken = TestDispatcher.register(function(evt){
	var action = evt.actionType;

	if( action == 'create' ){

		arrItems.push(evt.item);

		Store.emit('create', [evt.item]);

	}

});

module.exports = Store;