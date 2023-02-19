import React from 'react';
import {FlatList} from 'react-native';

import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Details from '../../components/Details';

const DetailPage = ({route, navigation}) => {
  const {idMeal} = route.params;
  const {error, loading, data} = useFetch(`${Config.API_LOOKUP}?i=${idMeal}`);

  const renderItem = ({item}) => (
    <Details navigation={navigation} data={item} />
  );

  if (loading) return <Loading />;
  if (error) return <Error />;

  return <FlatList data={data.meals} renderItem={renderItem} />;
};

export default DetailPage;
