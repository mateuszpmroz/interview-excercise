import React, { useEffect, FC } from 'react';
import { PostsList } from '@app/components';
import { selectors as postsSelectors, thunks as postsThunks } from '@app/state/posts';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootRoute, RootRouteNavigatorParams } from '@app/navigation/Routes';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 30,
  },
});

interface Props {
    navigation: NativeStackNavigationProp<RootRouteNavigatorParams, RootRoute.PostListScreen>;
  }
  
const PostListScreen: FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const postsArray = useSelector(postsSelectors.postsArray);
  const isLoading = useSelector(postsSelectors.isLoading);
  const startIndex = useSelector(postsSelectors.startIndex);
  const isLastPostLoaded = useSelector(postsSelectors.isLastPostLoaded);

  useEffect(() => {
    dispatch(postsThunks.getPostsThunk(startIndex));
  }, [ dispatch ]);

  const handleOnEndReached = () => !isLastPostLoaded && dispatch(postsThunks.getPostsThunk(startIndex));

  const onPostPress = (postId: number) => navigation.navigate(RootRoute.PostDetailsScreen, {
    postId,
  });
  
  return (
    <View style={styles.container}>
      <PostsList data={postsArray} onEndReached={handleOnEndReached} onPostPress={onPostPress} />
      {isLoading && <ActivityIndicator animating size="large" color="primary" />}
    </View>
  );
};

export default PostListScreen;
