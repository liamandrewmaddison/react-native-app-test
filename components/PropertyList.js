import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView } from 'react-native';
import PropertyRow from './PropertyRow';
import { fetchProperties } from '../api';

class PropertyList extends Component {

	constructor(props) {
		super(props)
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		this.state = {
			list: this.ds.cloneWithRows([]),
			isLoading: true
		}
	}

	componentDidMount() {
		fetchProperties().then(properties => {
			this.setState({
				list: this.ds.cloneWithRows(properties.response.listings),
				isLoading: false
			})
		})
	}

	render() {
		return(
			<View style={ theme.container }>
				{this.state.isLoading ? (
						<Text style={ theme.loader }>LOADING</Text>
					) : (
						<ListView
							dataSource={ this.state.list }
							renderRow={(rowData) => 
								<PropertyRow 
									item={ rowData }
									nav={ this.props }></PropertyRow>}
							renderSeparator={(sectionId, rowId) => 
								<View key={ rowId } style={ theme.separator } />}
						/>
				)}
			</View>
		)
	}
}

const theme = StyleSheet.create({
	container: {
		paddingTop: 64
	},
	loader: {
		paddingTop: 200,
		textAlign: 'center'
	},
	separator: {
		height: 1,
		backgroundColor: '#bdc3c7'
	}
});

AppRegistry.registerComponent('PropertyList', () => PropertyList);

export default PropertyList;