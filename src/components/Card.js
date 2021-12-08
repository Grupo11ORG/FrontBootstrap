const Card = () => {
  return (
     <div class="card bg-secondary" style={{ width: "250px;", marginTop: "50px", marginLeft: "35%", marginRight: "35%", marginBottom: "" }}>
      <img src="https://www.institutofagdut.org.ar/sites/default/files/styles/640x480/public/field/image/reparador_de_pc_3.jpg?itok=2Pi1kM5F" class="card-img-top" style={{ width: "250px", height: "250px", marginRight: "16%", marginLeft: "15%", marginTop: "5%" }} />
      <div class="card-body">
        <h3 class="card-title text-light text-center">Jose Sanchez</h3>
        <p class="card-text">Tecnico en reparacion de PC</p>
        <p class="card-text">5 años de experiencia. </p>
        <a href="#" class="btn btn-primary">Saber más!</a>
        <button class="btn btn-info btn-xs" style={{ marginLeft: "10px" }}><i class="glyphicon glyphicon-phone"></i> Tec</button>
      </div>
    </div>
  )
}

export default Card
