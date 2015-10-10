Message = React.createClass({
  render() {
    return (
      <div className="message">
        <p>
          <strong>{this.props.author}</strong>: {this.props.body}
        </p>
      </div>
    );
  }
});