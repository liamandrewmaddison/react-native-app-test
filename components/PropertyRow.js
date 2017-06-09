import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import PropertyInfo from './PropertyInfo';

class PropertyRow extends Component {

	constructor(props) {
		super(props);
		console.log()
	}

	showItemInfo() {
		this.props.nav.navigator.push({
			title: 'Info',
			component: PropertyInfo,
			passProps: { info: this.props.item }
		})
	}

	render() {
		return (
			<View style={ theme.container }>
				<TouchableOpacity onPress={ this.showItemInfo.bind(this) }>
					<Image source={{ uri: this.props.item.img_url }} style={ theme.photo }></Image>
					<View style={ theme.detailsContainer }>
						<Text style={ theme.header }>{ this.props.item.title }</Text>
						<Text style={ theme.description }>{ this.props.item.summary }</Text>
						<Text style={ theme.price }>{ this.props.item.price_formatted }</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

AppRegistry.registerComponent('PropertyRow', () => PropertyRow);

const theme = StyleSheet.create({
	constainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center'
	},
	photoContainer: {
		flex: 1,
	},
	photo: {
		width: 115,
		height: 115,
		alignSelf: 'flex-start'
	},
	detailsContainer: {
		marginTop: -120,
		marginLeft: 115,
		height: 115,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 15,
		paddingRight: 15
	},
	header: {
		marginBottom: 5
	},
	description: {
		backgroundColor: 'transparent',
		fontSize: 11,
		color: '#555',
		marginBottom: 5
	},
	price: {
		fontWeight: 'bold',
		color: '#2980b9',
		fontSize: 15
	}
});

export default PropertyRow;