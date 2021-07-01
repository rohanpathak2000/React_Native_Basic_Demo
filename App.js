import React from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.body}>
    <View style={styles.header}>
      <Text style={styles.title}>My Favourite Heavy Metal bands</Text>
    </View> 
    <View style={styles.container}> 
      <Text style={styles.content}>Kreator</Text>
      <Text style={styles.content}>Lamb of God</Text>
      <Text style={styles.content}>Slipknot</Text>
      <Text style={styles.content}>Angelus Apatrida</Text>
    </View>
    <View>
      <Text style={styles.newsflash}>FFDP has been replaced with Heathen as some of my fav bands !!!!! </Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 150,
      backgroundColor: 'pink',
    },
    header: {
      backgroundColor:'blue',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      color: 'white',
    },
    content: {
      fontSize: 18,
      color: 'black',
    },
    body: {
      flex: 1,
      backgroundColor: 'pink',
      resizeMode: 'stretch'
    },
    newsflash: {
      fontSize: 25,
      fontWeight: 'bold',
      backgroundColor: 'yellow'
    },   
  })