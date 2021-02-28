/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';



export default function App() {

  function handleGetSerialNumber() {
    
  }

  function handleGetConstants() {
   
  }

  function handleSetAppIdendification() {
   
  }

  function handleGetMessages() {
    
  }


  function handleInitializeAndActivatePinpad() {
    

  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={{ backgroundColor: "#666", padding: 15, borderRadius: 3, margin: 10 }} onPress={() => handleGetSerialNumber()} >
          <Text style={{ color: "#FFF" }}>GetSerialNumber</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#666", padding: 15, borderRadius: 3, margin: 10 }} onPress={() => handleGetConstants()} >
          <Text style={{ color: "#FFF" }}>GetConstants</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#666", padding: 15, borderRadius: 3, margin: 10 }} onPress={() => handleSetAppIdendification()} >
          <Text style={{ color: "#FFF" }}>SetAppIdendification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#666", padding: 15, borderRadius: 3, margin: 10 }} onPress={() => handleGetMessages()} >
          <Text style={{ color: "#FFF" }}>GetMessages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#666", padding: 15, borderRadius: 3, margin: 10 }} onPress={() => handleInitializeAndActivatePinpad()} >
          <Text style={{ color: "#FFF" }}>InitializeAndActivatePinpad</Text>
        </TouchableOpacity>


      </View>
    </>
  );
};

