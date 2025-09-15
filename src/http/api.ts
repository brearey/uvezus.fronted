import axios from 'axios'
import { ROUTES } from '../util/routes'

export const api = axios.create({
	baseURL: ROUTES.baseURL,
})
