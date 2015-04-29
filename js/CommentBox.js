var CommentBox = React.createClass({

	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.props.data} />
				<CommentForm />
			</div>
		);
	}

});

React.render(<CommentBox data={App.data} url="comments.json" />, document.getElementById('content'));