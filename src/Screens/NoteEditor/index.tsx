import React, { useState } from 'react';
import { TextInput, View } from 'react-native'
import { COLORS } from '../../Themes/colors';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { notePicker, titlePicker, updateNote } from '../../Features/notePickerSlice';
import { useAppSelector } from '../../hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../routes';

type Props = NativeStackScreenProps<MainStackParamList, 'NoteEditor'>;

export function NoteEditor({navigation}: Props){
  const [ note, setNote ] = useState('')
  const [ title, setTitle ] = useState('')

  const dispatch = useDispatch()

  const id = useAppSelector(state => state.notePicker.noteId)

  const handleSaveNote = () => {
    dispatch(titlePicker(title))
    dispatch(notePicker(note))
    dispatch(updateNote(id))
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons 
          name='chevron-back'
          size={30}
          style={styles.backIcon}
          onPress={handleSaveNote}
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