import React, { useState } from 'react';

// import { Container } from './styles';

function FieldSet({onAddPost}) {

    const [addTitle, setAddTitle] = useState('');
    const [addBody, setAddBody] = useState('');

    const handleAdd = () => {
        if (addBody && addTitle) {
            onAddPost(addTitle, addBody);
        }
        else {
            alert('preencha!')
        }
    }

  return (
    <fieldset>
        <legend>Add New a Post</legend>

        <input type="text" value={addTitle} onChange={e => setAddTitle(e.target.value)}/>
        <textarea value={addBody} onChange={e => setAddBody(e.target.value)}></textarea>
        <button onClick={handleAdd}>ADD</button>
    </fieldset>
  );
}

export default FieldSet;