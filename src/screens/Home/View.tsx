import * as React from 'react';
import * as RN from 'react-native';

import { homeStyles } from './styles';

import { Container } from '../../components/Container';
import { PeriodFilter } from '../../components/PeriodFilter';
import { ScreenWrapper } from '../../components/ScreenWrapper';

import { HomeViewProps } from './types';
import { GeralBalanceOfEnergyGeneratedCard } from '../../components/GeralBalanceOfEnergyGeneratedCard';

export function HomeView(props: HomeViewProps) {
	const { filters, selectedPeriodFilter, geralBalanceOfEnergyGeneratedCards } =
		props;

	const styles = homeStyles();

	return (
		<>
			<ScreenWrapper>
				<RN.View style={styles.Header}>
					<RN.Text style={styles.Title}>
						Informações gerais de energia gerada
					</RN.Text>
				</RN.View>
				<Container>
					<RN.View style={styles.FiltersWrapper}>
						{filters.map((filter, index) => (
							<RN.View
								key={`${filter.value}`}
								// eslint-disable-next-line react-native/no-inline-styles
								style={{
									marginLeft: index > 0 ? 8 : 0,
								}}
							>
								<PeriodFilter
									type={filter.type}
									label={filter.label}
									onPress={filter.onPress}
									isSelected={selectedPeriodFilter.value === filter.value}
								/>
							</RN.View>
						))}
					</RN.View>
					<RN.View style={styles.CardsWrapper}>
						{geralBalanceOfEnergyGeneratedCards.map((card, index) => (
							<RN.View // eslint-disable-next-line react-native/no-inline-styles
								style={{
									marginBottom:
										index === 0 ||
										(index > 0 &&
											index < geralBalanceOfEnergyGeneratedCards.length - 1)
											? 24
											: 0,
								}}
								key={card.type}
							>
								<GeralBalanceOfEnergyGeneratedCard {...card} />
							</RN.View>
						))}
					</RN.View>
				</Container>
			</ScreenWrapper>
		</>
	);
}
