const Card = () => {
  return (
    <>
   
   
  <div class="card mb-3 border border-primary" style={{maxwidth: "540px", marginLeft:"20%", marginRight:"20%", marginTop:"5%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://www.institutofagdut.org.ar/sites/default/files/styles/640x480/public/field/image/reparador_de_pc_3.jpg?itok=2Pi1kM5F" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Martin Leguizamon</h5>
        <p class="card-text">Más de 5 años de experiencia trabajando para usted,reparacion de celulares y tablets.</p>
        <p class="card-text"><small class="text-muted">Celulares</small></p>
        <button class="btn btn-primary btn-xs" style={{ marginLeft: "60%" }}><i class="glyphicon glyphicon-plus"></i> ver más! </button>
        <button class="btn btn-info btn-xs" style={{ marginLeft: "10px" }}><i class="glyphicon glyphicon-phone"></i> Tec</button>

      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default Card
