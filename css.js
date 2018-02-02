module.exports = () =>
  `
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      background-color: #000;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
    }
    iframe {
      border: 0;
      min-width: 50%;
      max-width: 100%;
      min-height: 405px;
    }
  `;
