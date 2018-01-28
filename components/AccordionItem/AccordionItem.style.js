import Constants from '../../global/constants';
import Colors from '../../global/styles/colors';
import Typography from '../../global/styles/typography';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	titleContainer: {
		backgroundColor: Colors.get('green'),
		padding: Constants.GAP
	},

	title: Object.assign({}, Typography.heading3),

	contentContainer: {
		padding: Constants.GAP
	},

	content: Object.assign({}, Typography.bodyText)


});
