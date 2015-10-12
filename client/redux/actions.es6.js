Actions = {};

Actions.createMessage = function createMessage(opts) {
  Messages.insert({
    author: opts.author,
    body: opts.body
  });

  return { type: 'CREATE_MESSAGE' };
};

Actions.receiveMarkdown = function receiveMarkdown(html) {
  return {
    type: 'RECEIVE_MARKDOWN',
    markdown: html
  };
};
