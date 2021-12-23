import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { AddButton } from '../../Components/AddButton';
import { HomeListItem } from '../../Components/HomeListItem';
import { SearchBar } from '../../Components/SearchBar';
import { idPicker, notePicker, titlePicker, addNote, getId, INotes } from '../../Features/notePickerSlice';
import { useAppSelector } from '../../hooks';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<MainStackParamList, 'Home'>;

export function Home({navigation}: Props){
  const notes = useAppSelector(state => state.notePicker.notes)

  const dispatch = useDispatch()

  const handleAddNote = () => {
    dispatch(idPicker())
    dispatch(titlePicker(''))
    dispatch(notePicker(''))
    dispatch(addNote())
    navigation.navigate('NoteEditor')
  }

  async function saveNotes() {
    try {
      const jsonValue = JSON.stringify(notes)
      await AsyncStorage.setItem('@notesApp' ,jsonValue)
    }
    catch(e){
      alert(e)
    }
  }

  async function getNotes() {
    try {
      const value = await AsyncStorage.getItem('@notesApp')
      if(value !== null){
        const notesJson = JSON.parse(value)
        notesJson.map((item: INotes) => {
          dispatch(getId(Number(item.id)))
          dispatch(titlePicker(item.title))
          dispatch(notePicker(item.note))
          dispatch(addNote())
        })
      }
    }
    catch(e) {
      alert(e)
    }
  }

  useEffect(() => {
    saveNotes()
  }, [notes])

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Notes</Text>
      <Text style={styles.subtitle}>{`${notes.length} notes`}</Text>
      <SearchBar 
          placeholder='Search for notes...'
        />
      <View style={styles.list}>
        {
          notes.length == 0 ?
          <Text style={styles.noNotesMessageFirst}>
            No notes yet!
          </Text>
          :
          <FlatList 
            data={notes}
            keyExtractor={item => String(item.id)}
            numColumns={2}
            renderItem={({item}) => (
              <HomeListItem
                title={item.title} 
                id={item.id}
                icon='note'
                note={item.note}
              />
            )}
          />
        }
      </View>
      <View style={styles.addButton}>
        <AddButton 
          icon='add'
          onPress={handleAddNote}
        />
      </View>
    </View>
  );
}