import {prisma} from '@/lib/prisma'
export default async function RecordFromDb(){

    const RecordFromDb = await prisma.dictionary.findFirst();
    
    console.log("record from db", RecordFromDb);
    return <>
    </>
}