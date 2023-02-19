import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';

import MealCard from '../../components/MealCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const MealList = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {error, loading, data} = useFetch(
    `${Config.API_FILTER}?c=${strCategory}`,
  );

  function handleMealSelect(idMeal) {
    navigation.navigate('DetailPage', {idMeal});
  }

  const renderItem = ({item}) => {
    return (
      <MealCard data={item} onSelect={() => handleMealSelect(item.idMeal)} />
    );
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <FlatList
      keyExtractor={item => item.idMeal}
      data={data.meals}
      renderItem={renderItem}
    />
  );
};

export default MealList;
