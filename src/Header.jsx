const Header = ({ teamMemberCount, selectedTeam }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-sm-8 text-center">
          <h1>Team member allocation</h1>
          <h3>{selectedTeam} has {teamMemberCount} Members</h3>

        </div>
      </div>
    </header>
  )
}

export default Header