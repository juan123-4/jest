const { addProduct, removeProduct, getProduct, updateProduct, getProducts, resetProducts } = require("./product");
//addproduct
describe('addProduct', () => {
    beforeEach(() => {
        products = [];
        id = 1;
    });

    it('should add a product', () => {
        const newProduct = addProduct("papa", 200);
        expect(newProduct).toEqual({ id: 1, nombre: "papa", precio: 200 });
    });

    it('should throw an error if name or price are null', () => {
        expect(() => addProduct("", 200)).toThrow('name and price must be provided');
        expect(() => addProduct("papa", null)).toThrow('name and price must be provided');
    });

    it('should throw an error if name already exists', () => {
        addProduct(1,"papa", 200);
        expect(() => addProduct("papa", 200)).toThrow('name already exists');
    });
});
//removeproduct

describe('removeProduct', () => {
    beforeEach(() => {
        products = [];
        id = 1;
    });

    it('should remove a product', () => {
        addProduct("zapayo", 200);
        const result = removeProduct("zapayo");
        expect(result).toBe(true);
        expect(products.find(producto => producto.nombre === "zapayo")).toBeUndefined();
    });

    it('should throw an error if name not already exists', () => {
        expect(() => removeProduct("zapayo")).toThrow("name not already exists");
    });
});

////getProduct

describe('getProduct', () => {
    beforeEach(() => {
        products = [];
        id = 1;
    });

    it('should get a product', () => {
        
        const result = getProduct(1);
        expect(result).toEqual({ id: 1, nombre: "papa", precio: 200 });;
        
    });

    it('should throw an error if product does not exist', () => {
        expect(() => getProduct(99)).toThrow("product not found");
    });
});


//updateProduct
describe('updateProduct', () => {
    beforeEach(() => {
        products = [];
        id = 1;
    });

    it('should update a product', () => {
        addProduct("manzana", 100);
        const updatedProduct = updateProduct(1, "pera", 120);
        expect(updatedProduct).toEqual({ id: 1, nombre: "pera", precio: 120 });
    });

    it('should fail when updating a product that does not exist ', () => {
        expect(() => updateProduct(99, "pera", 120)).toThrow('product not found');
    });

    it('should only update the name', () => {
        
        const updatedProduct = updateProduct(1, "pera",null);
        expect(updatedProduct).toEqual({ id: 1, nombre: "pera", precio: 120 });
    });

    it('should only update the price', () => {
    
        const updatedProduct = updateProduct(1, null, 120);
        expect(updatedProduct).toEqual({ id: 1, nombre: "pera", precio: 120 });
    });

    
});

