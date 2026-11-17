import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Subscription = () => {
  return (
    <View>
      <Text>Subscription</Text>
      <Link className='p-3 m-2 bg-primary text-white rounded' href={{ pathname: "/subscription/[id]", params: { id: "claude" } }}> Subscription claude </Link>
      <Link className='p-3 m-2 bg-primary text-white rounded' href={{ pathname: "/subscription/[id]", params: { id: "Gemini" } }}> Subscription Gemini </Link>
      <Link className='p-3 m-2 bg-primary text-white rounded' href="/subscription/YouTube"> Subscription YouTube </Link>
    </View>
  )
}

export default Subscription