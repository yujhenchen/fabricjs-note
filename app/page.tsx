import { Container } from "./components/container";
import { Footer } from "./components/footer";
import { PageLayout } from "./components/pageLayout";
import { Plus } from "./components/plus";

export default function Home() {
  return (
    <Container>
      <PageLayout>
        <h1 className="text-3xl font-bold">Have anything in mind?</h1>
      </PageLayout>
    </Container>
  );
}
