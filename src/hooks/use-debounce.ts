import { useCallback, useRef } from 'react'

export function useDebounce<Args extends unknown[]>(
	callback: (...args: Args) => void,
	delay: number
): (...args: Args) => void {
	const timer = useRef<number | null>(null)

	const debouncedCallback = useCallback(
		(...args: Args) => {
			if (timer.current !== null) {
				window.clearTimeout(timer.current)
			}
			timer.current = window.setTimeout(() => {
				callback(...args)
			}, delay)
		},
		[callback, delay]
	)

	return debouncedCallback
}
