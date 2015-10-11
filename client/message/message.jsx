Message = React.createClass({
  render() {
    return (
      <div className="message">
        <p>
          <strong>
            {this.props.author}
          </strong>:

          <span dangerouslySetInnerHTML={{__html: this.props.body}} />
        </p>
      </div>
    );
  }
});