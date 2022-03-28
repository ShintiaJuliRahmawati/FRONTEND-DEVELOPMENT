const Card = (props) => {
    return ( 
        <div className="container mb-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{props.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Card;