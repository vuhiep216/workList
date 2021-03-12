import React from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Works from '../../services/Works';
import { useState } from 'react/cjs/react.development';

function Item({ uri }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.img}></Image>
    </View>
  );
}

function WorkDetail({ navigation, route }) {
  const { idWork } = route.params;
  const [number, setNumber] = useState(0);
  const work = Works.filter((Item) => Item.id === idWork)[0];
  return (
    <View style={styles.container}>
      <Header
        onBack={() => navigation.goBack()}
        title='Work Detail'>
        </Header>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.item}>
            <Text style={styles.header}>Work</Text>
            <Text style={styles.info}>{work.name}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.header}>Detail</Text>
            <Text style={styles.info}>{work.details}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.header}>Date</Text>
            <Text style={styles.info}>{work.date}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default WorkDetail;
