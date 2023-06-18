import { PeriodFilterTypeEnum } from '../../components/PeriodFilter/types';
import { theme } from '../../styles/theme';

type ColorsType = 'main' | 'primary' | 'secondary' | 'tertiary';

export function returnPeriodColorTheme({
	color,
	type,
}: {
	type: PeriodFilterTypeEnum;
	color: ColorsType;
}) {
	return type === PeriodFilterTypeEnum.DAILY
		? theme.colors.daily_period_colors[color]
		: type === PeriodFilterTypeEnum.HOURLY
		? theme.colors.hourly_period_colors[color]
		: type === PeriodFilterTypeEnum.MONTHLY
		? theme.colors.monthly_period_colors[color]
		: theme.colors.yearly_period_colors[color];
}
