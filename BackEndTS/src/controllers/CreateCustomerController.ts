import { FastifyRequest, FastifyReply } from "fastify";
import {CreateCustomerService} from '../services/CreateCustomerService';

export class CreateCustomerController{
    handle = async (request: FastifyRequest, reply: FastifyReply) => {
        const {name, email, age}= request.body as {name: string, email:string, age:number};

        const Createcustomer = await new CreateCustomerService();
        const Customer = await Createcustomer.execute({name, email, age});

        await reply.send(Customer);
    }
}