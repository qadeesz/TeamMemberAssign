import TeamMembersCard from './TeamMembersCard'

const TeamMembers = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
  return (
    <TeamMembersCard employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
  )
}

export default TeamMembers