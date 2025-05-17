import axios from "axios";
import config from "@/config/config";
import type Amiibo from "@/types/amiibo";
import type GameSerie from "@/types/game-serie";

export default class AmiiboService {
    static async getGameSeries(): Promise<GameSerie[]> {
        try {
            const response = await axios
                .get(`${config.server.url}/${config.server.paths.gameSeries}/`);
            return response.data.amiibo;
        } catch (error) {
            console.error('Error fetching game series:', error);
            throw error;
        }
    }

    static async getAmiibos(): Promise<Amiibo[]> {
        try {
            const response = await axios
                .get(`${config.server.url}/${config.server.paths.amiibo}`);
            return response.data.amiibo;
        } catch (error) {
            console.error('Error fetching amiibos:', error);
            throw error;
        }
    }

    static async getAmiiboByGameSeries(gameSerie: string): Promise<Amiibo[]> {
        try {
            const response = await axios
                .get(`${config.server.url}/${config.server.paths.amiibo}`, {
                    params: { 'gameseries': gameSerie }
                });
            return response.data.amiibo;
        } catch (error) {
            console.error('Error fetching amiibos by game series:', error);
            throw error;
        }
    }
}