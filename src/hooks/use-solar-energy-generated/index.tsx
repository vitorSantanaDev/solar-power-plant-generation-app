import * as React from 'react';

import { SolarEnergyGeneratedInstance } from '../../services/SolarEnergyGenerated.service';

import { AllSolarEnergyGeneratedData } from './types';

export function useSolarEnergyGenerated() {
	const [allSolarEnergyGenerated, setAllSolarEnergyGenerated] =
		React.useState<AllSolarEnergyGeneratedData>();

	function getAllData() {
		(async () => {
			try {
				const [hourly, daily, monthly, yearly] = await Promise.all([
					SolarEnergyGeneratedInstance.getSolarEnergyGenerated('hourly'),
					SolarEnergyGeneratedInstance.getSolarEnergyGenerated('daily'),
					SolarEnergyGeneratedInstance.getSolarEnergyGenerated('monthly'),
					SolarEnergyGeneratedInstance.getSolarEnergyGenerated('yearly'),
				]);

				setAllSolarEnergyGenerated({
					daily: daily.data,
					hourly: hourly.data,
					yearly: yearly.data,
					monthly: monthly.data,
				});
			} catch (err) {
				console.log('err', { err });
			}
		})();
	}

	React.useEffect(getAllData, []);

	return { allSolarEnergyGenerated };
}
