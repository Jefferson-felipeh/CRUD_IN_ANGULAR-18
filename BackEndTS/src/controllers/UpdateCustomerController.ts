import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateCustomerService } from '../services/UpdateCustomerService';

export class UpdateCustomerController{
    handle =  async (request: FastifyRequest, reply:FastifyReply) => {
        try{
            const {id} = request.params as {id: string};
            const {name, email, age} = request.body as {name:string, email:string, age:number};

            if (!id || !name || !email || !age){
                return reply.status(400).send("Dados inválidos");
            }

            const UpdateCustomer = new UpdateCustomerService();
            const Customer = await UpdateCustomer.UpdatedCustomer({id, name, email, age});
            if(!Customer){
                reply.status(404).send({message: 'Usuario não encontrado'});
            }
            else{
                reply.send(Customer);
            }

        }catch(erro){
            reply.status(500).send({message: "Erro ao atualizar usuário!!"});
        }
    }
}