import * as React from 'react';

import { Route, useRoute } from '@react-navigation/native';

import {
	EnergyGeneratedDetailsProps,
	EnergyGeneratedDetailsViewProps,
} from './types';

import { EnergyGenratedDetailsView } from './View';

export function EnergyGeneratedDetails() {
	const route = useRoute<Route<'', EnergyGeneratedDetailsProps>>();

	const energyGeneratedData = route.params;

	const viewProps: EnergyGeneratedDetailsViewProps = {
		data: energyGeneratedData,
	};

	return React.createElement(EnergyGenratedDetailsView, viewProps);
}
