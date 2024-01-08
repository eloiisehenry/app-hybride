import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#1F1F1F'
    },
    inputContainer: {
        width: '75%',
        marginBottom: 1,
    },
    input: {
        backgroundColor: '#282828',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 15,
        color: 'white',

    },
    //icon page connexion
    image: {
        width: 150,
        height: 150,
        marginBottom: 30
    },
    // icon page inscription
    image2: {
        width: 120,
        height: 120,
        marginBottom: 5,
        marginTop: 5,
        alignSelf: 'flex-start'
    },
    imageContainer: {
        width: '100%',
        marginTop: 30,
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    // head
    headContainer: {
        width: '80%',
        marginBottom: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        color : 'white',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 5
    },
    subheading: {
        color : 'white',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 25,
        marginTop: 5
    },
    text: {
        color : 'white',
        fontSize: 13,
        fontWeight: '400',
        marginBottom: 5,
        marginTop: 5

    },

    // boutons
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 18,
        flexDirection: "row",
        justifyContent: 'center',
    },
    button: {
        backgroundColor : 'transparent',
        width: '40%',
        height: 35,
        padding: 9,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 12
    },
    buttonOutline: {
        backgroundColor: 'white',
    },
    buttonOutlineText: {
        color: '#1F1F1F',
        fontWeight: '700',
        fontSize: 12
    },

    // radio
    radioContainer: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    radioText: {
        color : 'white',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 5,
        marginTop: 5
    },

    // lien invite
    inviteContainer: {
        width: '80%',
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inviteLink: {
        color : 'white',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 5,
        marginTop: 5,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
    },
    
});