"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const axios_1 = __importDefault(require("axios"));
const route = {
    api: 'https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=',
    steamid: '&steamid=',
};
class Connection {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    getStats(steamid) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = axios_1.default.get(route.api + this.apiKey + route.steamid + steamid);
            return (yield request).data.playerstats;
        });
    }
    getAchievements(steamid) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = axios_1.default.get(route.api + this.apiKey + route.steamid + steamid);
            return (yield request).data.achievements;
        });
    }
    getAchievementsPercentages() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = axios_1.default.get('https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=730');
            return (yield request).data.achievementpercentages.achievements;
        });
    }
    getInventory(steamid) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = axios_1.default.get('https://steamcommunity.com/inventory/' + steamid + '/730/2?l=english&count=5000');
            return (yield request).data.assets;
        });
    }
}
exports.Connection = Connection;
const csgo = new Connection('D9A008D5DF53507C69A5D011E225A81D');
csgo.getStats('76561199160525458').then(res => console.log(res));
