import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import * as Yup from "yup";

import colors from '../config/colors';
import Screen from "../components/Screen";
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import CategoryPickerItem from '../components/CategoryPickerItem';
import PickerItem from '../components/PickerItem';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category")

});

const categories =[
  {label: "Furniture", value: 1, icon: 'lamp', backgroundColor: colors.primary},
  {label: "Cars", value: 2, icon: 'car', backgroundColor: '#f89f56'},
  {label:  "Cameras", value: 3, icon: 'camera', backgroundColor: '#fdd056'},
  {label:  "Games", value: 4, icon: 'gamepad-variant', backgroundColor: '#64cc8b'},
  {label:  "Clothing", value: 5, icon: 'shopping', backgroundColor: '#5abebb'},
  {label:  "Sports", value: 6, icon: 'basketball', backgroundColor: '#59a8ef'},
  {label:  "Movies & Music", value: 7, icon: 'music', backgroundColor: '#5180e4'},
  {label:  "Books", value: 8, icon: 'book-open-variant', backgroundColor: '#9e73e3'},
  {label:  "Other", value: 9, icon: 'crop-square', backgroundColor: '#7a8ca2'},



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
          width={300} 
        />


        <AppFormField
          maxLength={8}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          name="price"
          placeholder="Price"
          width={125}  
        />
        
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width={300} 
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
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
