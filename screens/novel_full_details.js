import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, Image, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class novel_full_details extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>dsfds</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    novelImg: {
        resizeMode: 'contain',
    }
})