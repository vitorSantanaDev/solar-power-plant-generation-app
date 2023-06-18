import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { returnPeriodColorTheme } from '../../utils/return-period-color-theme';
import { EnergyGeneratedDetailsStylesProps } from './types';

export function energyGeneratedDetailsViewStyles(
	props: EnergyGeneratedDetailsStylesProps
) {
	const { data_type } = props;

	const highlightColor = returnPeriodColorTheme({
		type: data_type,
		color: 'secondary',
	});

	return StyleSheet.create({
		Header: {
			width: '100%',
			padding: theme.metrics.pixel(24),
			backgroundColor: theme.colors.dark_gray,
		},
		HeaderContentWrapper: {
			flexDirection: 'row',
			alignItems: 'center',
		},
		Title: {
			textTransform: 'uppercase',
			color: theme.colors.white,
			fontSize: theme.metrics.pixel(12),
		},

		GoBackPressable: {
			marginRight: theme.metrics.pixel(8),
		},

		TitleHighlight: {
			color: highlightColor,
		},

		ChartWrapper: {
			marginTop: theme.metrics.pixel(24),
		},

		InfosWrapper: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginVertical: theme.metrics.pixel(24),
		},

		Row: {
			flexDirection: 'row',
			alignItems: 'center',
			marginBottom: theme.metrics.pixel(8),
		},
		Label: { fontSize: theme.metrics.pixel(12), color: theme.colors.white },
		Value: { fontSize: theme.metrics.pixel(12), color: highlightColor },
		Description: {
			textAlign: 'center',
			fontStyle: 'italic',
			color: theme.colors.white,
			marginTop: theme.metrics.pixel(12),
			fontSize: theme.metrics.pixel(12),
		},
		KwhGenerated: {
			textAlign: 'center',
			color: highlightColor,
			marginTop: theme.metrics.pixel(12),
			fontSize: theme.metrics.pixel(16),
		},
	});
}
