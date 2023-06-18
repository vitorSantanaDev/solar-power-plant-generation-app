import { GetSolarEnergyGeneratedFilterType } from '../../services/SolarEnergyGenerated.service';

export type SolarEnergyGenerated = {
	x_labels: Array<string>;
	expected: Array<number>;
	generation: Array<number>;
	data_type: GetSolarEnergyGeneratedFilterType;
	totals: {
		co2: number;
		kwh: number;
		trees: number;
		percentage: number;
	};
};

export type AllSolarEnergyGeneratedData = {
	hourly: SolarEnergyGenerated;
	daily: SolarEnergyGenerated;
	monthly: SolarEnergyGenerated;
	yearly: SolarEnergyGenerated;
};
