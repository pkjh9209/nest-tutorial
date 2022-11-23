import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    
    @Get('profile')
    findUser() : object{
        return{
            'id' : 1,
            'name' : 'user',
            'age' : 20
        }
    }
}
