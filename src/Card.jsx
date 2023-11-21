function Card({plan, price, users, storage, projects, access, privateproject, phone, subdomain, reports}){
    
    return <>
    <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{plan}</h5>
            <h6 class="card-price text-center">{price}<span class="period">/month</span></h6>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{users}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{projects}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{access}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{privateproject}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{phone}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{subdomain}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{reports}</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      </>

      
}

export default Card;