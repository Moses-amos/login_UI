import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-full w-full">
        <StatusBar style="light" />
        <Image className="h-full w-full absolute" source={require('../assets/background.jpg')} />
        
        {/* Lights */}
        {/* <View className="flex-row justify-around w-full absolute">
            <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[225] w-[90]" source={require('../assets/light.png')} />
            <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className="h-[160] w-[65]" source={require('../assets/light.png')} />
        </View> */}

        {/* Title and form */}
        <View className='h-full w-full justify-around pt-40 pb-10'>
         {/* Title */}
          <View className='flex items-center'>
          <Animated.Text entering={FadeInUp.duration(1000).springify()} className='text-white font-bold tracking-wider text-5xl 
          text-shadow text-shadow-amber-800 '>
            login
          </Animated.Text>
          </View>

          {/* form */}
          <View className='flex items-center pt-10  mx-4 space-y-4'>
           <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/10 p-5 rounded-2x1 w-full">
          <TextInput placeholder='Email' placeholderTextColor={'black'} />
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/10 p-5 rounded-2xl w-full">
          <TextInput placeholder='Enter your password' placeholderTextColor={'black'} secureTextEntry />
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="flex mb-4">
          <TouchableOpacity >
            <Text className="font-semibold" onPress={() => navigation.push('forgot-password')}>Forgot Password?</Text>
          </TouchableOpacity>
          </Animated.View>
          
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="w-full">
            <TouchableOpacity 
            className="w-full bg-emerald-700 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-semibold text-white text-center">login</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="flex-row">
            <Text classNam="font-semibold">Don't have an account: </Text>
            <TouchableOpacity onPress={() => navigation.push('signup')}>
              <Text className="text-emerald-900 font-semibold">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
          </View>
          
        </View>



    </View>
  )
}