//Modelo Usuario
export class User {

    id: number;
    email: string;
    username: string;
    name: string;
    surnames: string;
    imageUrl: string;
    isEula: boolean;
    eulaDate: string;
    isActive: boolean;
    startAt: string;
    endAt: string;
    updateAt: string;

    constructor({ id, email, username, name, surnames, imageURL, isEula, eulaDate, isActive, startAt, endAt, updateAt }) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.name = name;
        this.surnames = surnames;
        this.imageUrl = imageURL;
        this.isEula = isEula;
        this.eulaDate = eulaDate;
        this.isActive = isActive;
        this.startAt = startAt;
        this.endAt = endAt;
        this.updateAt = updateAt;
    }
}
