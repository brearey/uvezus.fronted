import { useState, useCallback, type ChangeEvent } from 'react'

interface UseInputReturn<T> {
	value: T
	onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	setValue: (value: T) => void
	reset: () => void
}

export function useInput<T>(initialValue: T): UseInputReturn<T> {
	const [value, setValue] = useState<T>(initialValue)

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const val = event.target.value
			setValue(val as T)
		},
		[]
	)

	const reset = useCallback(() => {
		setValue(initialValue)
	}, [initialValue])

	return {
		value,
		onChange,
		setValue,
		reset,
	}
}
