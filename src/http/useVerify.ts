import { useMutation } from '@tanstack/react-query'
import { api } from './api'

export function useVerify(onSuccess: () => void, onError: (e: Error) => void) {
	return useMutation({
		mutationFn: (data: { email: string; code: string }) => {
			return api.get('/verify', { params: data })
		},
		onSuccess,
		onError: (e) => {
			onError(e)
		},
	})
}
