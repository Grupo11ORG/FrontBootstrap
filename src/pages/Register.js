import Container from "../layout/Container"

const Register = () => {
    return (
            <Container>
        <div data-aos="fade-up">

        <form className="container bg-primary " style={{marginBottom:"230px", paddingLeft:"15%", paddingRight:"15%"}}  id="register">
                <br/>
                <br/>
                <h1 style={{textAlign:"center"}}  >REGISTER</h1>
                <br/>
                <br/>
                <div class="form-group">
                    <label for="exampleInputName1">Name</label>
                    <input type="Text" class="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" placeholder="Name"/>
                    <small id="nameHelp" class ="form-text text-muted">Write your name</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputLastName1">LastName</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="lastnameHelp" placeholder="Lastname"/>
                    <small id="LastNameHelp" class ="form-text text-muted">Write your lastname</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputUserName1">Username</label>
                    <input type="text" class="form-control" id="exampleInputUserName1" aria-describedby="lastnameHelp" placeholder="Username"/>
                    <small id="UserNameHelp" class ="form-text text-muted">Write your username</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class ="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class ="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div>
                <br/>
                <button type="submit" class="btn btn-secondary">Submit</button>
                <br/>
                </div>
            {/* <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/> */}
            </form>
            </div>
            </Container>
    )
}

export default Register
