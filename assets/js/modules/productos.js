export class Producto{
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
        this.description = data.description;
        this.image = data.image;
    }

    crearCard(){
        const card = document.createElement('div');
        card.className = "card-producto";

        const cardPhoto = document.createElement('figure');
        cardPhoto.className = "contenedor__foto";
        cardPhoto.style = `background-image: url('${this.image}')`;

        const name = document.createElement('h3');
        name.className = "nombre__producto";
        name.textContent = this.name;

        const price = document.createElement('p');
        price.className = "precio__producto";
        price.textContent = `$ ${this.price}`;

        const description = document.createElement('p');
        description.className = "descripcion__producto";
        description.textContent = this.description;

        const button = document.createElement('button');
        button.className = "btn btn-primary boton__comprar";
        button.textContent = "Ver producto";

        card.appendChild(cardPhoto);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(description);
        card.appendChild(button);

        
        // card.innerHTML = `
        //     <img src="${this.image}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //         <h5 class="card-title">${this.name}</h5>
        //         <p class="card-text">${this.price}</p>
        //         <p class="card-text">${this.description}</p>
        //         <a href="#" class="btn btn-primary">Agregar al carrito</a>
        //     </div>
        // `;
        return card;
    }   
}

