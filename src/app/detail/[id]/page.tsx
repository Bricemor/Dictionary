import DetailEntry from "@/app/components/DetailEntry";
import dictionaryData from "@/data/dictionary.json";
export default function Page({ params }: { params: { id: string } }) {

    
    return <DetailEntry id={params.id} dictionaryData={dictionaryData || []} />
}
