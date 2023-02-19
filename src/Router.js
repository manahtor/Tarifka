import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from './pages/Categories';
import MealList from './pages/MealList';
import DetailPage from './pages/DetailPage';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            title: 'Categories',
            headerTintColor: 'orange',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MealListPage"
          component={MealList}
          options={{
            title: 'Categories',
            headerTintColor: 'orange',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={{
            title: 'Details',
            headerTintColor: 'orange',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
