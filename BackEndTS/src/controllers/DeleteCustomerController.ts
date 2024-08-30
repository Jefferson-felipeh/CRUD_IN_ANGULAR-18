import {FastifyRequest, FastifyReply} from "fastify";
import {DeleteCustomerService} from '../services/DeleteCustomerService';
export class DeleteCustomerController{
    handle = async (request:FastifyRequest,reply:FastifyReply) => {
        const {id} = request.query as {id: string};
        const Customer = await new DeleteCustomerService();
        const DeleteCustomer = Customer.DeleteCustomer({id})

        reply.send(DeleteCustomer);
    }
}