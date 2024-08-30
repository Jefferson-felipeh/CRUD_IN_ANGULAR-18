import prismaClient from "../prisma/prisma"

interface IdUpdatedCustomer{
    id: string;
    name: string;
    email:string;
    age: number;
}

export class UpdateCustomerService{
    UpdatedCustomer = async ({id, name, email, age}:IdUpdatedCustomer) =>{
        if(!id) console.error("Usuario não encontrado!");
        
        try{
            const updateCustomer = await prismaClient.customer.update({
                where:{id},
                data:{
                    name,
                    email,
                    age
                }
            });
    
            return updateCustomer;
        }catch(err){
            console.error('Não foi possível atualizar as informações!');
            throw err;
        }
    }
}