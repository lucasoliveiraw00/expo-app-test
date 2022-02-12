import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeView } from '@features/home';
import { LoginView, RecoverPasswordView } from '@features/auth';

const Stack = createNativeStackNavigator();

export const NavigationStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="LoginView" component={LoginView} />
      <Stack.Screen
        name="RecoverPasswordView"
        component={RecoverPasswordView}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
