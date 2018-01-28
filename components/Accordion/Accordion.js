import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './Accordion.style';

export default class Accordion extends Component {
	render() {
		return (
			<View style={[ Styles.container, this.props.containerStyle ]}>
				{ this.props.children }
			</View>
		)
	}
};
