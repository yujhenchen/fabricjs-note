import { FabricJSCanvas } from "./components/fabricJSCanvas";
import { ContentContainer } from "./containers/contentContainer";
import { PageContainer } from "./containers/pageContainer";

export default function Home() {
  return (
    <PageContainer>
      <ContentContainer>
        <h1 className="text-3xl font-bold absolute top-4 left-4">Have anything in mind?</h1>
        <FabricJSCanvas className="mt-24 sm:mt-16" />
      </ContentContainer>
    </PageContainer>
  );
}
