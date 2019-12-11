export class Temas {

    id: number;
    name: string;
    fechaInicio: string;
    fechaFinal: string;
    isPublic: string;
    isActive: string;
    updateAt: string;
    descripcion: string;
    imgUrl: string;
    especializacion: string;
    ucreadorId: number;
    umodId: number;
    constructor(id, name, fechaInicio, fechaFinal, isPublic, isActive, updateAt, descripcion, imgUrl, especializacion, ucreadorId, umodId) {
        this.id = id;
        this.name = name;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.isPublic = isPublic;
        this.isActive = isActive;
        this.updateAt = updateAt;
        this.descripcion = descripcion;
        this.imgUrl = imgUrl;
        this.especializacion = especializacion;
        this.ucreadorId = ucreadorId;
        this.umodId = umodId;
    }
}