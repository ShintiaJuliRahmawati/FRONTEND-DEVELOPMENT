const Card = ({gambar, title, content}) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={gambar} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  );
}

export default Card;