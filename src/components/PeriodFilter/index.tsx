import * as React from 'react';
import * as RN from 'react-native';

import { PeriodFilterProps } from './types';
import { periodFilterStyles } from './styles';

export function PeriodFilter({
	isSelected,
	type,
	label,
	...rest
}: PeriodFilterProps) {
	const styles = periodFilterStyles({ type, isSelected });
	return (
		<RN.TouchableOpacity style={styles.FilterWrapper} {...rest}>
			<RN.Text style={styles.FilterText}>{label}</RN.Text>
		</RN.TouchableOpacity>
	);
}
