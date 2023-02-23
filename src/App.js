import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [UserInfo, setUserInfo] = useState({
    username: "Piyush Yadav",
    email: "",
    password: ""

  });

  const [active, setactive] = useState(false);


  const [Message,setMessage] = useState('Try it free 7 days then ₹180/mo. thereafter');

  function setmess(e)
    {
      setMessage('You have successfully subscribed to our plan ✓')
      setUserInfo({
        username: "Piyush Yadav",
    email: "",
    password: ""
      });
      setactive(false)
      e.preventDefault();

      
    }

    



  const Change = (item) => {
    const name = item.target.name;
    const value = item.target.value;
    console.log(name, value);
    setUserInfo({ ...UserInfo, [name]: value });//using bracket with name  so we can add dynamic , ...is destructuring,... represent the old values
  }

  const check=() => {
    for (const value in UserInfo) {
      if (UserInfo[value].length === 0) {
        return false;
      }
    }
    return true;
  }

  useEffect(()=>{
    if(check())
    {
      setactive(true)
    }
  },[UserInfo])





  return (
    <>
      <div className='container'>
        <h1 id='first'>Learn to code by</h1>
        <h1 id='second'>watching others</h1>
        <p id='third'>See how experienced developers solve problems in real-time.
          <br></br>
          Watching scripted tutorials is great, but understanding how
          <br></br>
          developers think is invaluable.
        </p>
        <p id='fourth'></p>
        <p id='fifth'></p>
        <div id='alert'>{Message}</div>
        <form className='myform'>

          <input type="text" autoComplete='off'
            value={UserInfo.username}
            onChange={Change}
            name='username' id='username' ></input>


          <input type="email" placeholder='Email Address' autoComplete='on'
            value={UserInfo.email}
            onChange={Change}
            name='email' id='email' required></input>


          <input type="password" placeholder='Password' autoComplete='off'
            value={UserInfo.password}
            onChange={Change}
            name='password' id='password'></input>



          <select id='select'>
            <option value="Choose Your Skills" id='one'>Choose Your Skills</option>

            <option value="CSS">CSS</option>

            <option value="HTML">HTML</option>

            <option value="Javascript">Javascript</option>

          </select>
          <div id='check1'>
            <div id='check11'>HTML
              <div id='check111'>x</div>
            </div>
            <div id='check12'>CSS
              <div id='check121'>x</div>
            </div>
            <div id='check13'>Javascript
              <div id='check131'>x</div>
            </div>

          </div>
          {active ? <button id='submit' onClick={setmess}>CLAIM YOUR FREE TRIAL</button> : <button id='button_disable'>CLAIM YOUR FREE TRIAL</button>}

          <div id='term'><p id='para'>By clicking the button you are agreeing to our <span><b>Terms and Services</b></span></p></div>






        </form>
      </div>
    </>
  );
}

export default App;
