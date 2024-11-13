import { useState } from 'react';

import './App.css'
import PostsList from './components/PostsList/PostsList'





function App() {

  const [ showModalState, setShowModalState ] = useState(false);

  function showModalHandler() {
    setShowModalState(true);
  }

  function hideModalHandler() {
    setShowModalState(false);
  }

  return (
    // react "fragment". You can also use <React.Fragment>
    <>
    <button onClick={showModalHandler}>new post</button>
      <PostsList showModalState={showModalState} hideModalHandler={hideModalHandler} />
    </>
  )
}

export default App
