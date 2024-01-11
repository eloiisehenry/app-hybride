import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

const RadioItem = ({ selectedTemperatureUnit, onSelectTemperatureUnit }) => {
    const options = [
        {
            label: 'Celsius',
            value: true,
        },
        {
            label: 'Fahrenheit',
            value: false,
        },
    ];

    return (
        <View style={styles.radioContainer}>
            {options.map((option) => (
                <TouchableOpacity
                    key={option.value}
                    style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}
                    onPress={() => onSelectTemperatureUnit(option.value)}
                >
                    <View style={styles.option} >
                        {selectedTemperatureUnit === option.value && (
                             <View style={styles.op}/>
                        )}
                    </View>
                    <Text style={styles.text}>{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default RadioItem;