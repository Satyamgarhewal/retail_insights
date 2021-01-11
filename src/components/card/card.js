import { React } from 'react';

const Card = (props) => {
  return (
    <div className="card col-md-3 ml-5 mr-4 float-auto mt-4   border-dark mb-5">
      <div className="card-body">
        <img src={props.poster} class="card-img-top" alt="..." />
        <div className="row">
          <h5 className="card-title  mt-2 mr-5">{props.title}</h5>

          <p className="card-text">{props.plot}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
