import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './AccordionItem.style';

class AccordionItem extends Component {
	render() {
		return (
			<View style={ Styles.container }>
				<View style={ Styles.titleContainer }>
					<Text>{ this.props.title }</Text>
				</View>
				<View style={ Styles.contentContainer }>
					<Text>{ this.props.children }</Text>
				</View>
			</View>
		);
	}
};

AccordionItem.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired
};

export default AccordionItem;
