import React, { Component }  from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import './App.css';
import TodoList from './Components/TodoList';
import { useState } from 'react';
import { InputField } from './Components/InputField';
import { useDispatch } from 'react-redux';
import { addTodo} from './store/todoSlice';

import { Homepage} from './Pages/Homepage';
import { About } from './Pages/About';
import { Blog } from './Pages/Blog';
import { Createpage } from './Pages/Createpage';
import { Editpage } from './Pages/Editpage';
import { Singlepage } from './Pages/Singlepage';
import { Notfoundpage } from './Pages/Notfoundpage';
import { Layout } from './Components/Layout';
import { LoginPage } from './Pages/Loginpage';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';


function App() {

  // const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const dispatch = useDispatch(  );

  const addTask = () => {
    dispatch(addTodo( {text }));
    setText('');
  } 
  


  return (
    <div className="App">

      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="blog" element={<Blog />}></Route>
            <Route path="blog/:id" element={<Singlepage />}></Route>


            <Route path="blog/new" element={
              <RequireAuth>
                <Createpage />
              </RequireAuth>
            }></Route>
            <Route path="blog/:id/edit" element={<Editpage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>

            <Route path="*" element={<Notfoundpage />}></Route>
            <Route path="*" element={<Notfoundpage />}></Route>
          </Route>
        </Routes>



        <InputField text={text} setText={setText} addTodo={addTask}></InputField>
        <TodoList />
      </AuthProvider>
    </div>
  );
}

export default App;
