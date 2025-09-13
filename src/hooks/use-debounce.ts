import { useCallback, useRef } from 'react'

export function useDebounce(callback: () => void, delay: number): () => void {
	const timer = useRef(0);

	const debouncedCallback = useCallback((...args) => {
		if (timer.current) {
			clearTimeout(timer.current)
		}
		timer.current = setTimeout(() => {
			callback(...args)
		}, delay)
	}, [callback, delay])

	return debouncedCallback
}