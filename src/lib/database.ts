import PrismaClient from "$lib/prisma";

const prisma = new PrismaClient()


// using Date.now as uid for project purpose only, use UUID for production
export async function getTodos() {
    return await prisma.todo.findMany();
}

export async function addTodos(body: string) {
    await prisma.todo.create({
        data: {
            uid: `${Date.now()}` as string,
            created_at: new Date() as Date,
            text: body as string,
            done: false as boolean
        }
    })
}

export async function removeTodos(id: string){
    await prisma.todo.delete({
        where: {
            uid: id as string
        }
    })
}

export async function updateTodos(id: string, body: string) {

    await prisma.todo.update({
        where: {
            uid: id
        },
        data: {
            text: body
        }
    })
}

export async function updateStatus(id: string, done: string) {

    await prisma.todo.update({
        where: {
            uid: id
        },
        data: {
            done: done.toLowerCase() === "true"
        }
    })
}