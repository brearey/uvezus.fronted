import axios from 'axios'
import { logger } from '../util/logger'

const serverUrl = import.meta.env.VITE_SERVER_URL || 'https://lorriant.ru'
logger.info(`serverUrl = ${serverUrl}`)
const baseURL = serverUrl + '/api'

export const api = axios.create({
	baseURL: baseURL,
})
