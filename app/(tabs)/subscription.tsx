import { Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind';
const SafeAreaView = styled(RNSafeAreaView)

const Subscription = () => {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text>Subscription</Text>
      <Link className='p-3 m-2 bg-primary text-white rounded' href={{ pathname: "/subscription/[id]", params: { id: "claude" } }}> Subscription claude </Link>
      <Link className='p-3 m-2 bg-primary text-white rounded' href={{ pathname: "/subscription/[id]", params: { id: "Gemini" } }}> Subscription Gemini </Link>
      <Link className='p-3 m-2 bg-primary text-white rounded' href="/subscription/YouTube"> Subscription YouTube </Link>
    </SafeAreaView>
  )
}

export default Subscription