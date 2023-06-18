import HttpClient from './http-client';
import { YELLOT_API_KEY } from '@env';

export type GetSolarEnergyGeneratedFilterType =
	| 'daily'
	| 'monthly'
	| 'hourly'
	| 'yearly'
	| 'all';

class SolarEnergyGenerated {
	protected readonly httpClient: HttpClient;

	constructor() {
		this.httpClient = new HttpClient(
			'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation'
		);
	}

	getSolarEnergyGenerated(filter: GetSolarEnergyGeneratedFilterType) {
		return this.httpClient.get({
			path: `/test-2023?dataType=${filter}`,
			options: {
				headers: {
					Authorization: `Bearer ${YELLOT_API_KEY}`,
				},
			},
		});
	}
}

const SolarEnergyGeneratedInstance = new SolarEnergyGenerated();

export { SolarEnergyGeneratedInstance };
