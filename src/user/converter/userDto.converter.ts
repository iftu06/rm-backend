import { User } from './../entity/User';
class UserDtoConverter implements DtoConverter<User, UserDto>{

    constructor() {

    }

    convert(user: User): UserDto {
        
        throw new Error('Method not implemented.');
    }

}