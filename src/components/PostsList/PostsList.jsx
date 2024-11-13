import { useState } from 'react';

import Post from './Post/Post'
import NewPost from './NewPost/NewPost'
import Modal from '../Modal/Modal'


function PostsList({ showModalState, hideModalHandler }) {

    // const stateData = useState(''); // always returns an array with exactly 2 items.
    // stateData[0] // current value
    // stateData[1] // state updating function. when called, React also calls the component function again.

    
    const [ posts, setPosts ] = useState([{author: 'Gabe Newell', body: 'Thanks, and have fun!'}]);



    

    function addPostHandler(postData) {
        // when updating state based on its previous state value, don't do this.
        // setPosts([postData, ...posts]);

        // instead you wanna do the same thing, but use a function that will automatically be called by React.
        // The reason we do this is just because under the hood it's a safer way for React to update state based on its earlier state.
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }


    return (
        <>
        {showModalState && (
            <Modal onClose={hideModalHandler}>
                <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
            </Modal>
        )}
        {
            posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)
        }
            
        </>
    );
}


export default PostsList;