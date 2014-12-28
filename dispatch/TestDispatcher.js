var Dispatcher = require('flux').Dispatcher,
	extend = require('util')._extend;

var TestDispatcher = new Dispatcher();

extend(TestDispatcher,{
	handleViewAction: function(action){
		this.dispatch(action);
	}
});

module.exports = TestDispatcher;