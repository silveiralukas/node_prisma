import "dotenv/config";

export const appEnv = {
    port: process.env.PORT,
    url: process.env.DATABASE_URL
}