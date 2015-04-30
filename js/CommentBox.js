var CommentBox = React.createClass({

	getInitialState: function getInitialState()
	{
		return { data: [] };
	},

	componentDidMount: function componentDidMount()
	{
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
	},

	render: function render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	},

	loadCommentsFromServer: function loadCommentsFromServer()
	{
		$.ajax({
			url: this.props.url,
			dataType: 'json'
		}).done(function(data)
		{
			this.setState({data: data});
		}.bind(this)).fail(function(jqXHR, textStatus, errorThrown)
		{
			console.error(this.props.url, textStatus, errorThrown.toString());
		}.bind(this));
	}

});

React.render(<CommentBox url="comments.json" pollInterval={2000} />, document.getElementById('content'));