export class Contact {
    public key?: string; //Esto maneja el id de contacto al usar firebase
    public nombre: string;
    public organizacion: string;
    public movil: string;
    public correo: string;

    constructor() {
        this.key="";
    }
}