import {StyleSheet, Dimensions} from 'react-native';

const screenSize = Dimensions.get('window');

export default StyleSheet.create({
  image: {
    width: screenSize.width,
    height: screenSize.height / 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'darkred',
  },
  area: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkred',
  },
  content: {
    color: 'black',
  },
  description: {
    color: 'black',
  },
  button: {
    backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    margin: 10,
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
