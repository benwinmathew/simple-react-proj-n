import Text from "./Text"
import React, { useState } from 'react';

function Top() {

  const [click, setClick] = useState(false);
  // console.log(click)

  function handleClick(prev) {
    setClick(!prev.target.value);
    console.log(click)
  }
  return <div>
      <button onClick={handleClick}>Click</button><br/><br/>
    
      {click && <Text />}
        </div>;
}

export default Top;
