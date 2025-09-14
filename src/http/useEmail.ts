import { useMutation } from '@tanstack/react-query'
import { api } from './api'

export function useEmail(onSuccess: () => void, onError: (e: Error) => void) {
	return useMutation({
		mutationFn: (data: { email: string }) => {
			return api.post('/email', data)
		},
		onSuccess,
		onError: (e) => {
			onError(e)
		}
	})
}