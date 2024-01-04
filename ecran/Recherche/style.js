import { StyleSheet } from "react-native";

const rechercheStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(31, 31, 31, 1)',
      },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      itemText: {
        color: 'white',
        fontSize: 18,
        flex: 1,
      },
      input: {
        width: '80%',
        height: 50,
        padding: 10,
        marginBottom: 5,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#282828',
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
      },
});

export default rechercheStyles;
