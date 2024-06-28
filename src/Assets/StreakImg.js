import React from 'react'
import {View, Image} from 'react-native'
import tw from 'twrnc'

const StreakImg = ({ImageUrl}) => {
  return (
    <View style={tw`w-full h-[200px] rounded-lg bg-black mt-4 items-center`}>
        <Image source={{uri: ImageUrl}} style={tw`w-[200px] h-[200px]`} />
    </View>
  )
}

export default StreakImg