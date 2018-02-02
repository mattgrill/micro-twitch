const css = require('./css');

const header = title => `
  <head>
    <title>${title}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      ${css()}
    </style>
  </head>
`;

const twitch = streams => `
    ${streams
      .map(
        stream =>
          '<iframe style="height: ' +
          100 / streams.length +
          '%;" id="stream-' +
          stream +
          '" src="https://player.twitch.tv/?channel=' +
          stream +
          '"></iframe>'
      )
      .join('')}
`;

const streamTemplate = ({ title, streams }) => `
  <html>
    ${header(title)}
    <body>
      ${twitch(streams)}
    </body>
  </html>
`;

module.exports = { streamTemplate };
