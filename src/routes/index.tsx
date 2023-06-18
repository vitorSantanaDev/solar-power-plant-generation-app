import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { EnergyGeneratedDetails } from '../screens/EnergyGeneratedDetails';
import { Routes } from './routes-names';

export function AppStackNavigation() {
	const Stack = createNativeStackNavigator();

	const defaultOptionsScreen = {
		header: () => null,
	};

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name={Routes.HOME}
					component={Home}
					options={{ ...defaultOptionsScreen, animation: 'slide_from_right' }}
				/>
				<Stack.Screen
					name={Routes.ENERGY_GENERATED_DETAILS}
					component={EnergyGeneratedDetails}
					options={{ ...defaultOptionsScreen, animation: 'slide_from_right' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
