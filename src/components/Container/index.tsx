import * as React from 'react';
import * as RN from 'react-native';

import { ContainerProps } from './types';
import { containerStyles } from './styles';

export function Container({ children }: ContainerProps) {
	const styles = containerStyles();
	return <RN.View style={styles.Wrapper}>{children}</RN.View>;
}
