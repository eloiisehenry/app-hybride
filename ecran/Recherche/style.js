// style.js
import { StyleSheet } from 'react-native';

const rechercheStyles = StyleSheet.create({
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
    backgroundColor: '#282828',
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'white',
  },
  itemContainer: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    margin: 4,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedCityContainer: {
    backgroundColor: '#81c784',
    padding: 12,
    marginTop: 16,
    borderRadius: 8,
  },
  selectedCityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default rechercheStyles;
