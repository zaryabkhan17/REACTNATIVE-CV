import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View, } from 'react-native';

export default function App() {
  

  return (
    <ScrollView>
      <ActivityIndicator size="large" />
      <View style={styles.container}>
<View><Text></Text></View>
       
        {/* <Text>Hello World</Text> */}
        <StatusBar style="auto" />
      </View>

      <View>
        
<Text style={styles.heading}>MUHAMMAD ZARYAB KHAN</Text>
        
        <Text>Looking For a sultable position of sharia Adviser / Assistants of sharia advviser / Teacher
        position with a pertigious and reputable establishment where
        I will have a 'hands on' role.</Text>
      </View>

      <View>
        <Text style={styles.heading}>PERSONAL INFORMATION</Text> 
        <Text>Father's Name:      KHALEEQ UR REHMAN</Text>
        <Text>Date Of Birth:        17-April-1999</Text>
        <Text>Religion:                 Islam</Text>
        <Text>Maritail Status:       Single</Text>
    </View>

        <View>
          <Text style={styles.heading}>PERSNOL SKILLS</Text>
          <Text>Ms Word</Text>
          <Text>Ms Excel</Text>
          <Text>Ms PowerPoint</Text>
          <Text>Front-End And Back-End Developer</Text>
          <Text>Basic English Language</Text>
        </View>
        
        <View>
        
          <Text style={styles.heading}>ACADEMIC QULIFICATION</Text>
          <Text>MATRICULATION (BIO-SCIENCE) </Text>
          <Text>INTERMIDIATE (COMMERCE)</Text>
         
      
     </View>
       
    </ScrollView>
  );
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading:{
    fontSize: 25,
    fontWeight: 'bold',
  },
 
});