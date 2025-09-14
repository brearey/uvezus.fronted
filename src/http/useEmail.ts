import { useMutation } from '@tanstack/react-query'
import { api } from './api'

export function useEmail(onSuccess: () => void) {
	return useMutation({
		mutationFn: (data: { email: string }) => {
			return api.post('/email', data)
		},
		onSuccess
	})
}