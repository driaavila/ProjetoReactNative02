import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Tela03 from './telas/Tela03';
import { Assets } from '@react-navigation/stack';


function Tela01() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }} >Tela 01</Text>
      <Text>Mais elementos de sua tela abaixo...</Text>
    </View>
  );
}

function Tela02() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela 02</Text>
      <Text>Mais elementos de sua tela abaixo...</Text>
    </View>
  );
}

function Custom({ ...props }) {
  return (
      <SafeAreaView>
        <Text style={styles.user}>Aplicativo IF</Text>
        <Image
        source={require( './assets/logo.png')}
        style={styles.imagens}
        ></Image>
        <DrawerItemList {...props}></DrawerItemList>
      </SafeAreaView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      openByDefault='true'
      overlayColor='#5B8e23'
      drawerStyle={{ backgroundColor: '#F5DEB3', width: 240 }}
      drawerContent={props => <Custom {...props} />}
      ><Drawer.Screen
        name='Tela01'
        component={Tela01}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require("./assets/base.png")}
              resizeMode="contain"
              style={{ width: 20, height: 20, tintColor: tintColor }}
            ></Image>
          )
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name='Tela02'
        component={Tela02}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require("./assets/acessibilidade.png")}
              resizeMode="contain"
              style={{ width: 20, height: 20, tintColor: tintColor }}
            ></Image>
          )
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name='Tela03'
        component={Tela03}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require("./assets/android.png")}
              resizeMode="contain"
              style={{ width: 20, height: 20, tintColor: tintColor }}
            ></Image>
          )
        }}  ></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer></MyDrawer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagens: {
    width: 55,
    height: 55,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15
  },
  user: {
    fontSize: 25
  }
});
