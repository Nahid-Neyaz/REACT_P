

function ProfilePic(){
    const imageUrl='./src/assets/p.jpg';
// const handleClick =()=>{
//     console.log('Ouch!');
// }

const handleClick=(event) => event.target.style.display="none";


    return (
        <img onClick={(event) => handleClick(event)} src={imageUrl}></img>
    )

}

export default ProfilePic


/* click event is an interaction when a user clicks on a specific element.
        we can respond to clicks by passing.
        a callback to the onClick event handler */

