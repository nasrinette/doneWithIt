import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageInputList from '../lists/ImageInputList';
import { useFormikContext } from "formik";
import ErrorMessage from './ErrorMessage';

export default function ImageInputListForm({name, ...otherProps}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const images = values[name];
  const handleAdd = (uri)=>{
    setFieldValue(name, [...images, uri])
  }

  const handleRemove = uri =>{
    setFieldValue(name, images.filter(image=> image !== uri))
  }

  return (
   <>
   <ImageInputList
   style={{backgroundColor: 'red'}}
   imageUris={images} 
   onAddImage={handleAdd} 
   onRemoveImage={handleRemove}
   {...otherProps} />
    <ErrorMessage error={errors[name]} visible={touched[name]} />


   </>
  )
}

const styles = StyleSheet.create({})