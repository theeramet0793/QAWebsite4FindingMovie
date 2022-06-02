

const Login = () =>{
    return (
            <div>
                <h2>Login Form</h2>
                <form className="login-form">
                    <div class="imgcontainer">
                        <img class="avatar-login" src="/image/profile.jpg" alt="Avatar" ></img>
                    </div>

                    <div class="container-login">
                        <label for="uname"><b>Username</b></label>
                        <div classname="login-username">
                            <input type="text" placeholder="Enter Username" name="username" required ></input>
                        </div>
                        
                        <div classname="login-password">
                            <label for="psw"><b>Password</b></label>
                            <div >
                                <input type="password" placeholder="Enter Password" name="psw-login" required classname="input-login-password"></input>
                            </div>
                        </div>
                            
                        <button type="submit" className="btn-submit-login">Login</button>
                    </div>

                    <div class="container-button" >
                        <button type="button" class="cancelbtn-login">Cancel</button>
                        <span class="password-login">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
    )
}

export default Login;