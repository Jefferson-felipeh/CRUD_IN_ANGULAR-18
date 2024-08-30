import prismaClient from "../prisma/prisma";

export class ListCustomersService{
    EveryDatas = async () => {
        const customers = await prismaClient.customer.findMany();

        return customers;
    }
}