import React, { useCallback, useEffect, useState } from 'react';

import './App.css';
import FieldSet from './Components/FieldInputs';
import { api } from './Services/api';

function App() {

  const [posts, setPosts] = useState([]);
  

  const loadData = useCallback(async () => {
      const data = await api.getPosts();
      setPosts(data);
  },[])

  useEffect(() => {
    loadData();
  }, [loadData])

  // const addNewPost = async(tittle, body, userId) => {
  //   try {
  //     if (addBody && addTitle) {
  //       let { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', {
  //         body: JSON.stringify({
  //           title: addTitle,
  //           body: addBody,
  //           userId: 1, // usuário 1
  //         }),
  //         headers: {'Content-Type':'application/json'}
  //       });

  //       console.log(data);
  //     }
  //     else {
  //       alert('Preencha os dados!')
  //     }
  //   } catch (error) {
      
  //   }
  // }

  const addNewPost = async(title, body) => {
      const data = await api.sendPost(title, body, 1);
      console.log(data)
      if (data.id) {
        alert('add com sucesso!')
      }
      else {
        alert('Ocorreu um erro!')
      }
  }

  return (
    <>
      {posts.length > 0 ? 
        <div>
          {posts.map((post, index) => (
            <div key={index}>
                <h4>{post.title}</h4>
                <small>#{post.id} - Usuário: {post.userId}</small>
                <p>{post.body}</p>
            </div>
          ))}
        </div>
      : 
        <p>Não Há Posts No momento</p>
      }
      <FieldSet onAddPost={addNewPost}/>
    </>
  );
}

export default App;