import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { deviceWidth } from '../../utils/device-width';

export function containerStyles() {
	return StyleSheet.create({
		Wrapper: {
			width: deviceWidth,
			paddingHorizontal: theme.metrics.pixel(24),
		},
	});
}
