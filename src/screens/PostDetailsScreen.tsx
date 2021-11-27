import React, { useEffect, FC } from 'react';
import { CommentsList } from '@app/components';
import { selectors as postsSelectors, thunks as postsThunks, reducer as PostsReducer } from '@app/state/posts';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootRoute, RootRouteNavigatorParams } from '@app/navigation/Routes';
import { RouteProp } from '@react-navigation/native';
import { ApplicationState } from '@app/state/store';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  commentsContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  titleContainer: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  bodyContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  spacing20: {
    marginBottom: 20,
  }
});

interface Props {
    route: RouteProp<RootRouteNavigatorParams, RootRoute.PostDetailsScreen>;
  }
  
const PostDetailsScreen: FC<Props> = ({ route: {
  params: { postId },
} }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(postsSelectors.isLoading);
  const post = useSelector(
    (state: ApplicationState & PostsReducer.PostsState) =>
      postsSelectors.postById(state, postId),
  );
  
  useEffect(() => {
    dispatch(postsThunks.getCommentsThunk(postId));
  }, [ dispatch ]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{post.title}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>{post.body}</Text>
      </View>
      <View style={[ styles.titleContainer, styles.spacing20 ]}>
        <Text style={styles.title}>Comments</Text>
      </View>
      <View style={styles.commentsContainer}>
        <CommentsList data={post.comments} />
        {isLoading && <ActivityIndicator animating size="large" color="primary" />}
      </View>
    </View>
  );
};

export default PostDetailsScreen;
