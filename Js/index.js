fetch("https://api.escuelajs.co/api/v1/categories")
.then(response => response.json())
.then(data =>{

    let card= "";

    data.forEach(user => {
        
        card+= `<div class="col"
                    <div class="card">
                    <img src="https://www.cavsi.com/espanol/wp-content/uploads/informatica/usuario-de-computadoras.jpg"
                    class="card-img-top" alt="Usuario">
                    <div class="card-body">
                    <h5 class="card-title"> ${user.name}
                    </h5>
                    <ul class="list-group
                    col class="list-group list-group-flush">
                    
                    <li class="list-group-item">
                    <strong>Name:</strong> ${user.name}
                    </li>
                    <li class="list-group-item">
                    <strong>Image:</strong> <img src="${user.image}" width="200px" height="200px">
                    </li>
                    </ul>
                    </div>
                    </div>
                    </div>`
    });

    document.getElementById("cardList").innerHTML= card;
});