// import { useState, useEffect } from 'react';
// import './Hello.css';
// import config from './config';

// import axios from 'axios';
function Hello(){
    // const deleteMethod = async () => {
    //     try{
    //         // await axios.post('http://localhost:3001/book/search', {
    //         //     keyword: 'basic'
    //         // })
    //         // await axios.put('http://localhost:3001/book/update/4')
    //         // await axios.delete('http://localhost:3001/orderDetail/remove/3')
    //         await axios.get(`${config.apiPath}/user/info`, config.headersValue)
    //     } catch(e){
    //         console.log(e);
    //     }
    // }
    // const [fileSelected, setFileSelected] = useState({});

    // const selectedFile = (fileInput) => {
    //     console.log(fileInput);
    //     if(fileInput !== undefined){
    //         if(fileInput.length > 0){
    //             setFileSelected(fileInput[0])
    //         }
    //     }
    // }

    // const uploadFile = async () => {
    //     try{
    //         const formData = new FormData();
    //         formData.append('myFile', fileSelected)
    //         console.log(formData);

    //         await axios.post(`${config.apiPath}/book/testUpload`, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         })

        
    //     }catch(e){
    //         console.log(e);
    //     }
    // }
    
    return (
        <>
        {/* <div>
            <input type="file" onChange={e => {selectedFile(e.target.files)
            console.log(e.target.files)
            }}/>
            <button className="btn btn-primary" onClick={uploadFile}>
                Call API
            </button> */}
            {/* <button className="btn btn-primary" onClick={deleteMethod}>
                Call API
            </button> */}
        {/* </div> */}

            <div className='row'>
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">Cell 1</div>
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">Cell 2</div>
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">Cell 3</div>
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">Cell 4</div>
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">Cell 5</div>
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">Cell 6</div>
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">Cell 7</div>
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">Cell 8</div>
            </div>
            
        </>

    )
    
}

export default Hello;