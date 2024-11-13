import { useState } from 'react';

import classes from './NewPost.module.scss';









function NewPost({ onCancel, onSubmit, onAddPost }) {

    const [ enteredAuthor, setEnteredAuthor ] = useState('');
    const [ enteredBody, setEnteredBody ] = useState('');

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const postData = {
            author: enteredAuthor,
            body: enteredBody
        };
        console.log(postData);
        onAddPost(postData);
        onCancel();
    }
    

    return (
        <form onSubmit={submitHandler}>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea required id="body" onChange={bodyChangeHandler}></textarea>
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button onClick={onSubmit}>Submit</button>
            </p>
        </form>
    );
}


export default NewPost;