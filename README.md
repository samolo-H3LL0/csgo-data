![CSGO:DATA](github/thumbnail.png)
---
---
## A minimalist and simple module to interact and get stats from CS:GO players. JSON format.
<br>

### __Getting started__

```js
const csgodata = require('csgo-data');
const connection = new csgodata.Connection('STEAM API KEY GOES HERE');

// Get stats from a user
connection.getStats('STEAM64 ID GOES HERE').then(r => ...)

// Get achievements from a user
connection.getAchievements('STEAM64 ID GOES HERE').then(r => ...)

// Get global achievement percentages (No arguments required)
connection.getAchievementsPercentages().then(r => ...)

// Get someone's CS:GO inventory
connection.getInventory('STEAM64 GOES HERE').then(r => ...)
```
> Note: csgo-data only supports steam64 ids (example: 123456789078678) for the moment. You can use modules to convert those ids.

---
Made w/❤ by cctwaterson. | [Steam profile](https://steamcommunity.com/id/76561199160525458)