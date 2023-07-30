import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import AppPicker from '../components/AppPicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category")

});

const categories =[
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label:  "Camera", value: 3},
]


export default function ListingEditScreen() {
   return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ title: "", price: "", description: "", category: null,}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="title"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Title"
        />


        <AppFormField
          maxLength={8}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          name="price"
          placeholder="Price"
  
        />
        
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          />

        <AppFormField
          maxLength={255}
          multiline
          autoCapitalize="none"
          autoCorrect={false}
          name="description"
          placeholder="Description"
        />  
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
