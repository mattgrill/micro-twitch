const { send } = require('micro');
const { router, get } = require('microrouter');

const template = require('./template');

const streams = (req, res) => {
  send(
    res,
    200,
    template.streamTemplate({
      title: 'Streams',
      streams: req.params._.split('/'),
    })
  );
};

module.exports = router(get('/*', streams));
