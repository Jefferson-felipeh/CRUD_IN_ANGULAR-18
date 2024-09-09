//Importando os módulos do fastify para requisições_
import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
//Chamando os controllers_
import { ControllerListCustomer } from "./controllers/ListCustomerController";
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { UpdateCustomerController } from "./controllers/UpdateCustomerController";
import { ListUniqueCustomerController } from "./controllers/ListUniqueCustomerController";
import schema from './Validate';

export async function routes(fastify: FastifyInstance, options:FastifyPluginOptions ){
    //Rota resposável por receber a requisiçao para listar todos os usuários_
    fastify.get('/ListCustomers',(request: FastifyRequest, reply: FastifyReply) => {
        const customer = new ControllerListCustomer();
        return customer.hendle(request,reply);
    });

    //Rota responsável por receber os dados do formulário e cadastrar um novo usuario_
    fastify.post('/createCustomer', async (request: FastifyRequest, reply: FastifyReply) => {
        const {error} = await schema.validate(request.body);
        // if(error) return reply.status(400).send({error: error.details[0].message});
        console.log(error);
        
        const CreateCustomer = new CreateCustomerController();
        return CreateCustomer.handle(request, reply);
    });

    //Rota responsável po deletar um registro ou usuario do banco_
    fastify.delete("/deleteCustomer",(request:FastifyRequest, reply:FastifyReply) => {
        const DeleteCustomer = new DeleteCustomerController();
        console.log(request.body);
        return DeleteCustomer.handle(request,reply);
    });

    //Rota responsável por atualizar os dados no banco_
    fastify.put('/api/:id/updatecustomer/',(request:FastifyRequest, reply:FastifyReply) => {
        const Customer = new UpdateCustomerController();
        return Customer.handle(request, reply);
    });

    //Rota resposável por trazer os dados de um usuario específico_
    fastify.get('/api/:id/ListCustomerUnique/',(request:FastifyRequest,reply:FastifyReply) => {
        const CustomerUniq = new ListUniqueCustomerController();
        return CustomerUniq.handle(request, reply);
    });
}