import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
      <Link href="/(auth)/sign-in" className="p-3 m-2 bg-primary text-white rounded">Login</Link>
    </View>
  )
}

export default Signup