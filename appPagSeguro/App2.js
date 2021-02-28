/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import PlugPagService, { PlugPag, PlugPagPaymentData, PlugPagActivationData } from 'react-native-plug-pag-service'




export default function App() {


  function handleInitializeAndActivatePinpad() {
    PlugPagService.setAppIdendification('MeuApp', '1.0.8');
    PlugPagService.initializeAndActivatePinpad("403938").then((initResult) => {
      if (initResult.retCode === PlugPagService.RET_OK) {
        const paymentData = {
          type: PlugPagService.PAYMENT_CREDITO,
          amount: 22 * 100,
          installmentType: PlugPagService.INSTALLMENT_TYPE_A_VISTA,
          installments: 1,
          userReference: 'MeuApp',
        };
        PlugPagService.doPayment(JSON.stringify(paymentData)).then((initResult) => {
          console.log('31', initResult)
        }, error => {
          console.error('error', error.message);
        });
      } else {

      }
    }, error => {
      console.error('error', error.message);
    });

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

