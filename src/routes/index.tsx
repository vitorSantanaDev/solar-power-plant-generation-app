import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';

export function AppStackNavigation() {
	const Stack = createNativeStackNavigator();

	const defaultOptionsScreen = {
		header: () => null,
	};

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					options={defaultOptionsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
