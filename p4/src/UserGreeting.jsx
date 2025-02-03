

function UserGreeting(props){
    if(props.isLoggedIn){
        return <h1>WELCOME {props.username}</h1>
    }
    else{
        return<h2>Please log in to continue</h2>
    }

}

export default UserGreeting;