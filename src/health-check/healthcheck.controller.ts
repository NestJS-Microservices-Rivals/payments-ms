import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthcheckController {
    
    @Get()
    healthCheck() {
        return 'Payments Weebhook is up and running';
    }
}
