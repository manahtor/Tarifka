import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import styles from './Details.style';

function Details({data}) {
  return (
    <SafeAreaView>
      <Image source={{uri: data.strMealThumb}} style={styles.image} />
      <Text style={styles.title}>{data.strMeal}</Text>
      <Text style={styles.area}>{data.strArea}</Text>
      <View style={styles.divider} />
      <Text style={styles.description}>{data.strInstructions}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(data.strYoutube)}>
        <Text style={styles.button}>Watch on Youtube</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Details;
