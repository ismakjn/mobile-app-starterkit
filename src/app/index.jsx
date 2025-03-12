import {View, Text} from 'react-native'
import React, {useEffect} from 'react'
import {useColorScheme} from "nativewind";

const Home = () => {

  const {colorScheme, setColorScheme} = useColorScheme()

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
  //   }, 2000)
  //
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, [colorScheme]);


  return (
    <View className={'flex-1 p-4 items-center justify-center'}>
      <Text className={'text-4xl font-semibold text-gray-700 dark:text-gray-200'}>It works</Text>
    </View>
  )
}
export default Home
