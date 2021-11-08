new Vue({
    el: '#example-3',
    data: {
      show: true
    }
  });
  
const app=new Vue({
    el:"#clases",
    data:{
        bebida:[
            {cantidad:0, nombre:"Americano", ingredientes:"Agua, Cafe Largo Espresso", tamanio:"Grande", precio:38, vigente:true},
            {cantidad:0, nombre:"Capuccino", ingredientes:"Agua, Cafe Molido, Leche, Canela, Chocolate", tamanio:"Grande", precio:49, vigente:true},
            {cantidad:0, nombre:"Espresso", ingredientes:"Agua, CafeLargo Espresso, Crema", tamanio:"Chico", precio:28, vigente:true},
            {cantidad:0, nombre:"Moka", ingredientes:"Cafe espresso, Agua, Leche, Chocolate Liquido, Crema", tamanio:"Chico", precio:25, vigente:true},
            {cantidad:0, nombre:"Chocolate", ingredientes:"Agua, Chocolate, Leche, Azucar", tamanio:"Chico", precio:39, vigente:false},
            {cantidad:0, nombre:"Latte", ingredientes:"Lecha, Agua, Cafe Soluble, Canela", tamanio:"Grande", precio:49, vigente:true},
            {cantidad:0, nombre:"Frapuccino", ingredientes:"Cafe, Leche, Chocolate, Hielo, Crema, Topping", tamanio:"Chico", precio:46, vigente:true},
            {cantidad:0, nombre:"Frappe Moka", ingredientes:"Cafe, Leche, Hielo, Crema", tamanio:"Grande", precio:63, vigente:true},
            {cantidad:0, nombre:"FriOREO Moka", ingredientes:"Cafe, Leche, Hielo, Chocalate, Galletas Oreo, Crema, Topping", tamanio:"Grande", precio:63, vigente:true},
            {cantidad:0, nombre:"Capuccino Cajeta", ingredientes:"Cafe, Leche, Hielo, Crema, Cajeta", tamanio:"Chico", precio:55, vigente:true},
            {cantidad:0, nombre:"Capuccino Caramelo", ingredientes:"Caramelo, Cafe, Leche, Hielo, Crema", tamanio:"Chico", precio:50, vigente:false},
            {cantidad:0, nombre:"Smoothie Frutos Rojos", ingredientes:"Yogurt Natural, Fresas, Arandanos, Frambuesas, Moras, Cerezas", tamanio:"Grande", precio:52, vigente:true},
            {cantidad:0, nombre:"Smoothie Mango", ingredientes:"Yogurt Natural, Mango, Endulzante", tamanio:"Grande", precio:52, vigente:true},
            {cantidad:0, nombre:"Té Fresas & Kiwi", ingredientes:"Agua, Fresas y Kiwi Deshidratados, jamaica", tamanio:"Chico", precio:37, vigente:true},
            {cantidad:0, nombre:"Té Manzanilla", ingredientes:"Agua, Manzanilla Fresa, Miel", tamanio:"Chico", precio:35, vigente:true},
        ],
        minimo:100,
        busqueda:'',
        estado:false,
        activo:true,
        mostrar:false,
        show:true,
    },
    methods:{
        agregar:function(){
            if(cantidad>0){
                return this.bebida, this.cantidad, this.precio;
            }
        }
    },
    computed:{
        preciosBebidas(){
            return this.bebida.filter((bebida)=>bebida.precio<=this.minimo);
        },
        buscarBebidas(){
            return this.bebida.filter((bebida)=>bebida.nombre.includes(this.busqueda));
        },
        sub(){
            this.subt=0;
            for(objeto of this.bebida){
                this.subt+=objeto.cantidad*objeto.precio;
            }
            return this.subt;
        },
        iva(){
            this.tiva=0;
            this.res=0;
            for(objeto of this.bebida){
                this.res+=objeto.cantidad*objeto.precio;
                this.tiva=this.res*0.16;
            }
            return this.tiva;
        },
        totalP(){
            this.tot=0;
            this.res=0;
            this.tiva=0;
            for(objeto of this.bebida){
                this.res+=objeto.cantidad*objeto.precio;
                this.tiva=this.res*0.16;
                this.tot=this.res+this.tiva;
            }
            return this.tot;
        }
    }
}); 