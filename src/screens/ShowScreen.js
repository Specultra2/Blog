import React, { useContext } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Context } from './context/BlogContext';
import { Ionicons } from '@expo/vector-icons'; 

const ShowScreen = ({ navigation }) => {
  const {state} = useContext(Context);
  
  const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id') )

 
  return (
   <View>
     <Text>
       {blogPost.title}
     </Text>
     <Text>
       {blogPost.content}
     </Text>
   </View>
  )
}
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}><Ionicons name="pencil-outline" size={24} color="black" /></TouchableOpacity>
  }
}

export default ShowScreen
