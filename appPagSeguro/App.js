/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import { Text, View, StatusBar, TouchableOpacity, DeviceEventEmitter , NativeEventEmitter } from 'react-native';
import PlugPagService from 'plug-pag-service-pdv';


export default function App() {

  function handleGetSerialNumber() {
    PlugPagService.getSerialNumber()
      .then((initResult) => {
        console.log('success', initResult);
      }, error => {
        console.error('error', error.message);
      });
  }

  function handleGetConstants() {
    let listConstants = PlugPagService.getConstants();
    console.log(listConstants)
  }

  function handleSetAppIdendification() {
    PlugPagService.setAppIdendification("RNPAGA", "1.0")
    alert("Aplicativo Registrado")
  }

  function handleGetMessages() {
    PlugPagService.getMessages()
      .then((initResult) => {
        console.log(initResult)
      }, error => {
        console.error('error', error.message);
      });
  }

  const calendarManagerEmitter = new NativeEventEmitter(PlugPagService);

  const subscription = calendarManagerEmitter.addListener(
    'eventPayments',
    (reminder) => console.log(reminder)
  );


  function handleInitializeAndActivatePinpad() {
    handleSetAppIdendification()
    PlugPagService.initializeAndActivatePinpad("403938").then((initResult) => {
      if (initResult.retCode === 0) {
        // Define os dados do pagamento
        const paymentData = {
          amount: 19 * 100, //VALOR
          installmentType: 1, //A VISTA OU PARCELADO
          installments: 1, //PARCELAS
          type: 1, //TIPO DEBITO OU CREDITO OU VOUCHER
          userReference: 'BLABLA', //REFERENCIA
          printReceipt: false //RECEBER OU NAO SMS
        };
        PlugPagService.doPayment(JSON.stringify(paymentData)).then((initResult) => {
          console.log("59", initResult);
        }, error => {
          console.error('61', error);
        });
      } else {
        console.error('else 67', initResult);
      }
    }, error => {
      console.error('67 error', error);
      //alert(error.message)
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

