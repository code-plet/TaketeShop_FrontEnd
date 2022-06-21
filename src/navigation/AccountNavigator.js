import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ACCOUNT_MAIN_SCREEN, PROFILE_NAVIGATOR } from '../constants/NavigatorIndex';
import AccountMainScreen from '../screens/accountScreen/AccountMainScreen';
import ProfileNavigator from './ProfileNavigator';
import SuccesScreen from '../screens/Login_screen/SuccesScreen';

const Stack = createNativeStackNavigator();

function AccountNavigator() {
  return (
    <Stack.Navigator initialRouteName={ACCOUNT_MAIN_SCREEN}>
      <Stack.Screen
        name={ACCOUNT_MAIN_SCREEN}
        options={{ headerShown: false }}
        component={AccountMainScreen}></Stack.Screen>
      
      <Stack.Screen
        name={PROFILE_NAVIGATOR}
        component={ProfileNavigator}
        options={{
          headerShown: false,
        }}></Stack.Screen>

      <Stack.Screen
        name={"SuccesScreen"}
        options={{ headerShown: false }}
        component={SuccesScreen}>
      </Stack.Screen>
    </Stack.Navigator>

  );
}

export default AccountNavigator;
