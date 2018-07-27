import React from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default class App extends React.Component {
  
  render() {
    const navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>);
    return (
      <DrawerLayoutAndroid
        ref="myDrawer"
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}> 
        <View style={{height: 80, backgroundColor: 'lightblue'}}>
          <View style={{flex: 1, backgroundColor: 'lightgreen', flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=> {this.refs['myDrawer'].openDrawer()}} style={{marginTop: 20, paddingLeft: 15}}>
            <Ionicons name="md-menu" size={32} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
    </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
