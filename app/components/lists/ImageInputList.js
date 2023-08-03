import { FlatList, StyleSheet, View, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import ImageInput from '../ImageInput'
import Screen from '../Screen';

export default function ImageInputList({ imageUris, onAddImage, onRemoveImage }) {  
  const flatList = useRef();

  return (
    <Screen style={styles.container}> 
      {imageUris.length > 0 && 
      <FlatList
      style={{flexGrow:0}}
        ref={flatList}
        onContentSizeChange={() => flatList.current.scrollToEnd()}
        horizontal
        data={imageUris}
        keyExtractor={(uri) => uri.toString()}
        renderItem={({item: uri}) => (
          <ImageInput imageUri={uri} 
          onChangeImage={() => onRemoveImage(uri)} />
        )}
        ItemSeparatorComponent={() => <View style={{margin: 5}}></View>}
        showsHorizontalScrollIndicator={false}
      />}
   
      <View style={styles.image}>
            <ImageInput 
        onChangeImage={(uri) => onAddImage(uri)} 
      />
        </View>

    </Screen>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
  },
  image: {
    flexGrow: 1, 
    marginLeft: 10,
   
  }
})
