import './FindPin.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import NavBar from './NavBar';



const override = `
border: 8px solid #f3f3f3;
border-radius: 50%;
border-top: 8px solid #3498db;
width: 40px;
height: 40px;
-webkit-animation: spin 3s linear infinite; 
animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
0% { -webkit-transform: rotate(0deg); }
100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;


function FindPin() {
    let [color, setColor] = useState("#ffffff");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const [pincode, setPincode] = useState('');
    const [dateinp, setDateinp] = useState('');

   
    const fetchData = async()=>{
        console.log('fetch data')
    }

    console.log(pincode)
    console.log(dateinp)

    const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(184, 194, 236, 0.85)'
            },
    content : {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        margin:'10px',
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    }
  };
  
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  async function openModal(e) {
    e.preventDefault();

    try {
        setLoading(true)
        const arrayDate = dateinp.split("-");
        const revDate =arrayDate.reverse();
        const formatDate = revDate.join("-");    
        console.log('entered fetch '+ formatDate);
        const response = await axios.get('http://localhost:8080/findbypin',{
            params:{
                pin : pincode,
                date:formatDate
            }
        })
        console.log('exit axios')
        const hosName = response.data.sessions
        console.log(hosName)
        
        setData(hosName);
        setLoading(false);
        } catch (error) {
            console.error(error)
        }

    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }

  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div>
        <NavBar />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
          preventScroll={true}
        >
        <h1 >Vaccine Slots </h1>
        {data ? data.map((data1)=>{
           return <div>
            
            
            <h2 > Slots Availability ({data1 ? data1.date :'No Date'})</h2> <br />
            {data1.available_capacity_dose1 !==0 || data1.available_capacity_dose2 !==0 ? <div> <h5 style={{color:'#228B22'}}>Available dose1: {data1.available_capacity_dose1}</h5><br/><h5 style={{color:'#228B22'}}>Available dose2: {data1.available_capacity_dose2}</h5></div> : <h5 style={{color:'#ff0000'}}>Booked</h5>}
            <h5>Centre name:</h5> 
            <p>{data1 ? data1.name :'Not Available'}</p> 
            <h5>Centre Address:</h5> 
            <p> {data1 ? data1.address :'Not Available'}</p> 
            <h5>Slots Available:</h5> 
            <p>{data1? data1.slots.map((slot)=>{
                return slot
            }) :"Not Available"}</p> 
            <h5>Age Limit:</h5> 
            <p>{data1 ? data1.min_age_limit :'Not Available'}</p> 
            <h5>Vaccine Name:</h5> 
            <p>{data1 ? data1.vaccine :'Not Available'}</p>
            <a target="_blank" href="https://www.cowin.gov.in/home">Open Cowin</a>

            <button onClick={closeModal} style={{backgroundColor:'#00FF7F', borderRadius:'40px', border:'none', color:'white', margin:'16px',    padding: '15px 32px',fontSize:'16px'}}>close</button>
            <hr size="9" width="90%" color="black" />  

            </div>

        }) : <h1>Loading...</h1>}
        
        </Modal>


            <div id="second">
        <div className="container container1">
            <br />   <hr />      
            
            
            <div className="card bg-light">
            <article className="card-body mx-auto" >
                <h4 className="card-title mt-3 text-center">Find By PinCode</h4>
                <p className="text-center">You can also search for the current availability of the vaccines in your area.</p>
                
                <form onSubmit={ openModal}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                     </div>
                    <input name="" onChange={(e)=>setPincode(e.target.value)} className="form-control" placeholder="Pin Code" type="number" required/>
                </div> 
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                    </div>
                    <input name="" onChange={(e)=>setDateinp(e.target.value)} className="form-control" placeholder="dd-mm-yyyy" type="date" required/>
                </div> 
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                    </div>
                    <select className="form-control">
                        <option defaultValue=""> Select Age Group</option>
                        <option>18-45</option>
                        <option>45+</option>
                    </select>
                </div>                                      
                <div className="form-group">
                    <button type="submit" onClick={fetchData} className="btn sign_button btn-block" id="submitBtn1"> {loading ? <ClipLoader color={color} loading={loading} css={override} size={40} /> : 'Turn On Notifications' }
                    </button>
                </div>                                                                   
            </form>
            </article>
            </div> 
            
            </div> 
            
       
    </div>
        </div>
    )
}

export default FindPin
