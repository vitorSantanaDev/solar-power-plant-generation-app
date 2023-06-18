import { StyleSheet } from 'react-native';
import { ChartCircularStylesProps } from './types';
import { theme } from '../../styles/theme';
import { returnPeriodColorTheme } from '../../utils/return-period-color-theme';

export function chartCircularStyles(props: ChartCircularStylesProps) {
	const { type } = props;

	const badgeBgColor = returnPeriodColorTheme({ type, color: 'tertiary' });
	const badgeColor = returnPeriodColorTheme({ type, color: 'main' });

	return StyleSheet.create({
		ChartBadge: {
			right: 130 / 2 - 18,
			top: 130 / 2 - 10,
			position: 'absolute',
			alignItems: 'center',
			justifyContent: 'center',
			minWidth: theme.metrics.pixel(39.07),
			paddingVertical: theme.metrics.pixel(5),
			borderRadius: theme.metrics.pixel(13.86),
			paddingHorizontal: theme.metrics.pixel(7),
			backgroundColor: badgeBgColor,
		},
		ChartBadgeText: {
			fontSize: 12,
			color: badgeColor,
		},
	});
}
