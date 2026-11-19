import { Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind';
const SafeAreaView = styled(RNSafeAreaView)

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView className='bg-background flex-1 p-5'>
      <Text>Subscription Details: {id}</Text>
      <Link className='p-3 m-2 bg-primary text-white rounded' href="/subscription"> Go Back </Link>
    </SafeAreaView>
  )
}

export default SubscriptionDetails