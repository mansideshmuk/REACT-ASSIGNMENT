import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee} = props;

  return (
    <div className="container">
      <div className="profile-image">
        <img src={employee.profileImg} width="100" height="100" alt="profile-image" />
      </div>
      <div className='title'>
        <h1>{employee.name}</h1>
      </div>
      <div className='profile-info'>
        <label>Location</label>
        <strong>{employee.location}</strong>
      </div>
      <div className='profile-info'>
        <label>Blood group</label>
        <strong>{employee.bloodGroup}</strong>
      </div>
      <div className='profile-info'>
        <lable>Age</lable>
        <strong>{employee.age}</strong>
      </div>
    </div>
  )
}



export default App;
