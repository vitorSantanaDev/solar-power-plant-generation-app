/* eslint-disable no-mixed-spaces-and-tabs */
import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { PeriodFilterStylesProps, PeriodFilterTypeEnum } from './types';
import { returnPeriodColorTheme } from '../../utils/return-period-color-theme';

export function periodFilterStyles(props: PeriodFilterStylesProps) {
	const { type, isSelected } = props;

	const filterSelectedBgColor =
		type !== PeriodFilterTypeEnum.ALL
			? returnPeriodColorTheme({ type, color: 'main' })
			: theme.colors.dark_gray;

	const filterDefaultBgColor =
		type !== PeriodFilterTypeEnum.ALL
			? returnPeriodColorTheme({
					type,
					color: 'primary',
			  })
			: theme.colors.gray;

	const filterSelectedBorderColor =
		type !== PeriodFilterTypeEnum.ALL
			? returnPeriodColorTheme({
					type,
					color: 'tertiary',
			  })
			: theme.colors.white;

	return StyleSheet.create({
		FilterWrapper: {
			backgroundColor: isSelected
				? filterSelectedBgColor
				: filterDefaultBgColor,
			paddingHorizontal: theme.metrics.pixel(10),
			paddingVertical: theme.metrics.pixel(6),
			borderRadius: theme.metrics.pixel(100),
			borderWidth: isSelected ? 1.5 : 0,
			borderColor: isSelected ? filterSelectedBorderColor : 'transparent',
		},
		FilterText: {
			fontSize: 10,
			color: theme.colors.white,
			textTransform: 'uppercase',
		},
	});
}
