import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    email: string;
    body: string;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden'
  },
  emailContainer: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  bodyContainer: {
    backgroundColor: '#e8e8e8',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  email: {
    fontSize: 15,
    fontWeight: '500',
  }
});

const Comment: FC<Props> = ({ email, body }) => (
  <View style={styles.container}>
    <View style={styles.bodyContainer}>
      <Text>
        {body}
      </Text>
    </View>
    <View style={styles.emailContainer}>
      <Text style={styles.email}>
        {email}
      </Text>
    </View>
  </View>
);

export default Comment;
