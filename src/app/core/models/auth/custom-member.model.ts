import { User } from 'firebase';

export class CustomMemberModel {
    email: string;
    displayName: string;
    image?: string;

    constructor(user?: User) {
        if (user){
            this.email = user.email;
            this.displayName = user.displayName;
            this.image = user.photoURL;
        }
    }
}
