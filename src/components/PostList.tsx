import { Post } from '@app/types';
import React, { FC, useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from './Card';

interface Props {
    data: Post[];   
    onEndReached: () => void;
    onPostPress: (postId: number) => void;
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20
  }
});

const PostList: FC<Props> = ({ data, onEndReached, onPostPress }) => {
  const renderItem = useCallback(({ item }) => <Card title={item.title} body={item.body} onPress={() => onPostPress(item.id)} />, []);
  const keyExtractor = useCallback((item) => item.id.toString(), []);
  const itemSeparatorComponent = () => <View style={styles.postContainer} />;
  
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={itemSeparatorComponent}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0}
    />
  );
};

export default React.memo(
  PostList
);

