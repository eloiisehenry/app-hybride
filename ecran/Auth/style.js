import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#1F1F1F'
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,


    },
    input: {
        backgroundColor: '#282828',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10


    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 18,
    },
    button: {
        backgroundColor : 'transparent',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 10,
        color: 'purple'
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20
    },
    image2: {
        width: 90,
        height: 90,
        marginBottom: 20,
        marginTop: 20,
        alignSelf: 'flex-start'
    },
    headContainer: {
        width: '80%',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        color : 'white',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 20
    },
    subheading: {
        color : 'white',
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 20
    },
    text: {
        color : 'white',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 20,
        marginTop: 20

    },buttonOutlineText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        
    },
    radioText: {
        color : 'white',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 20,
        marginTop: 20
    },
    
});