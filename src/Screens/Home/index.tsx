import React from 'react';
import { FlatList, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { AddButton } from '../../Components/AddButton';
import { HomeListItem } from '../../Components/HomeListItem';
import { SearchBar } from '../../Components/SearchBar';
import { idPicker, notePicker, titlePicker } from '../../Features/notePickerSlice';
import { addNote } from '../../Features/notesSlice';
import { useAppSelector } from '../../hooks';
import { styles } from './styles';

export function Home(){
  const notes = [
    {
      id: 1,
      title: 'Mercado',
      category: 'Lists',
      note: 'Fazer compras',
    },
    {
      id: 2,
      title: 'Manicure',
      category: 'Lists',
      note: 'Fazer unhas'
    },
    {
      id: 3,
      title: 'Limpeza',
      category: 'Lists',
      note: 'Limpar a casa'
    },
    {
      id: 4,
      title: 'Testes',
      category: 'Work',
      note: 'Fazer testes do app'
    },
    {
      id: 5,
      title: 'Auth',
      category: 'Work',
      note: 'Verificar a autenticação'
    }, 
    {
      id: 6,
      title: 'Reunião',
      category: 'Work',
      note: 'Reunião 10h'
    }, 
    {
      id: 7,
      title: 'Palestra',
      category: 'Work',
      note: 'Marcar palestra'
    },
    {
      id: 8,
      title: 'Notas',
      category: 'Ideas',
      note: 'Notas'
    }, 
    {
      id: 9,
      title: 'Market Place',
      category: 'Ideas',
      note: 'Market place'
    },
    {
      id: 10,
      title: 'Juice',
      category: 'Personal',
      note: 'Comprar juice'
    }, 
    {
      id: 11,
      title: 'Sapato',
      category: 'Personal',
      note: 'Comprar sapato'
    }, 
    {
      id: 12,
      title: 'Build Vape',
      category: 'Personal',
      note: 'Buildar o vape'
    }, 
    {
      id: 13,
      title: 'Guarda-roupa',
      category: 'Personal',
      note: 'Arrumar armário'
    }, 
    {
      id: 14,
      title: 'Carro',
      category: 'Personal',
      note: 'Levar o carro para o conserto'
    },
  ]

  const dispatch = useDispatch()

  const handleAddNote = () => {
    dispatch(idPicker())
    dispatch(titlePicker(''))
    dispatch(notePicker(''))
    dispatch(addNote())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Notes</Text>
      <Text style={styles.subtitle}>{`${notes.length} notes`}</Text>
      <View style={styles.list}>
        <SearchBar 
          placeholder='Search for notes...'
        />
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