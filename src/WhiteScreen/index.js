
import React from 'react';
import type from 'react';
import {

    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';



const WhiteScreen = ({ navigation }) => {


    return (
        <View style={styles.sectionContainer}>
            <Text style={{ color: 'black' }}>
                Welcome to White Screen
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('BlackScreen')}>
                <Text>
                    Switch to Dark mode
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },


});

export default WhiteScreen;
