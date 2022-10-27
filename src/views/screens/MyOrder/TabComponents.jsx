import React from 'react'
import { ScrollView, Text } from 'react-native'
import MyOrderItem from './MyOrderItem'

export default function TabComponents({name, id}) {
  return (
    <ScrollView>
        <MyOrderItem />
        <MyOrderItem />
        <MyOrderItem />
        <MyOrderItem />
        <MyOrderItem />
        <MyOrderItem />
    </ScrollView>
  )
}
