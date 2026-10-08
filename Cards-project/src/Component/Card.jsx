

const Card = (props) => {
  return (
    <div>
      <div className="card">
       <div className="top">
          <div className="left">
            <img src="https://images.icon-icons.com/1195/PNG/512/1490889698-amazon_82521.png" alt="" />
          </div>

          <div className="right">
            <button>Save &#128190;</button>
          </div>
        </div>
          
        <div className="center">
          <h2>Amazon <span>5 Days Ago</span></h2>
          <h1>Senior UI/UX Designer</h1>
          <button>Part Time</button>
          <button>Senior Level</button> 
          
        </div>
       <hr />
        <div className="bottom">
      
            <div className="left">
              <h2>&#36;120</h2>
              <p>Mubai, India</p>
            </div>
            <div className="right"><button>Applu now</button></div>
        </div>
      

      </div>
    </div>
  )
}
export default Card