var React = require('react'),
	TestStore = require('../../store/TestStore'),
	actions = require('../../action/TestActionCreator');

var TodoList = React.createClass({displayName: "TodoList",
    render: function () {

        var createItem = function(itemText){
            return React.createElement("li", null, itemText)
        };
        return React.createElement("ul", null, this.props.items.map(createItem));
    }
});

var Test = React.createClass({displayName: "Test",

	getInitialState: function(){
        return {items:this.getTruth().arrItems};
    },
    componentWillMount: function(){
    	TestStore.on('create', this._onChange);
    },
	render : function(){
		return(
			React.createElement("div", null, 
				React.createElement(TodoList, {items: this.state.items}), 
				React.createElement("form", {onSubmit: this.handleSubmit}, 
	                React.createElement("button", null, "Submit")
	            )
            )
		);
	},
	handleSubmit: function(e){
		e.preventDefault();
		actions.createTodo();
	},
	_onChange: function(){
		// console.log(this.getTruth());
		this.setState({ items: this.getTruth().arrItems });
	},
	getTruth: function(){
		return TestStore.getAll();
	}
});

React.render(React.createElement(Test, null), 
    document.getElementById('container'));