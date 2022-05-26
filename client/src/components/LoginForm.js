import React, {useState} from 'react'

function LoginForm( {handleLogin, user} ){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState([])

 

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
            localStorage.setItem("token", data.jwt)
        
            console.log(data.user)

        })
    } else {
        resp.json()
        .then(json => setError(json.error))
    }
    })

}
    
   
 
  
    return(
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
        <div>Welcome, {user.username}</div>
    <input className="button-primary" type="submit" value="Submit"/>
  </form>
    )
} 

export default LoginForm