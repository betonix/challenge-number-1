import React, { Component } from 'react';

const Header = props => (
  <div>
    <div className="post-header">
      <img className="foto" src={props.post.avatar} />
      <div className="items">
        <p className="nome">{props.post.nome}</p>
        <p className="hora">{props.post.hora}</p>
      </div>
    </div>
    <hr />
  </div>
);

export default Header;
