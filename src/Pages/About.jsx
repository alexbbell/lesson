import React, { Component, useState, useEffect }  from 'react';
const About = () => {


    const [res, setRes] = useState(null);

    useEffect(() => {
      return () => {
        setRes(longestCommonPrefix);

      };
    }, []);
    const longestCommonPrefix = (strs) => {
        strs = ["flower","flow","flight"]
        let result = null;
        
        for(let iStr in strs) {            
            if(strs[iStr])
            console.log(iStr);
        }

        return result;
    };

    return (
        <div>
            <h1>About me</h1>
            <p>
                <span>
                {longestCommonPrefix()}
                </span>
                <hr />
                This is the text about me
            </p>
        </div>
    )
}

export {About}
