import React from 'react';
import logo from './logo.svg';
import './App.css';

var arrow="<"
function App() {
  const employee = {
    name: 'Alan Walker',
    EmployeeID: '00005152'
  }
  const customerInfo ={
    AppointmentElement :'9:00 (24-02-2022)',
    email:'Alanwalker245@gmail.com',
    phone: '+3112847493904'
  }
  const orderInfo ={
    status: 'In-Progress',
    door: 'Mark',
    time: '10:30(25-02-2022)'
  }
  const productList ={
    proName: 'Software Developer',
    proDesc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy',
    profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='header-info'>
      <a className='arrow' id='up' href='#down'> {arrow} </a>
      <div className='middle'>
      <h3><strong>{employee.name}</strong></h3>
      <label>{employee.EmployeeID}</label>
      </div>
      <div className='print'>
      <button>Print</button>
      </div>
    </div>
    <div className='customer-info'>
      <p><strong>Appointment on</strong> {customerInfo.AppointmentElement}</p>
      <p><strong>Email :</strong> {customerInfo.email}</p>
      <p><strong>Phone :</strong> {customerInfo.phone}</p>
      </div>
    <div className='order-info'>
      <div className='status'>
        <label><strong>Status</strong></label>
        <ul>
          <li>
            {orderInfo.status}
          </li>
        </ul>
      </div>
      <div className='Door'>
        <label><strong>Door</strong></label>
        <p>{orderInfo.door}</p>
      </div>
      <div className='Time'>
        <label><strong>Time</strong></label>
        <p>{orderInfo.time}</p>
      </div>
    </div>
    <div className='product-list'>
    <input className='check' type='checkbox'></input>
    <img src ={productList.profileImg} width={100} height={100} alt="profile"/>
    <div className='profile'>
    <strong>{productList.proName}</strong>
    <p>{productList.proDesc}</p>
    </div>
    <a className='arrow' id='down' href='up'> <bdo dir="rtl">{arrow}</bdo></a>
    </div>
    </div>
  );
}

export default App;
