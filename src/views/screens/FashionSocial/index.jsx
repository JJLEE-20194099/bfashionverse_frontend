import React from 'react'
import { ScrollView, View } from 'react-native';
import PostComponents from '../../../components/PostComponents';

export default function FashionSocial() {
  return (
    <ScrollView style={{marginTop: 3}}>
      <PostComponents />
      <PostComponents />
    </ScrollView>
  );
}
