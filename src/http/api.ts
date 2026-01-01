import axios from 'axios'
import { logger } from '../util/logger'

const serverUrl = import.meta.env.VITE_SERVER_URL || 'http://localhost:3002'
logger.info(`serverUrl = ${serverUrl}`)
const baseURL = serverUrl + '/uvezus'

export const api = axios.create({
	baseURL: baseURL,
})
