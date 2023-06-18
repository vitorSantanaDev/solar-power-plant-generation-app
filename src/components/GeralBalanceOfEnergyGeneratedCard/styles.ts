import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { returnPeriodColorTheme } from '../../utils/return-period-color-theme';
import { GeralBalanceOfEnergyGeneratedCardStylesProps } from './types';

export function geralBalanceOfEnergyGeneratedCardStyles(
	props: GeralBalanceOfEnergyGeneratedCardStylesProps
) {
	const { type } = props;

	const cardBorderColor = returnPeriodColorTheme({ type, color: 'primary' });

	const highlightColor = returnPeriodColorTheme({
		type,
		color: 'secondary',
	});

	return StyleSheet.create({
		Wrapper: {
			width: '100%',
			height: theme.metrics.pixel(209),
			borderRadius: theme.metrics.pixel(5),
			backgroundColor: theme.colors.dark_gray,
			borderLeftWidth: theme.metrics.pixel(7),
			paddingVertical: theme.metrics.pixel(8),
			paddingHorizontal: theme.metrics.pixel(8),
			borderLeftColor: cardBorderColor,
			justifyContent: 'center',
		},

		Header: { flexDirection: 'row' },

		HeaderInfosWrapper: { marginLeft: theme.metrics.pixel(8) },

		TotalInfosWrapper: {
			marginTop: theme.metrics.pixel(2),
			flexDirection: 'row',
			marginBottom: theme.metrics.pixel(8),
		},

		EnergyGeneratedInfos: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},

		BestMomentBadge: {
			width: theme.metrics.pixel(10),
			height: theme.metrics.pixel(10),
			borderRadius: theme.metrics.pixel(10),
			backgroundColor: theme.colors.success,
			marginRight: theme.metrics.pixel(4),
		},

		BestMomentLabel: {
			color: theme.colors.gray,
			textTransform: 'uppercase',
			fontSize: theme.metrics.pixel(8),
		},

		BestMomentValue: {
			textTransform: 'uppercase',
			color: theme.colors.off_white,
			fontSize: theme.metrics.pixel(8),
		},

		BestMomentInfo: { flexDirection: 'row', alignItems: 'center' },
		BestMomentInfosWrapper: { flexDirection: 'row', alignItems: 'center' },

		Title: {
			color: theme.colors.gray,
			textTransform: 'uppercase',
			fontSize: theme.metrics.pixel(12),
		},

		TitleHighlight: {
			color: highlightColor,
		},

		TotalGeneratedLabel: {
			color: theme.colors.off_white,
			fontSize: theme.metrics.pixel(10),
		},

		TotalGeneratedValue: {
			color: highlightColor,
			fontSize: theme.metrics.pixel(10),
		},

		FooterWrapper: {
			alignItems: 'center',
		},

		BestMomentWrapper: {
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		},

		SeeDetailsPressable: {
			paddingVertical: theme.metrics.pixel(4),
			paddingHorizontal: theme.metrics.pixel(8),
			marginTop: theme.metrics.pixel(8),
		},
		SeeDetailsPressableText: {
			color: highlightColor,
			textTransform: 'uppercase',
			textAlign: 'center',
			fontSize: theme.metrics.pixel(10),
		},
	});
}
