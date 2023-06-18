import { PeriodFilterTypeEnum } from '../../components/PeriodFilter/types';
import { SolarEnergyGenerated } from '../../hooks/use-solar-energy-generated/types';

export type EnergyGeneratedDetailsProps = SolarEnergyGenerated;

export type EnergyGeneratedDetailsViewProps = {
	data: EnergyGeneratedDetailsProps;
};

export type EnergyGeneratedDetailsStylesProps = {
	data_type: PeriodFilterTypeEnum;
};
