const moment = require('moment');

function formatMessage(user, text,to) {
  return {
    ...user,
    text,
    time: moment().format('h:mm a'),
		to
  };
}

module.exports = formatMessage;
