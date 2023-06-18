import * as React from 'react';
import * as RN from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { theme } from '../../styles/theme';
import { ChartCircularProps } from './types';

import { chartCircularStyles } from './styles';
import { returnPeriodColorTheme } from '../../utils/return-period-color-theme';

export function ChartCircular({
	type,
	progress,
	percentage,
}: ChartCircularProps) {
	const styles = chartCircularStyles({ type });

	const progressColor = returnPeriodColorTheme({ type, color: 'primary' });

	return (
		<RN.View>
			<AnimatedCircularProgress
				size={130}
				width={16}
				padding={10}
				rotation={10}
				lineCap="round"
				fill={progress}
				tintColor={progressColor}
				// eslint-disable-next-line react-native/no-inline-styles
				style={{ alignItems: 'center' }}
				backgroundColor={theme.colors.gray}
			/>
			<RN.View style={styles.ChartBadge}>
				<RN.Text style={styles.ChartBadgeText}>
					{percentage.toFixed(0) || 0}%
				</RN.Text>
			</RN.View>
		</RN.View>
	);
}
