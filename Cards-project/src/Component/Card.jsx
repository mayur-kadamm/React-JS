

const Card = (props) => {
  return (
    <div>
      <div className="card">
       <div className="top">
          <div className="left">
            <img src={props.logo} alt="" />
          </div>

          <div className="right">
            <button>Save &#128190;</button>
          </div>
        </div>
          
        <div className="center">
          <h2>{props.companyName} <span>{props.ago}</span></h2>
          <h1>{props.jobPosition}</h1>
          <button>{props.tag01}</button>
          <button>{props.tag02}</button> 
          
        </div> 
       <hr />
        <div className="bottom">
      
            <div className="left">
              <h2>{props.amount}</h2>
              <p>{props.place}</p>
            </div>
            <div className="right"><button>Apply now</button></div>
        </div>
      

      </div>
    </div>
  )
}
export default Card