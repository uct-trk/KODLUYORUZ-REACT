import React from "react";
import "./Card.css";

import { Component } from 'react'




export default class Card extends Component {

  state = { isLiked: false }

  show = () => {
    this.setState({ isLiked: !this.state.isLiked })
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="profile">
            <span className="letter">{this.props.author[0]}</span>
          </div>
          <div className="card-title-group">
            <h5 className="card-title">{this.props.baslik}</h5>
            <div className="card-date">{this.props.tarih}</div>
          </div>
        </div>
        <img className="card-image" src={this.props.food} alt="Logo" />
        <div className="card-text">{this.props.desc}</div>
        <div className="card-like-bar" onClick={this.show}>
          {this.state.isLiked ? (
            <img className="card-like-icon" src={this.props.kalp} alt="Logo" />
          ) : (
            <img className="card-like-icon" src={this.props.noKalp} alt="Logo" />
          )}
          <div className="like-text">
            <b>{this.props.begeni}</b> {this.liked}
          </div>
        </div>
      </div>
    );
  }
}