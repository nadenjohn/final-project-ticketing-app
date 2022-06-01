import React, {useState} from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'

   
function Signup( {setUser, user} ) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword=(e) => {
        setPassword(e.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        const user = {
        username: username,
            password: password
        }

        console.log(user)
       
        
        fetch ('/users', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"},
                body:JSON.stringify(user)
                
            })
            .then(res => res.json())
        
            .then (user => setUser(user))

    
    }
        

return (
<>
   
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
 
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={username} 
                  placeholder="Enter username here..." 
                    onChange={handleUsername}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  
                  value={password} 
                placeholder="Enter password here..." 
                onChange={handlePassword}
                />
              </div>
            </div>

            

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
       

export default Signup;

{/* <h2>Signup</h2>
  <form onSubmit={onSubmit}>
        <div className="row">
          <div className="six columns">
            <label>Username</label>
            <input className="u-full-width" type="text" value={username} placeholder="Enter username here..." id="exampleEmailInput" onChange={handleUsername}/>
          </div>
          <div className="six columns">
            <label >Password</label>
            <input className="u-full-width" value={password} type="password"  id="exampleEmailInput" placeholder="Enter password here..." onChange={handlePassword}/>
          </div>
        </div>
        <div>Welcome</div>
    <input className="button-primary" type="submit" value="Submit"/>
  </form>
  
  </> */}