// props-> read only properties that are shared between components.
//         A parent component can pass properties to a child (nested) component.
//         <Component key = "value" />

/* Prop types:- a mechanismthat ensures that the passed value is of the correct
datatype. 
age:PropTypes.number */

/* Default props:- a mechanism that allows you to set default values for props.*/

// import Student from './Student'
// function App() {
//   return(
//     <>
//     <Student name="HIPPO" age={12}  isStudent={true}/>
//     <Student name="FLAMINGO" age={22}  isStudent={false}/>
//     <Student name="icecream" age={2}  isStudent={true}/>
//     <Student name="cake" age={28}  isStudent={false}/>
//     <Student/>
//     </>
//   )
// }

// export default App

import UserGreeting from "./UserGreeting"

function App() {
  return(
    <>
    <UserGreeting isLoggedIn={ture} username="NN2906"/>
    </>
  )
}

export default App