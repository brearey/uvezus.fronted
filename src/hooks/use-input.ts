import { useState, useCallback, type ChangeEvent } from 'react'

interface UseInputReturn {
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	setValue: (value: string) => void
	reset: () => void
}

export function useInput(initialValue: string = ''): UseInputReturn {
	const [value, setValue] = useState<string>(initialValue)

	const onChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(event.target.value)
	}, [])

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
