let products = [];
let id = 1; 


    function addProduct(nombre, precio) {
        if (!nombre || precio == null) {
            throw new Error('name and price must be provided');
        }
        
        let existe = products.find(product => product.nombre === nombre);
        if (existe) {
            throw new Error('name already exists');
        }
        
        let newProduct = {
            id: id,
            nombre: nombre,
            precio: precio,
        };
        products.push(newProduct);
        id++;
        console.log(`El producto ${nombre} ha sido agregado`);
        return newProduct;
    }

    function removeProduct(nombre) {
        let existe = products.find(producto => producto.nombre === nombre);
        if (!existe) {
            throw new Error('name not already exists');
        } else {
            products = products.filter(prod => prod.nombre !== nombre);
            console.log(`El producto ${nombre} ha sido eliminado`);
            return true;
        }}


    //obtener un producto por su id

    function getProduct(id) {
        let existe= products.find(productos=>productos.id===id)
        if (!existe){
            throw new Error("product not found")
        }
        else{console.log(`Producto ${existe.nombre} encontrado `)
        return existe
        }
        
    }
//actualizar un producto colocando un id ya existente donde actualizar
    function updateProduct (id,nombre,precio){
       let existe= products.find(productos=>productos.id===id)
        if(!existe){
           throw new Error( "product not found")
        }
        if (typeof nombre !== 'undefined' && nombre !== null) {
            existe.nombre = nombre;
        }
        if (typeof precio !== 'undefined' && precio !== null) {
            existe.precio = precio;
        }
    
        console.log(`producto${id} actualizado: Nombre:${existe.nombre}, precio: ${existe.precio}`)
        return existe
    }
    
    //resetea los productos
    function resetProducts() {
       products=[]
       id=1
       console.log("Todos los productos han sido eliminados")
    }

    //devuelve los productos
    function getProducts(){
        return products
    }






    module.exports={addProduct,removeProduct,getProduct,updateProduct,getProducts,resetProducts}