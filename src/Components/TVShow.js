import React from 'react';

const TVShow = (props) => {
  return (
    <div>
      <br/>
      <img src={props.show.medium} onClick={props.selectShow} alt=""/>
    </div>
  );
}

export default TVShow;
