import maleProfile from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'

const TeamMembersCard = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
  return (
    <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
      <img className='card-img-top'
        src={employee.gender === 'male' ? maleProfile : femaleProfile} />
      <div className='card-body'>
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">Designation: {employee.designation}</p>
      </div>
    </div>
  )
}

export default TeamMembersCard