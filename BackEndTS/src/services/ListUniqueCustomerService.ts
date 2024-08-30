import prismaClient from "../prisma/prisma";

interface IdListUniqurProps{
    id: string
}

export class ListUniqueCustomerService{
    CustomerUnique = async ({id}: IdListUniqurProps) => {
        if(!id){
            console.error("Id não encontrado!");
            return null;
        }

        try{
            const Customer = await prismaClient.customer.findUnique({
                where:{
                    id: id,
                }
            });

            if(!Customer){
                console.error('Usuario não encontado!');
                return null;  
            } 

            return Customer;
        }catch(err){
            console.error('Error ao buscar Usuario!');
            throw err;
        }
    }
}