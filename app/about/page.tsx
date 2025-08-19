import { ContentContainer } from "../containers/contentContainer";
import { PageContainer } from "../containers/pageContainer";

export default function About() {
  return (
    <PageContainer>
      <ContentContainer>
        <h1 className="text-3xl font-bold">About me</h1>
      </ContentContainer>
    </PageContainer>
  );
}
