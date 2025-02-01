import pf from './assets/pf1.jpg';

function Card(){
    return(
        <div className="card">
            <img className="ppf" src={pf} alt="Profile picture"></img>
            <h2 className='name'>NAHID NEYAZ</h2>
            <p className='des'>hello, I am happy!</p>
        </div>
    )
}

export default Card;