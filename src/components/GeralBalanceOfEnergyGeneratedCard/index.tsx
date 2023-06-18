import * as React from 'react';
import * as RN from 'react-native';
import { format } from 'date-fns';

import { theme } from '../../styles/theme';

import { ChartCircular } from '../ChartCircular';

import { geralBalanceOfEnergyGeneratedCardStyles } from './styles';
import { GeralBalanceOfEnergyGeneratedCardProps } from './types';
import { PeriodFilterTypeEnum } from '../PeriodFilter/types';

export function GeralBalanceOfEnergyGeneratedCard({
	type,
	onPress,
	progress,
	savedTrees,
	percentage,
	co2avoided,
	totalInKwh,
	bestMoment,
	worstMoment,
	expectedEnergyInKwh,
}: GeralBalanceOfEnergyGeneratedCardProps) {
	const styles = geralBalanceOfEnergyGeneratedCardStyles({ type });

	const bestAndWrostMomentLabel =
		type === PeriodFilterTypeEnum.DAILY
			? 'Dia'
			: type === PeriodFilterTypeEnum.MONTHLY
			? 'Mês'
			: type === PeriodFilterTypeEnum.YEARLY
			? 'Ano'
			: 'Horário';

	const titleHighlight =
		type === PeriodFilterTypeEnum.DAILY
			? 'Diariamente'
			: type === PeriodFilterTypeEnum.MONTHLY
			? 'Mensalmente'
			: type === PeriodFilterTypeEnum.YEARLY
			? 'Anualmente'
			: 'Por hora';

	const bestMomentAndWorstMomentFormatted = React.useCallback(
		(moment: string, typeParam: PeriodFilterTypeEnum) => {
			const formattedValue =
				typeParam === PeriodFilterTypeEnum.DAILY
					? format(new Date(moment), 'dd/MM/yyyy')
					: typeParam === PeriodFilterTypeEnum.MONTHLY
					? format(new Date(moment), 'MM/yyyy')
					: typeParam === PeriodFilterTypeEnum.YEARLY
					? format(new Date(moment), 'yyyy')
					: moment;
			return formattedValue;
		},
		[]
	);

	return (
		<RN.Pressable style={styles.Wrapper}>
			<RN.View style={styles.Header}>
				<RN.Image source={require('../../assets/icons/zap.png')} />
				<RN.View style={styles.HeaderInfosWrapper}>
					<RN.Text style={styles.Title}>
						Energia gerada{' '}
						<RN.Text style={styles.TitleHighlight}>{titleHighlight}</RN.Text>
					</RN.Text>
				</RN.View>
			</RN.View>
			<RN.View style={styles.EnergyGeneratedInfos}>
				<RN.View>
					<RN.View style={styles.TotalInfosWrapper}>
						<RN.Text style={styles.TotalGeneratedLabel}>Total - </RN.Text>
						<RN.Text style={styles.TotalGeneratedValue}>
							{totalInKwh.toFixed(1)} kwh de {expectedEnergyInKwh.toFixed(1)}{' '}
							Kwh
						</RN.Text>
					</RN.View>
					<RN.View style={styles.TotalInfosWrapper}>
						<RN.Text style={styles.TotalGeneratedLabel}>CO2 evitado - </RN.Text>
						<RN.Text style={styles.TotalGeneratedValue}>{co2avoided}</RN.Text>
					</RN.View>
					<RN.View style={styles.TotalInfosWrapper}>
						<RN.Text style={styles.TotalGeneratedLabel}>
							Árvores salvas -{' '}
						</RN.Text>
						<RN.Text style={styles.TotalGeneratedValue}>{savedTrees}</RN.Text>
					</RN.View>
				</RN.View>
				<ChartCircular
					progress={progress}
					percentage={percentage}
					type={type}
				/>
			</RN.View>
			<RN.View style={styles.FooterWrapper}>
				<RN.View style={styles.BestMomentWrapper}>
					<RN.View style={styles.BestMomentInfosWrapper}>
						<RN.View style={styles.BestMomentBadge} />
						<RN.View style={styles.BestMomentInfo}>
							<RN.Text style={styles.BestMomentLabel}>
								Melhor {bestAndWrostMomentLabel} -{' '}
							</RN.Text>
							<RN.Text style={styles.BestMomentValue}>
								{bestMomentAndWorstMomentFormatted(bestMoment, type)}
							</RN.Text>
						</RN.View>
					</RN.View>
					<RN.View style={styles.BestMomentInfosWrapper}>
						<RN.View
							style={[
								styles.BestMomentBadge,
								{ backgroundColor: theme.colors.error },
							]}
						/>
						<RN.View style={styles.BestMomentInfo}>
							<RN.Text style={styles.BestMomentLabel}>
								Pior {bestAndWrostMomentLabel} -{' '}
							</RN.Text>
							<RN.Text style={styles.BestMomentValue}>
								{bestMomentAndWorstMomentFormatted(worstMoment, type)}
							</RN.Text>
						</RN.View>
					</RN.View>
				</RN.View>
				<RN.TouchableOpacity
					onPress={onPress}
					style={styles.SeeDetailsPressable}
				>
					<RN.Text style={styles.SeeDetailsPressableText}>Ver detalhes</RN.Text>
				</RN.TouchableOpacity>
			</RN.View>
		</RN.Pressable>
	);
}
