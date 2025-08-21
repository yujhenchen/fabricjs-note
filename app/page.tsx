import { ContentContainer } from "./containers/contentContainer";
import { PageContainer } from "./containers/pageContainer";
import { Editor } from "./editors/Editor";

export default function Home() {
  return (
    <PageContainer>
      <ContentContainer>
        <Editor />
      </ContentContainer>
    </PageContainer>
  );
}
