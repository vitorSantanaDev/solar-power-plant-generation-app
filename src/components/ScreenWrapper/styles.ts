import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { isIOS, statusBarHeight } from '../../utils/device-width';

export function screenWrapperStyles() {
	return StyleSheet.create({
		ScreenWrapper: {
			flex: 1,
			backgroundColor: theme.colors.mainBg,
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
		},
		ScrollViewWrapper: {
			backgroundColor: theme.colors.mainBg,
			marginTop: isIOS ? statusBarHeight : 0,
		},
	});
}
