import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Signin = () => {
  return (
    <View>
      <Text>Signin</Text>
      <Link href="/(auth)/sign-up" className="p-3 m-2 bg-primary text-white rounded">Create Account</Link>
    </View>
  )
}

export default Signin