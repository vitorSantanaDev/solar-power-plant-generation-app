import { GeralBalanceOfEnergyGeneratedCardProps } from '../../components/GeralBalanceOfEnergyGeneratedCard/types';
import { PeriodFilterTypeEnum } from '../../components/PeriodFilter/types';
import { GetSolarEnergyGeneratedFilterType } from '../../services/SolarEnergyGenerated.service';

export type GeralBalanceOfEnergyGeneratedCards =
	GeralBalanceOfEnergyGeneratedCardProps & { onPress: () => void };

export type HomeViewProps = {
	selectedPeriodFilter: {
		value: GetSolarEnergyGeneratedFilterType;
	};
	filters: {
		label: string;
		value: string;
		onPress: () => void;
		type: PeriodFilterTypeEnum;
	}[];
	geralBalanceOfEnergyGeneratedCards: Array<GeralBalanceOfEnergyGeneratedCards>;
};
