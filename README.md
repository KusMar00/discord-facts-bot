# Facts bot

This is a simple bot that will spit out a random fact from [api-ninjas Facts API](https://api-ninjas.com/api/facts). The bot exposes a single slash command `/fact` on a discord server.

## How to Setup

1. Register or login at [api-ninjas](https://api-ninjas.com/profile), and note down your personal API key.
2. Create an application on the [Discord Developer Portal](https://discord.com/developers/applications). Note down `Application ID`. Navigate to _Bot_ tab and note down `Bot Token`.
3. Add bot to server by navigating to _OAuth_ / _URL Generator_. Check `application.commands` and `bot`. Open the generated URLand authorize the bot to access your server.
4. In the discord client, find you server id by enabling _Developer Mode_ under _Advanced Settings_, right clicking your server and selecting _Copy ID_.
5. Create a `.env` file with the information from steps 1-4: _API key_, _Application ID (CLIENTID)_, _Server ID_ and _Token_.

```javascript
// .env file
CLIENTID = YOUR_CLIENT_ID;
SERVERID = YOUR_SERVER_ID;
TOKEN = YOUR_TOKN;
API_KEY = YOUR_API_KEY;
```

6. Run `node bot.js` to start the bot.
