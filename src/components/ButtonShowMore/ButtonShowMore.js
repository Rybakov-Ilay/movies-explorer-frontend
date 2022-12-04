import React from 'react';
import './ButtonShowMore.css';

function ButtonShowMore({showMore}) {
  return (
    <button
      onClick={showMore}
      className="movies__show-more-button"
      type="button"
    >Ещё</button>
  );
}

export default ButtonShowMore;
