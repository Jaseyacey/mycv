import * as React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ContactScreen ()  {
  return (
    <>
    <ScrollView>  
      <Text style={styles.header}>Contact Me</Text>
    </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
    header: {
      color: '#9999ff',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center'
    },
    h2: {
      color: 'red',
      fontWeight: 'normal',
      fontSize: 25,
      textAlign: "center",
    },
    pictures: {
      width: 250,
      height: 250,
      resizeMode: 'contain',
      marginTop: 1,
      marginLeft: 60,
      
    },
    comments: {
      fontSize: 28,
      textAlign: 'center'
    }
  })