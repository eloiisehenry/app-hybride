import { StyleSheet } from "react-native";

export const imgStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
    margin: 5,
  },
  selectedImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    margin: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
});


export default imgStyles;