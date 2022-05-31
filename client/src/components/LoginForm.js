import React, {useState} from 'react'

function LoginForm( {handleLogin, setUser} ){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const [error, setError] = useState([])
    const [errors, setErrors] =useState([])

 

    const onSubmit = (evt) => {
        evt.preventDefault()

        fetch(`/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify({
                username,
                password
            })
        })
        .then(resp => {
        
            if(resp.ok){
                resp.json()
                .then(data=>{
            localStorage.setItem("user", data.user);
            localStorage.setItem("token", data.token)
            handleLogin(data.user)
        
            console.log(data.user)
            console.log(localStorage)

        })
    } else {
        resp.json()
        .then(json => setError(json.error))
    }
    })

}


   
 
  
    return(
        <>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
        <div className="row">
          <div className="six columns">
            <label>Username</label>
            <input className="u-full-width" type="text" placeholder="Enter username here..." id="exampleEmailInput" onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="six columns">
            <label >Password</label>
            <input className="u-full-width" type="text"  id="exampleEmailInput" placeholder="Enter password here..." onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        <div>Welcome</div>
    <input className="button-primary" type="submit" value="Submit"/>
  </form>
  </>
    )
} 

export default LoginForm