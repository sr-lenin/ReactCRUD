
export interface UserType{
    id: string;
    name: string;
    email:string;
    gender:string;

}

export const user: UserType[]=[{
    id: new Date().toJSON().toString(),
    name: "jason",
    email: "jason@gmail.com",
    gender: "M"
}]


export enum pageEnum{
    home,
    list,
    add
}