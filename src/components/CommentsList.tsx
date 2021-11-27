import { Comment } from '@app/types';
import React, { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CommentComponent from './Comment';

interface Props {
    data: Comment[];   
}

const styles = StyleSheet.create({
  postContaier: {
    marginBottom: 20
  }
});

const CommentsList : FC<Props> = ({ data }) => (
  <FlatList
    data={data}
    ItemSeparatorComponent={() => <View style={styles.postContaier} />}
    renderItem={({ item }) => <CommentComponent body={item.body} email={item.email} />}
    keyExtractor={item => item.id + item.email}
  />
);

export default CommentsList;

