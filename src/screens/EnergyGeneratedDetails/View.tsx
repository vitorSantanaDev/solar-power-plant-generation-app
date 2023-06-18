/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import * as RN from 'react-native';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { LineChart } from 'react-native-chart-kit';

import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PeriodFilterTypeEnum } from '../../components/PeriodFilter/types';

import { Container } from '../../components/Container';

import { deviceWidth } from '../../utils/device-width';
import { useStackNavigation } from '../../utils/navigation-utils';
import { returnPeriodColorTheme } from '../../utils/return-period-color-theme';
import { EnergyGeneratedDetailsViewProps } from './types';

import { energyGeneratedDetailsViewStyles } from './styles';

export function EnergyGenratedDetailsView({
	data,
}: EnergyGeneratedDetailsViewProps) {
	const navigation = useStackNavigation();

	const { data_type, generation, x_labels, expected, totals } = data;

	const [dataPointCliked, setDataPointCliked] = React.useState<{
		value: number;
	}>();

	const styles = energyGeneratedDetailsViewStyles({
		data_type: data.data_type as PeriodFilterTypeEnum,
	});

	const totalExpectedEnergyToBeGenerated = React.useMemo(() => {
		return expected.reduce((acc, i) => (acc += i), 0).toFixed(2);
	}, [expected]);

	const xLabelsFormated = React.useMemo(() => {
		return x_labels.map((l) => {
			let label: string = '';

			if (data_type === PeriodFilterTypeEnum.DAILY) {
				label = format(new Date(l + 'T00:00:00'), 'MM/dd');
			}

			if (data_type === PeriodFilterTypeEnum.HOURLY) {
				label = l;
			}

			if (data_type === PeriodFilterTypeEnum.MONTHLY) {
				label = format(new Date(l + 'T00:00:00'), 'MMMM', { locale: ptBR });
			}

			if (data_type === PeriodFilterTypeEnum.YEARLY) {
				label = format(new Date(l + 'T00:00:00'), 'yyyy');
			}
			return label;
		});
	}, [x_labels, data_type]);

	const screenTitleType = React.useMemo(() => {
		return data_type === PeriodFilterTypeEnum.MONTHLY
			? 'mensalmente'
			: data_type === PeriodFilterTypeEnum.DAILY
			? 'diariamente'
			: data_type === PeriodFilterTypeEnum.YEARLY
			? 'anualmente'
			: 'por hora';
	}, [data_type]);

	const chartData = React.useMemo(() => {
		return {
			labels: xLabelsFormated,
			datasets: [
				{
					data: generation,
					color: () =>
						returnPeriodColorTheme({
							type: data_type as PeriodFilterTypeEnum,
							color: 'primary',
						}),
					strokeWidth: 2,
				},
			],
		};
	}, [generation, xLabelsFormated, data_type]);

	const chartConfig = React.useMemo(() => {
		return {
			backgroundGradientToOpacity: 0.3,
			backgroundGradientFromOpacity: 0,
			backgroundGradientTo: returnPeriodColorTheme({
				type: data_type as PeriodFilterTypeEnum,
				color: 'primary',
			}),
			backgroundGradientFrom: returnPeriodColorTheme({
				type: data_type as PeriodFilterTypeEnum,
				color: 'secondary',
			}),
			color: () =>
				returnPeriodColorTheme({
					type: data_type as PeriodFilterTypeEnum,
					color: 'primary',
				}),
		};
	}, [data_type]);

	const handleDataPointClick = React.useCallback(
		(params: { value: number }) => {
			setDataPointCliked({ ...params });
		},
		[]
	);

	const chartWidth =
		data_type === PeriodFilterTypeEnum.YEARLY ? deviceWidth : deviceWidth * 2.5;

	return (
		<ScreenWrapper>
			<RN.View style={styles.Header}>
				<RN.View style={styles.HeaderContentWrapper}>
					<RN.Pressable
						onPress={() => navigation.goBack()}
						style={styles.GoBackPressable}
					>
						<RN.Image source={require('../../assets/icons/arrow-left.png')} />
					</RN.Pressable>
					<RN.Text style={styles.Title}>
						Detalhes da energia gerada{' '}
						<RN.Text style={styles.TitleHighlight}>{screenTitleType}</RN.Text>
					</RN.Text>
				</RN.View>
			</RN.View>
			<Container>
				<RN.View style={styles.InfosWrapper}>
					<RN.View>
						<RN.View style={styles.Row}>
							<RN.Text style={styles.Label}>Expectativa - </RN.Text>
							<RN.Text style={styles.Value}>
								{totalExpectedEnergyToBeGenerated}kwh
							</RN.Text>
						</RN.View>
						<RN.View style={styles.Row}>
							<RN.Text style={styles.Label}>Total gerado - </RN.Text>
							<RN.Text style={styles.Value}>{totals.kwh}kwh</RN.Text>
						</RN.View>
						<RN.View style={styles.Row}>
							<RN.Text style={styles.Label}>Porcentagem - </RN.Text>
							<RN.Text style={styles.Value}>{totals.percentage}%</RN.Text>
						</RN.View>
						<RN.View style={styles.Row}>
							<RN.Text style={styles.Label}>CO2 evitado - </RN.Text>
							<RN.Text style={styles.Value}>{totals.co2}</RN.Text>
						</RN.View>
						<RN.View style={[styles.Row, { marginBottom: 0 }]}>
							<RN.Text style={styles.Label}>Árvores salvas - </RN.Text>
							<RN.Text style={styles.Value}>{totals.trees}</RN.Text>
						</RN.View>
					</RN.View>
				</RN.View>
				<RN.ScrollView showsHorizontalScrollIndicator={false} horizontal>
					<LineChart
						height={560}
						data={chartData}
						yAxisSuffix="kwh"
						width={chartWidth}
						onDataPointClick={({ value }) => handleDataPointClick({ value })}
						chartConfig={{ ...chartConfig }}
					/>
				</RN.ScrollView>

				<RN.Text style={styles.Description}>
					💡 Clique em um ponto do gráfico para ver o quanto de energia foi
					gerada no período clicado.
				</RN.Text>

				{!!dataPointCliked && (
					<RN.Text style={styles.KwhGenerated}>
						{dataPointCliked.value}kwh
					</RN.Text>
				)}
			</Container>
		</ScreenWrapper>
	);
}
