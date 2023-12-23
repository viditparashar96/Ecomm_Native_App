import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from "react-native-vector-icons/MaterialIcons"
import { useTheme } from '@react-navigation/native';
export type TabsParamList = {
    Home: undefined;
    Cart: undefined;
    Payment: undefined;
    Profile: undefined;

}

const TabStack = createBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
    const {colors}=useTheme()
  return (
    <TabStack.Navigator screenOptions={{
        tabBarActiveTintColor:colors.text,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel:false,
        
    
    }}>
        <TabStack.Screen name="Home"  component={HomeScreen} options={{
            headerShown:false,
            tabBarIcon(props){
                return <Icon name="home" {...props}/>
            }
        }} />
        <TabStack.Screen name="Cart" component={HomeScreen} options={{
        
            tabBarIcon(props){
                return <Icon name="shopping-cart" {...props}/>
            }
        }} />
        <TabStack.Screen name="Payment" component={HomeScreen} options={{
            
            tabBarIcon(props){
                return <Icon name="account-balance-wallet" {...props}/>
            }
        }} />
        <TabStack.Screen name="Profile" component={HomeScreen} options={{
            
            tabBarIcon(props){
                return <Icon name="person" {...props} size={20}/>
            }
        }} />
    </TabStack.Navigator>
  )
}

export default TabsNavigator