import { useState } from 'react';

function Hello(){
    // const [name, setName] = useState('kob');

    // const changName = () => {
    //     setName('Top');
    // }

    // const [produce, setProduce] = useState(['java', 'php', 'c#', 'react', 'node.js']);

    const [name, setName] = useState('');

    const showName = () => {
        console.log(name);
    }


    return (
        <>
            {/* <h1>{name}</h1>
            <button onClick={changName}>click here</button> */}

            {/* {
                produce.length > 0 ? <div>มีข้อมูล</div> : <div>ไม่มีข้อมูล</div>
            }

            {produce.map(item => 
                <>
                    <div>Name is</div>
                    <div>{item}</div>
                </>
            )} */}

            <input type="text"  onChange={(e) => setName(e.target.value)} />
            <button onClick={showName}>
                Show Name
            </button>

        </>

    )
    
}

export default Hello;