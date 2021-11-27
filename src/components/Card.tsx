import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    title: string;
    body: string;
    onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden'
  },
  titleContainer: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  bodyContainer: {
    backgroundColor: '#e8e8e8',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

const Card: FC<Props> = ({ title, body, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
    <View style={styles.bodyContainer}>
      <Text>
        {body}
      </Text>
    </View>
  </TouchableOpacity>
);

export default Card;
