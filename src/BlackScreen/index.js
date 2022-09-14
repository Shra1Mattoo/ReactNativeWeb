
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';



const BlackScreen = ({ navigation }) => {


    return (
        <View style={styles.sectionContainer}>
            <Text style={{ color: 'white' }}>
                Welcome to Black Screen
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("WhiteScreen")}>
                <Text style={{ color: 'white' }}>
                    Switch to Light mode
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
        backgroundColor: 'black'
    },


});

export default BlackScreen;
