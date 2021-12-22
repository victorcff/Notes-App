import React, { useState } from 'react';
import { TextInput, View } from 'react-native'
import { COLORS } from '../../Themes/colors';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';


export function NoteEditor(){
  const [ note, setNote ] = useState('')
  const [ title, setTitle ] = useState('')

  // const handleSaveNote = (title: string, note: string) => {
  //   dispatch(addNote(title, note))
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons 
          name='chevron-back'
          size={30}
          style={styles.backIcon}
          // onPress={handleSaveNote(title, note)}
        />
        <TextInput 
          style={styles.titleEditor}
          placeholder='Title'
          multiline={true}
          placeholderTextColor={COLORS.GRAY}
          onChangeText={text => setTitle(text)}
          value={title}
        />
      </View>
      <View style={styles.separator}></View>
      <TextInput 
        style={styles.noteEditor}
        placeholder='Write here...'
        placeholderTextColor={COLORS.GRAY}
        multiline={true}
        textAlignVertical='top'
        textAlign='left'
        onChangeText={text => setNote(text)}
        value={note}
      />
    </View>
  );
}