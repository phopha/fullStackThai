import { useState, useEffect } from 'react';
import './Hello.css';
// import MyComponent from './components/MyComponent';
// import dayjs from 'dayjs';
import axios from 'axios';
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

    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     console.log('start page');
    // }, []);

    // useEffect(() => {
    //     console.log('start page');
    // }, [items]);

    // const newItem = () => {
    //     setItems([ 1, 3, 5, 7, 9]);
    // }

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    
    // const [user, setUser] = useState({});
    // const [income, setIncome] = useState(1e9);

    // const handleSignIn = () => {
    //     console.log(user);
    // }

    // const [payDate, setPayDate] = useState(new Date());

    const getMethod = async () => {
        try {
            await axios.get('http://localhost:3001/book/orderBy');
        } catch(e){
            console.log(e);
        }
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

            {/* 
            <div style={{backgroundColor: 'red', color: 'white', padding: '20px'}}>Hello</div> */}
            {/* <div className='bg-danger text-white p-4'><i className='fa fa-home'></i> Hello</div>
            <MyComponent name='Tavon' age={39}/> */}

            {/* <div className="constainer p-5">
                <div>
                    <div>Name</div>
                    <input type="text" className="form-control" onChange={e => setUser({...user, name: e.target.value})}/>
                </div>
                <div className="mt-3">
                    <div>Email</div>
                    <input type="text" className="form-control" onChange={e => setUser({...user, email: e.target.value})}/>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleSignIn}>
                    <i className="fa fa-check me-2"></i>
                    Sign In
                </button>
            </div> */}

            {/* <div>
                {parseInt(income).toLocaleString('th-TH')}
            </div> */}

            {/* <div>
                {dayjs(payDate).format('DD/MM/YYYY')}
            </div> */}

           

            <div>
                <button className="btn btn-primary" onClick={getMethod}>
                    Call API Get Method
                </button>
            </div>
        </>

    )
    
}

export default Hello;