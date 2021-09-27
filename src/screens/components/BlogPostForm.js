import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [desc, setDesc] = useState(initialValues.content);

  return (
    <View>
     <Text style={styles.label}>Enter Title</Text>
     <TextInput  style={styles.input} value={title} onChangeText={t => setTitle(t)} />
     <Text style={styles.label}>Enter Description</Text>
     <TextInput  style={styles.input} value={desc} onChangeText={t => setDesc(t)} />
     <Button title="Save Blog Post " onPress={() => {onSubmit(title, desc)}} />
   </View>
  )
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5
  }
})

export default BlogPostForm