const Footer = () => {

  const today = new Date();
  return (

       <footer className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-sm-8 text-center">
           
          <h5>Team Memeber Allocation App - {today.getFullYear()}</h5>

        </div>
      </div>
    </footer>
  )
}

export default Footer