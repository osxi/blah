Message = React.createClass({
  render() {
    let { author, body } = this.props;

    return (
      <p>
        <strong>
          {author}
        </strong>:&nbsp;

        <span dangerouslySetInnerHTML={{__html: body}} />
      </p>
    );
  }
});