import prismaClient from "../prisma/prisma";

interface CustomerProps{
    name: string
    email: string
    age: number
}

export class CreateCustomerService{
    execute = async ({name, email, age}: CustomerProps) => {
        if(!name || !email){
            throw new Error("Campo inválido!");
        }

        const createCustomer = await prismaClient.customer.create({
            data: {
                name: name,
                email: email,
                age:age,
                status: 1
            }
        });

        return createCustomer;
    }
}