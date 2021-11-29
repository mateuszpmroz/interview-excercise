import { Comment } from '@app/types';
import React, { FC, useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CommentComponent from './Comment';

interface Props {
    data: Comment[];   
}

const styles = StyleSheet.create({
  commentContainer: {
    marginBottom: 20
  }
});

const CommentList : FC<Props> = ({ data }) => {
  const renderItem = useCallback(({ item }) => <CommentComponent body={item.body} email={item.email} />, []);
  const keyExtractor = useCallback((item) => item.id.toString(), []);
  const itemSeparatorComponent = () => <View style={styles.commentContainer} />;

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={itemSeparatorComponent}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default React.memo(
  CommentList
);
