import getWikiResults from "@/lib/getWikiResult";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not found result`,
    };
  }
  return {
    title: displayTerm,
    description: `Search Result for ${displayTerm}`,
  };
}

export default async function SearchResult({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const results: Result[] | undefined = data?.query?.pages;

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => (
          <Item result={result} key={result.pageid} />
        ))
      ) : (
        <h2>{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
}
