var React = require('react'),
	TestStore = require('../../store/TestStore'),
	actions = require('../../action/TestActionCreator');

var TodoList = React.createClass({
    render: function () {

        var createItem = function(itemText){
            return <li>{itemText}</li>
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

var Test = React.createClass({

	getInitialState: function(){
        return {items:this.getTruth().arrItems};
    },
    componentWillMount: function(){
    	TestStore.on('create', this._onChange);
    },
	render : function(){
		return(
			<div>
				<TodoList items={this.state.items}/>
				<form onSubmit={this.handleSubmit}>
	                <button>Submit</button>
	            </form>
            </div>
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

React.render(<Test/>, 
    document.getElementById('container'));