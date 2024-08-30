import {ListCustomersService} from '../services/ListCustomerService';
import { FastifyRequest, FastifyReply } from 'fastify';

export class ControllerListCustomer{
    hendle = async (request:FastifyRequest, reply:FastifyReply) => {
        const customerList = await new ListCustomersService();
        const customer = await customerList.EveryDatas();

        await reply.send(customer);
    }
}