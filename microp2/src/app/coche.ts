export enum EstadoCoche {BUENO, MALO};

export class Coche {
    marca: string;
    modelo: string;
    foto: string;

    fecha_modelo: Date;
    fecha_venta: Date;

    precio: number;
    estado: EstadoCoche;

    public getPVP():number {
        return this.precio*1.21;
    }

    public constructor(marca:string, modelo:string, fecha_modelo:Date, fecha_venta:Date, precio:number, foto:string, estado:EstadoCoche) {
        this.marca = marca;
        this.modelo = modelo;
        this.foto = foto;
        this.fecha_modelo = fecha_modelo;
        this.fecha_venta = fecha_venta;
        this.precio = precio;
        this.estado = estado;
    }

    public rebajar() {
        this.precio = this.precio*0.9;
    }

}
