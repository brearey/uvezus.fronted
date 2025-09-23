import axios from 'axios'

const serverUrl = import.meta.env.VITE_SERVER_URL || 'http://localhost:3002'
const baseURL = serverUrl + '/api'

export const api = axios.create({
	baseURL: baseURL,
})
