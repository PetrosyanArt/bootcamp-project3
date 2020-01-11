import React from "react";

function CardDetail(props) {
  console.log(props.theBeer);
  return (
    <div onClick={props.onClose} className="card" style={{minHeight:"80%", width: "70%", marginTop:"50px", margin: "auto" }}>
      {/* <img src={props.theBeer.labels.medium} className="card-img-left" alt="..."/> */}
      <div className="card-body">
        <img className="card-img-top" src={ props.theBeer.labels && props.theBeer.labels.medium 
          ? props.theBeer.labels.medium 
          : 'https://images.pexels.com/photos/105017/pexels-photo-105017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} 
          alt="Card image cap" style={{ objectFit: "cover", width: 400, textAlign: "center" }} />
        <hr/>
        <h5 className="card-title" style={{ fontSize: 30, color: "#ff6961", paddingTop: 10 }}>{props.theBeer.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted" style={{ paddingTop: 10 }}>{props.theBeer.style.description}</h6>
        <p className="card-text" style={{ paddingTop: 10 }}></p>
        <a className="card-link" style={{ paddingTop: 10 }}>
          ABV: {props.theBeer.abv}
        </a>
        <a className="card-link">
          Creation Date: {props.theBeer.style.category.createDate}
        </a>
      </div>
      <hr/>
      <p className="card-text" style={{ marginLeft: 20, paddingTop: 15 }}><b>BeerGuy2020</b><br/><i style={{ fontWeight: 200 }}>January 5, 2020</i><br/>This beer was just okay. 5/10</p>
      <hr/>
      <p className="card-text" style={{ marginLeft: 20, paddingTop: 15, paddingBottom: 25 }}><b>OptimisticDranker</b><br/><i style={{ fontWeight: 200 }}>December 25, 2019</i><br/>Wow wow, this beer was so amazing! I always want to drink it! 10/10</p>

    </div>
  );
}

export default CardDetail;