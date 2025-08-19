import { ContentContainer } from "./containers/contentContainer";
import { PageContainer } from "./containers/pageContainer";

export default function Home() {
  return (
    <PageContainer>
      <ContentContainer>
        <h1 className="text-3xl font-bold">Have anything in mind?</h1>
      </ContentContainer>
    </PageContainer>
  );
}
