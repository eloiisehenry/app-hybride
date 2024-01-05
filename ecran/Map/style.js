// style.js

import { StyleSheet } from 'react-native';

const mapStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'rgba(31, 31, 31, 1)',
      },
      input: {
        width: '100%',
        height: 50,
        padding: 10,
        marginBottom: 5,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 20,
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        backgroundColor: '#282828',
      },
      searchContainer: {
        position: 'absolute',
        top: 20, // Adjust the top position as needed
        left: 10, // Adjust the left position as needed
        right: 10,
        backgroundColor: 'transparent', // Set to 'transparent' or remove this line
        borderRadius: 5,
        padding: 10,
      },
});

export default mapStyles;
