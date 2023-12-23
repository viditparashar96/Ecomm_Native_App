// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import { BottomSheetProvider } from '@gorhom/bottom-sheet/lib/typescript/contexts';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


function App() {
  const theme:Theme=React.useMemo(()=>({...DefaultTheme,colors:{
    ...DefaultTheme.colors,
    background:"#f5f5f5",
    text:"#191919",
    border:"#e0e0e0"
  }}),[])
  return (

    <NavigationContainer theme={theme}>
      <BottomSheetModalProvider>

     <RootNavigator />
     
      </BottomSheetModalProvider>
      

    </NavigationContainer>

  );
}

export default App;