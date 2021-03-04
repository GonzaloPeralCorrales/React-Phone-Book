import React, { useState } from 'react';

function PhoneBookForm ({ onChangeFisrtName,  onChangeLastName, onChangePhone, addEntryToPhoneBook }) {

    return(

    <form onSubmit={e => { e.preventDefault() }}>
    <label>First name:</label>
    <br />
    <input 
    className='userFirstname'
    name='userFirstname' 
    type='text'
    onChange={onChangeFisrtName}
  />
    <br/>
    <label>Last name:</label>
    <br/>
    <input 
    className='userLastname'
    name='userLastname' 
    type='text' 
    onChange={onChangeLastName}
    />
    <br/>
    <label>Phone:</label>
    <br />
    <input
    className='userPhone' 
    name='userPhone' 
    type='text'
    onChange={onChangePhone}
    />
    <br/>
    <input 
    className='submitButton'
    type="submit" 
    value='Add user' 
    onClick={ addEntryToPhoneBook }
    />
    </form>
    );
}

function InformationTable (props) {
   return(
    <table>
        <thead>
        <tr>
           <th>Name</th>
           <th>Surname</th>
           <th>Phone</th>
        </tr>
        </thead>
        <tbody>
            {props.data.map(item => (
            <tr key={item.userPhone}>
                <td>{item.userFirstname}</td>
                <td>{item.userLastname}</td>
                <td>{item.userPhone}</td>
            </tr>
            ))}
        </tbody>
    </table>
    );

} 
function Application (props)  {

    const [ data, setData]= useState([]);
    const [userFirstname, setUserFirstName] = useState("");
    const [userLastname, setUserLastName] = useState("");
    const [userPhone, setUserPhone] = useState("");

    return (
        <>
        <PhoneBookForm
        onChangeFisrtName = { e=> {setUserFirstName(e.target.value)}}
        onChangeLastName={e => {setUserLastName(e.target.value)}} 
        onChangePhone={e => {setUserPhone(e.target.value)}} 
        addEntryToPhoneBook= {()=>{
        if (userFirstname && userLastname && userPhone){
            const record = {userFirstname, userLastname, userPhone}
            setData([...data,record])
        } 
        else {console.log("empty field.")}
       }}/>
        <InformationTable data={data}/>
         </>
    );
}
export default Application;