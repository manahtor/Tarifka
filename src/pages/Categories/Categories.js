import React from 'react';
import {FlatList, Text} from 'react-native';
import Config from 'react-native-config';

import CategorieCard from '../../components/CategorieCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch';

const Categories = ({navigation}) => {
  const {error, loading, data} = useFetch(Config.API_CATEGORIES);

  const handleCategorieSelect = strCategory => {
    navigation.navigate('MealListPage', {strCategory});
  };

  const renderItem = ({item}) => (
    <CategorieCard
      data={item}
      onSelect={() => handleCategorieSelect(item.strCategory)}
    />
  );

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <FlatList
      keyExtractor={item => item.strCategory}
      data={data.categories}
      renderItem={renderItem}
      style={{backgroundColor: 'orange'}}
    />
  );
};

export default Categories;
