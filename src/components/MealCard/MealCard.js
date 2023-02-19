import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './MealCard.style';

function MealCard({data, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <ImageBackground source={{uri: data.strMealThumb}} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>{data.strMeal}</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

export default MealCard;
