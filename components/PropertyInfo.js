import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';

class PropertyInfo extends Component {

	render() {
		return (
			<View style={ theme.container }>
				<View style={ theme.photoContainer }>
					<Image 
						source={{ uri: this.props.info.img_url }} 
						style={ theme.photo }
						resizeMode="contain"></Image>
				</View>
				<View style={ theme.details}>
					<Text style={ theme.header }>{ this.props.info.title }</Text>
					<Text style={ theme.description }>{ this.props.info.summary }</Text>
				</View>
			</View>
		)
	}
}

AppRegistry.registerComponent('PropertyInfo', () => PropertyInfo);

const theme = StyleSheet.create({
	container: {
		flex: 1,
	},
	photoContainer: {
		flex: 1,
		alignItems: 'center',
		position: 'relative',
		maxHeight: 300
	},
	photo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	details: {
		paddingTop: 0,
		paddingRight: 15,
		paddingBottom: 15,
		paddingLeft: 15
	},
	header: {
		fontSize: 20,
		marginBottom: 15
	}
});

export default PropertyInfo;