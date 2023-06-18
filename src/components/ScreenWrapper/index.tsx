import * as React from 'react';
import * as RN from 'react-native';

import { screenWrapperStyles } from './styles';
import { ScreenWrapperProps } from './types';

export function ScreenWrapper({ children }: ScreenWrapperProps) {
	const styles = screenWrapperStyles();
	return (
		<RN.ScrollView style={styles.ScrollViewWrapper}>
			<RN.View style={styles.ScreenWrapper}>{children}</RN.View>
		</RN.ScrollView>
	);
}
