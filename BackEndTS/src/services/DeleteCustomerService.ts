import prismaClient from "../prisma/prisma";

interface IdDeleteCustomer{
    id: string
}

export class DeleteCustomerService{
    DeleteCustomer = async ({id}: IdDeleteCustomer) =>{
        if(!id){
            console.log("Id não encontrado!");
        }

        //Buscando um objeto específico que possua esse id específico_
        const Customer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        });

        console.log(`Valor do id: `+id);

        //Se não existir ou não retornar esse objeto, esse bloco será executado_
        if(!Customer){
            console.log("Não encontrado!");
        }

        //Caso houver, ele vai deletar o objeto específico referenciando o seu id_
        const DeleteCustomer = await prismaClient.customer.delete({
            where:{
                id: id
            }
        });

        return DeleteCustomer;
    } 
}