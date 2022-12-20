export default class Connection {
    apiKey: string;
    format: string;
    constructor(apiKey: string, format: string);
    getStats(steamid: string): Promise<any>;
    getAchievements(steamid: string): Promise<any>;
    GetAchievementsPercentages(): Promise<any>;
}
