class ProductManager {

    static ultId = 0;

    constructor() {
        this.products =  [];
    }

    addProduct(title, description, price, img, code, stock){
        if(!title || !description || !price || !img || !code || !stock){
            console.log("Todos los campos son obligatorios");
            return;
        }

        if(this.products.some(item => item.code === code)) {
            console.log("El codigo debe ser unico.");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        this.products.push(newProduct);
            
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        const product = this.products.find(item => item.id === id);

        if(!product) {
            console.error("Not Found!");
        } else {
            console.log(product);
        }
    }
}

const manager = new ProductManager();

console.log(manager.getProducts());

manager.addProduct("Producto prueba", "esto es un producto prueba", 200, "sin imagen", "abc123", 25 );
manager.addProduct("Fideos", "ricardos", 200, "sin imagen", "abc124", 25 );
manager.addProduct("Arroz", "blanco", 200, "sin imagen", "abc125", 25 );

console.log(manager.getProducts());


