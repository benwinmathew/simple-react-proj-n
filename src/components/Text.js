import React, { useState } from 'react';

function Text() {
    const [click, setClick] = useState(false);
    const [name, setName] = useState('')
    const [job, setJob] = useState('')

    function handleClick(prev) {
        console.log(name);
        console.log(job);
        setClick(!prev.target.value)
    }
    return(
        <>
            Name<input onChange={(prev)=>setName(prev.target.value)}/> <br/>
            Job<input onChange={(prev)=>setJob(prev.target.value)} /><br/>
            <button onClick={handleClick}>Render</button>
            {click && (
                <div>
                    <p>{name}</p>
                    <p>{job}</p>
                </div>
                )}
        </>
    )
}

export default Text;