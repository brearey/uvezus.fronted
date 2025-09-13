export type Toast = {
	message: string;
	messageType: 'success' | 'warning' | 'error';
	delay: number;
}