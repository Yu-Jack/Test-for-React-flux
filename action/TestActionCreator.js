var TestDispatcher = require('../dispatch/TestDispatcher');

var TestActionCreator = {

	createTodo : function(){
		
		TestDispatcher.handleViewAction({
			actionType: 'create',
			item:'4'
		});
	}

}

module.exports = TestActionCreator;