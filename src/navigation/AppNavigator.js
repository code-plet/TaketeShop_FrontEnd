import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  ADDRESS_SCREEN,
  ADD_ADDRESS_SCREEN,
  ADD_COMMENT_SCREEN,
  BOTTOM_BAR_NAVIGATOR,
  CATEGORY_DETAIL_SCREEN,
  COMMENT_SCREEN,
  LOGIN_NAVIGATOR,
  NOTIFICATION_SCREEN,
  PRODUCT_DETAIL_SCREEN,
  STARTUP_SCREEN,
  SUCCESS_SCREEN,
  WISHLIST_SCREEN,
  PAYMENT_SCREEN,
  ORDER_DETAIL_SCREEN,
} from '../constants/NavigatorIndex';
import BottomBarNavigator from './BottomBarNavigator';
import CategoryDetailScreen from '../screens/productScreen/CategoryDetailScreen';
import ProductDetailScreen from '../screens/productScreen/ProductDetailScreen';
import CommentScreen from '../screens/productScreen/CommentScreen';
import AddCommentScreen from '../screens/productScreen/AddCommentScreen';
import Colors from '../constants/Colors';
import LoginNavigator from './LoginNavigator';
import AddressScreen from '../screens/addressScreen/AddressScreen';
import AddAddressPage from '../screens/addressScreen/AddAddressPage';
import SuccessScreen from '../screens/addressScreen/SuccessScreen';
import StartupScreen from '../screens/StartupScreen';
import PaymentScreens from '../screens/cartScreen/PaymentScreens';
import OrderDetailScreen from '../screens/orderScreen/OrderDetailScreen';


const StackNavigator = createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName={STARTUP_SCREEN}
        options={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
        }}>
        <StackNavigator.Screen
          name={STARTUP_SCREEN}
          component={StartupScreen}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={LOGIN_NAVIGATOR}
          component={LoginNavigator}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={BOTTOM_BAR_NAVIGATOR}
          component={BottomBarNavigator}
          options={{
            headerTitle: 'Home Page',
            headerShown: false,
          }}></StackNavigator.Screen>


        <StackNavigator.Screen
          name={CATEGORY_DETAIL_SCREEN}
          component={CategoryDetailScreen}
          options={{
            headerTitle: 'Detail Screen',
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={PRODUCT_DETAIL_SCREEN}
          component={ProductDetailScreen}
          options={{
            headerTitle: 'Úm ba la Product Detail nè',
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={COMMENT_SCREEN}
          component={CommentScreen}
          options={{
            headerTitle: 'Đánh giá',
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={ADD_COMMENT_SCREEN}
          component={AddCommentScreen}
          options={{
            headerTitle: 'Viết đánh giá',
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={ADDRESS_SCREEN}
          component={AddressScreen}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={ADD_ADDRESS_SCREEN}
          component={AddAddressPage}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={PAYMENT_SCREEN}
          component={PaymentScreens}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={SUCCESS_SCREEN}
          component={SuccessScreen}
          options={{
            headerTitle: 'Thêm Địa Chỉ',
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={ORDER_DETAIL_SCREEN}
          component={OrderDetailScreen}
          options={{
            headerTitle: 'Thêm Địa Chỉ',
            headerShown: false,
          }}></StackNavigator.Screen>


      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
