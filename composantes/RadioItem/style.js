import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    radioContainer: {
        flexDirection: 'row', // Changez ici
        justifyContent: 'space-around', // Assurez une répartition égale
        alignItems: 'center',
        marginTop: 20,
        width: '80%',
    },
    option: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    op: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    text: {
        marginLeft: 10,
        color: 'white',
    },
});