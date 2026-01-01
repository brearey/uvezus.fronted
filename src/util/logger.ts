export const logger = {
	now: new Date().toLocaleString(),
	instance: console, // тут можно поставить логгер получше типа winston, pino
	info: (message: string) => {
		logger.instance.info(`${logger.now} | INFO | ${message}`)
	},
	error: (error: Error) => {
		logger.instance.error(
			`${logger.now} | ERROR | ${error.name} ${error.message}`
		)
	},
}
