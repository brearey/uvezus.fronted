export const isValidPassengersCount = (count: number | null) =>
	count !== null && count >= 0 && count < 8

const addressRegex = /^[а-яёА-ЯЁ0-9\s.,/-]+$/

export const isValidAddress = (address: string | null) => {
	return (
		address &&
		typeof address === 'string' &&
		address.length > 5 &&
		addressRegex.test(address)
	)
}
