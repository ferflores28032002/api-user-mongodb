import dotenv from 'dotenv'

dotenv.config({ path: './env/.env'})

export const PUERTO = process.env.PORT;
export const URL_MONGOOSE_API = process.env.URL_MONGOOSE_API;