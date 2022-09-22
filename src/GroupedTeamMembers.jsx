import { useState, useEffect } from 'react';


const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter(e => e.teamName === 'TeamA');
    var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam == "TeamA" ? true : false }
    teams.push(teamA);

    var teamBMembers = employees.filter(e => e.teamName === 'TeamB');
    var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam == "TeamB" ? true : false }
    teams.push(teamB);

    var teamCMembers = employees.filter(e => e.teamName === 'TeamC');
    var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam == "TeamC" ? true : false }
    teams.push(teamC);

    var teamDMembers = employees.filter(e => e.teamName === 'TeamD');
    var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam == "TeamD" ? true : false }
    teams.push(teamD);

    console.log(teams)
    return teams

  }

  function handelTeamClick(e) {
    var transformGroupedData = groupedEmployees.map(groupData => groupData.team === e.currentTarget.id
      ? { ...groupData, collapsed: !groupData.collapsed }
      : groupData);

    setGroupedData(transformGroupedData)
    setTeam(e.currentTarget.id)
  }

  console.log(groupedEmployees)
  return (
    <main className="container">
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className="card mt-2" style={{ cursor: 'pointer' }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handelTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? '' : 'collapse'}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div key={member.id}>
                        <h5 className="mt-2 card-title">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p className="mt-2 card-text">Designation: {member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default GroupedTeamMembers