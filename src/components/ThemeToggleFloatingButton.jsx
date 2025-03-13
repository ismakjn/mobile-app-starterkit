import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons, Octicons} from "@expo/vector-icons";
import {useColorScheme} from "nativewind";

const ThemeToggleFloatingButton = () => {
  const {colorScheme, setColorScheme} = useColorScheme();

  function toggleSchema () {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <TouchableOpacity className={'p-5 absolute bottom-4 right-4 bg-blue-700/80 rounded-full'} onPress={toggleSchema}>
      {colorScheme === 'dark' && <Octicons name="sun" size={20} color="white"/>}
      {colorScheme !== 'dark' && <Ionicons name="moon-outline" size={20} color="white"/>}
    </TouchableOpacity>
  )
}
export default ThemeToggleFloatingButton
