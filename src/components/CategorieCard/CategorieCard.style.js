import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    color: 'black',
    paddingLeft: 10,
  },
});
