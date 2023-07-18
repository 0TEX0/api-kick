# api-kick
<img align="right" src="https://cdn.discordapp.com/attachments/1001091526748819516/1130836018833137834/Kick_logo.svg.png" alt="Logo Kick" height=25% width=25%>

api-kick is a JavaScript library that provides easy access to the Kick API, allowing you to retrieve information about users, live streams, and more. It simplifies communication with the API and provides structured data for your applications.


## Installation

You can install api-kick using npm. Make sure you have Node.js installed on your system.

```bash
npm install api-kick
```

## Usage
Here's an example of how you can use api-kick in your JavaScript code:
```js
const kickApi = require('api-kick');

(async () => {
  // Get user information
  const user = await kickApi.getUser("0tex0");
  console.log(user);

  // Get live streams for a user
  const liveStreams = await kickApi.getLiveStreams("0tex0");
  console.log(liveStreams);
})();
```
Make sure to replace '0tex0' with the actual username you want to retrieve data for. The example above demonstrates how to use getUser and getLiveStreams methods.

