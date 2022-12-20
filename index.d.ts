export declare class Connection {
    apiKey: string;
    constructor(apiKey: string);
    getStats(steamid: string): Promise<any>;
    getAchievements(steamid: string): Promise<any>;
    getAchievementsPercentages(): Promise<any>;
    getInventory(steamid: string): Promise<any>;
}
