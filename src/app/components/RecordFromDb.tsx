import {prisma} from '@/lib/prisma'
export default async function RecordFromDb(){

    prisma.dictionary.findMany();

    const RecordFromDb = await prisma.dictionary.findFirst();
    
    console.log("record from db", RecordFromDb);
    return <>
    </>
}