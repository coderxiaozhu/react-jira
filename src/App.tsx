import React, { memo } from 'react';
import {
  Button
} from 'antd';
import { login } from './network/login';

const App = memo(() => {
  // state hook

  // other hook
  
  // binding Event
  const submitLoginInfo = () => {
    let testObj = {
      username: "xiaozhu",
      password: "123"
    }
    login(testObj)
    .then(res => {
      console.log(res);
    })
  }
  return (
    <div>
        <Button 
        type='primary'
        onClick={ e => submitLoginInfo() }
        >Primary Button</Button>
    </div>
  )
})

export default App