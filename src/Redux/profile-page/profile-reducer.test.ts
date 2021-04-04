import {ProfilePageType, profileReducer} from './profile-reducer';
import {addPostAC, removePostAC} from './profile-actions';

let state: ProfilePageType

beforeEach(() => {
    state = {
        posts: [{id: 1, message: 'Hi, how are you?', likesCount: 16},
            {id: 2, message: 'I\'m a programmer', likesCount: 56},
            {id: 3, message: 'It\'s my first post', likesCount: 3},],
        status: '',
        profile: null
    }
})

test('should be add post', function () {
    let newValue = 'Redux-react'

    const endState = profileReducer(state , addPostAC(newValue))

    expect(endState.posts.length === 4).toBe(true)
    expect(endState.posts[0].message).toBe(newValue)
});

test('removePostAC should be work', () => {

    const endState = profileReducer(state, removePostAC(3))

    expect(endState.posts.length === 2).toBe(true)
    expect(endState.posts[2]).toBe(undefined)
})