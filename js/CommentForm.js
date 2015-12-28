var CommentForm = React.createClass({

	handleSubmit: function handleSubmit(e)
	{
		e.preventDefault();
		var author = React.findDOMNode(this.refs.author).value.trim();
		var text = React.findDOMNode(this.refs.text).value.trim();

		if ( ! author || ! text)
			return;

		this.props.onCommentSubmit({ author: author, text: text });
		React.findDOMNode(this.refs.author).value = '';
		React.findDOMNode(this.refs.text).value = '';
		return;
	},

	render: function render() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Submit" />
			</form>
		);
	}

});