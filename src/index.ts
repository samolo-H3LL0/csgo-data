import axios from 'axios';

const route = {
    api: 'https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=',
    steamid: '&steamid=',
}

export default class Connection {  
    apiKey: string;  
    constructor(apiKey: string) {
        this.apiKey = apiKey;
      
    }
    async getStats(steamid: string){   
       const request = axios.get(route.api + this.apiKey + route.steamid + steamid);
       return (await request).data.playerstats;
    }
    async getAchievements(steamid: string){   
        const request = axios.get(route.api + this.apiKey + route.steamid + steamid);
        return (await request).data.achievements;
    }
    async getAchievementsPercentages(){
        const request = axios.get('https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=730');
        return (await request).data.achievementpercentages.achievements;
    }
    async getInventory(steamid: string){
        const request = axios.get('https://steamcommunity.com/inventory/' + steamid + '/730/2?l=english&count=5000');
        return (await request).data.assets;
    }
}

const csgo = new Connection('D9A008D5DF53507C69A5D011E225A81D');

csgo.getStats('76561199160525458').then(res => console.log(res))
