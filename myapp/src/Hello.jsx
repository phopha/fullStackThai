import { useState, useEffect } from 'react';

function Hello(){
    // const [name, setName] = useState('kob');

    // const changName = () => {
    //     setName('Top');
    // }

    // const [produce, setProduce] = useState(['java', 'php', 'c#', 'react', 'node.js']);

    // const [name, setName] = useState('');

    // const showName = () => {
    //     console.log(name);
    // }

    // const [value, setValue] = useState('100');

    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     console.log('start page');
    // }, []);

    useEffect(() => {
        console.log('start page');
    }, [items]);

    const newItem = () => {
        setItems([ 1, 3, 5, 7, 9]);
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

            {/* <input type="text"  onChange={(e) => setName(e.target.value)} />
            <button onClick={showName}>
                Show Name
            </button> */}

            {/* <select>
                <option value="100">JAVA</option>
                <option value="200">PHP</option>
                <option value="300">Node.js</option>
            </select>
            <div>
                {value}
            </div> */}

            {/* <input type="checkbox" onClick={e => setValue(e.target.checked)}/> Agree
            {value ? <div>Checked</div> : <div>UnChecked</div>} */}

            {/* <div>useEffect example</div>
            <button onClick={newItem}>
                Add Item
            </button> */}

            <div style={{backgroundColor: 'red', color: 'white', padding: '20px'}}>Hello</div>
        </>

    )
    
}

export default Hello;