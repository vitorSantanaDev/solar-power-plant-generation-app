import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export function homeStyles() {
	return StyleSheet.create({
		FiltersWrapper: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: theme.metrics.pixel(24),
		},
		CardsWrapper: {
			paddingVertical: theme.metrics.pixel(24),
		},
		Header: {
			width: '100%',
			padding: theme.metrics.pixel(24),
			backgroundColor: theme.colors.dark_gray,
		},
		Title: {
			textTransform: 'uppercase',
			color: theme.colors.white,
			fontSize: theme.metrics.pixel(12),
		},
	});
}
