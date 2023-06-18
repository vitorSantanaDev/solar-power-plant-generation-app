import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useStackNavigation = () =>
	useNavigation() as NativeStackNavigationProp<any, any>;
