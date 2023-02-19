import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import styles from './CategorieCard.style';

function CategorieCard({data, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{uri: data.strCategoryThumb}} style={styles.image} />
        <Text style={styles.title}>{data.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategorieCard;
