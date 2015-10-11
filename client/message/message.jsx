Message = React.createClass({
  render() {
    return (
      <div className="message">
        <p>
          <strong>
            {this.props.author}
          </strong>:&nbsp;

          <span dangerouslySetInnerHTML={{__html: this.props.body}} />
        </p>
      </div>
    );
  }
});