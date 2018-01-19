import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = (props) => {
  return (
    <nav className="navbar navbar-inverse"> 
        <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">BucketList</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-log-in" > Login</span></a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-user" > Register</span></a></li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Header;