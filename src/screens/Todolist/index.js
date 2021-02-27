import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Todolist() {
    return (
        <View style={styles.wrapper}>
            <Text>Todolist</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Todolist;