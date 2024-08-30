import { FastifyReply, FastifyRequest } from "fastify";
import { ListUniqueCustomerService } from "../services/ListUniqueCustomerService";

export class ListUniqueCustomerController {
    handle =  async (request:FastifyRequest, reply:FastifyReply) => {
        const {id} = request.params as {id: string};
        const customerUnique = new ListUniqueCustomerService();
        const customer = await customerUnique.CustomerUnique({id});

        reply.send(customer);
    }
}