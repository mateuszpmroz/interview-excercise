import { Post } from '@app/types';
import React, { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from './Card';

interface Props {
    data: Post[];   
    onEndReached: () => void;
    onPostPress: (postId: number) => void;
}

const styles = StyleSheet.create({
  postContaier: {
    marginBottom: 20
  }
});

const PostsList: FC<Props> = ({ data, onEndReached, onPostPress }) => (
  <FlatList
    data={data}
    ItemSeparatorComponent={() => <View style={styles.postContaier} />}
    renderItem={({ item }) => <Card title={item.title} body={item.body} onPress={() => onPostPress(item.id)} />}
    keyExtractor={item => item.id + item.title}
    onEndReached={onEndReached}
    onEndReachedThreshold={0}
  />
);

export default PostsList;

