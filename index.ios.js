import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	NavigatorIOS,
	Text,
	View
} from 'react-native';
import PropertyList from './components/PropertyList';

class calviumTest extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NavigatorIOS ref="nav" style={theme.container} initialRoute={{
				component: PropertyList,
				title: 'Calvium Test'
			}} />
		);
	}
}

const theme = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ecf0f1',
	},
	header: {
		paddingTop: 25,
		paddingBottom: 15,
		paddingRight: 15,
		paddingLeft: 15,
		backgroundColor: '#3498db',
		color: '#ffff',
		textAlign: 'center'
	}
});

AppRegistry.registerComponent('calviumTest', () => calviumTest);

export default calviumTest;
