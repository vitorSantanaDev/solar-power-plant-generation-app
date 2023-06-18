import * as React from 'react';

import { HomeView } from './View';
import { GeralBalanceOfEnergyGeneratedCards, HomeViewProps } from './types';

import { PeriodFilterTypeEnum } from '../../components/PeriodFilter/types';

import { useSolarEnergyGenerated } from '../../hooks/use-solar-energy-generated';
import { GetSolarEnergyGeneratedFilterType } from '../../services/SolarEnergyGenerated.service';
import { useStackNavigation } from '../../utils/navigation-utils';
import { Routes } from '../../routes/routes-names';

export function Home() {
	const navigation = useStackNavigation();

	const [selectedPeriodFilter, setSelectedPeriodFilter] = React.useState<{
		value: GetSolarEnergyGeneratedFilterType;
	}>({ value: 'all' });

	const [
		geralBalanceOfEnergyGeneratedCards,
		setGeralBalanceOfEnergyGeneratedCards,
	] = React.useState<Array<GeralBalanceOfEnergyGeneratedCards>>([]);

	const handleSelectPeriod = React.useCallback(
		(filter: { value: GetSolarEnergyGeneratedFilterType }) => {
			setSelectedPeriodFilter(filter);
		},
		[]
	);

	const geralBalanceOfEnergyGeneratedCardsFiltereds = React.useMemo(() => {
		const cardsFiltered = geralBalanceOfEnergyGeneratedCards.filter(
			(card) => card.type === selectedPeriodFilter.value
		);

		return selectedPeriodFilter.value !== 'all'
			? cardsFiltered
			: geralBalanceOfEnergyGeneratedCards;
	}, [geralBalanceOfEnergyGeneratedCards, selectedPeriodFilter]);

	const { allSolarEnergyGenerated } = useSolarEnergyGenerated();

	const generatingGeralBalanceOfEnergyGeneratedCards = React.useCallback(() => {
		if (!allSolarEnergyGenerated) {
			return;
		}

		let newState: GeralBalanceOfEnergyGeneratedCards[] = [];

		for (let item in allSolarEnergyGenerated) {
			const key = item as keyof typeof allSolarEnergyGenerated;

			const currentItem = allSolarEnergyGenerated[key];

			const worstMomentIndex = currentItem.generation.findIndex(
				(i) => i === Math.min(...currentItem.generation)
			);
			const worstMoment = currentItem.x_labels[worstMomentIndex];

			const bestMomentIndex = currentItem.generation.findIndex(
				(i) => i === Math.max(...currentItem.generation)
			);
			const bestMoment = currentItem.x_labels[bestMomentIndex];

			const type =
				key === 'daily'
					? PeriodFilterTypeEnum.DAILY
					: key === 'hourly'
					? PeriodFilterTypeEnum.HOURLY
					: key === 'monthly'
					? PeriodFilterTypeEnum.MONTHLY
					: PeriodFilterTypeEnum.YEARLY;

			newState.push({
				type,
				worstMoment,
				bestMoment,
				totalInKwh: currentItem.totals.kwh,
				co2avoided: currentItem.totals.co2,
				savedTrees: currentItem.totals.trees,
				progress: currentItem.totals.percentage,
				percentage: currentItem.totals.percentage,
				expectedEnergyInKwh: currentItem.expected.reduce(
					(acc, i) => (acc += i),
					0
				),
				onPress: () => {
					navigation.navigate(Routes.ENERGY_GENERATED_DETAILS, {
						...currentItem,
					});
				},
			});
		}

		setGeralBalanceOfEnergyGeneratedCards(newState);
	}, [allSolarEnergyGenerated, navigation]);

	const filters = React.useMemo(
		() => [
			{
				value: 'all',
				label: 'Todos',
				type: PeriodFilterTypeEnum.ALL,
				onPress: () => handleSelectPeriod({ value: 'all' }),
			},
			{
				value: 'hourly',
				label: 'Por hora',
				type: PeriodFilterTypeEnum.HOURLY,
				onPress: () => handleSelectPeriod({ value: 'hourly' }),
			},
			{
				value: 'daily',
				label: 'Diário',
				type: PeriodFilterTypeEnum.DAILY,
				onPress: () => handleSelectPeriod({ value: 'daily' }),
			},
			{
				value: 'monthly',
				label: 'Por mês',
				type: PeriodFilterTypeEnum.MONTHLY,
				onPress: () => handleSelectPeriod({ value: 'monthly' }),
			},
			{
				value: 'yearly',
				label: 'Por ano',
				type: PeriodFilterTypeEnum.YEARLY,
				onPress: () => handleSelectPeriod({ value: 'yearly' }),
			},
		],
		[handleSelectPeriod]
	);

	React.useEffect(generatingGeralBalanceOfEnergyGeneratedCards, [
		generatingGeralBalanceOfEnergyGeneratedCards,
	]);

	const viewProps: HomeViewProps = {
		filters,
		selectedPeriodFilter,
		geralBalanceOfEnergyGeneratedCards:
			geralBalanceOfEnergyGeneratedCardsFiltereds,
	};

	return React.createElement(HomeView, viewProps);
}
