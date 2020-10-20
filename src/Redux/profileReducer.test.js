import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "My first post!", likesCount: 5}
    ]
};
test('length of posts should be incremented', () => {
    let action = addPost('new post txt'),
        newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});
test('message of new post should be correct', () => {
    let action = addPost('new post txt'),
        newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe('new post txt');
});
test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1),
        newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});
test('after deleting length of messages shouldn\'t be decrement if id is incorrect', () => {
    let action = deletePost(100),
        newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});