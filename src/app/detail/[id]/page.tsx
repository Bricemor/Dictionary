import DetailEntry from "@/app/components/DetailEntry";
import dictionaryData from "@/data/dictionary.json";

export default async function Page({ params }: { params: any }) {
    const resolvedParams = await params;
    return <DetailEntry id={resolvedParams.id} dictionaryData={dictionaryData || []} />;
}
