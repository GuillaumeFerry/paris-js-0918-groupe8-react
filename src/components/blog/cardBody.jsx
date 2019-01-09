import React from 'react';
import PropTypes from 'prop-types';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import femaleavatar from '../../assets/img/femaleA.png';
import Imagecover1 from '../../assets/img/neonbrand-618322-unsplash.jpg';
import './card.css';


const CardBody = ({
  title, content, firstname, lastname, id_article,
}) => (
  <div className="col s12 m6 l4">
    <div className="card hoverable">
      <div className="card-image">
        <img className="materialboxed" src={Imagecover1} alt="" />
      </div>
      <div className="card-content">
        <p className="left-align"><b>{title}</b></p>
        <hr />
        <p className="left-align">
          {`"
          ${content.slice(0, 150)}
          ..."`}
        </p>
        <br />
        <div className="card-action">
          <div className="row valign-wrapper">
            <div className="col s4">
              <NavLink exact to={{ pathname: `/blog/${title.toLowerCase()}`, state: { id: id_article } }}>
                <img src={femaleavatar} alt="" className="circle responsive-img" />
              </NavLink>
            </div>
            <div className="col s8">
              <span className="black-text left-align">
                <b>{`${firstname} ${lastname}`}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

CardBody.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  id_article: PropTypes.number.isRequired,
};

export default CardBody;
