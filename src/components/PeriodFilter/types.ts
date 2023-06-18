import { TouchableOpacityProps } from 'react-native';

export interface PeriodFilterProps extends TouchableOpacityProps {
	label: string;
	isSelected: boolean;
	type: PeriodFilterTypeEnum;
}

export type PeriodFilterStylesProps = Pick<
	PeriodFilterProps,
	'type' | 'isSelected'
>;

export enum PeriodFilterTypeEnum {
	HOURLY = 'hourly',
	DAILY = 'daily',
	MONTHLY = 'monthly',
	YEARLY = 'yearly',
	ALL = 'all',
}
