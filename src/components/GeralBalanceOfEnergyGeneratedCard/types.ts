import { PeriodFilterTypeEnum } from '../PeriodFilter/types';

export type GeralBalanceOfEnergyGeneratedCardProps = {
	type: PeriodFilterTypeEnum;
	bestMoment: string;
	worstMoment: string;
	progress: number;
	percentage: number;
	totalInKwh: number;
	expectedEnergyInKwh: number;
	savedTrees: number;
	co2avoided: number;
	onPress: () => void;
};

export type GeralBalanceOfEnergyGeneratedCardStylesProps = Pick<
	GeralBalanceOfEnergyGeneratedCardProps,
	'type'
>;
