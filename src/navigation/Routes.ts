export enum RootRoute {
    PostListScreen = 'PostListScreen',
    PostDetailsScreen = 'PostDetailsScreen',
}

export type RootRouteNavigatorParams = {
    [RootRoute.PostListScreen]: undefined;
    [RootRoute.PostDetailsScreen]: {
        postId: number;
    }
}

export type RootRouteValues = RootRoute.PostListScreen | RootRoute.PostDetailsScreen;
