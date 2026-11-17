import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Subscription Details: {id}</Text>
      <Link className='p-3 m-2 bg-primary text-white rounded' href="/subscription"> Go Back </Link>
    </View>
  )
}

export default SubscriptionDetails