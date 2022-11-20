import PageLayout from "@/containers/PageLayout";
import PageTemplateListContainer from "@/containers/PageTemplateList";
import SlidesContainer from "@/containers/Slides";

export default function App() {
  return (
    <PageLayout>
      <PageTemplateListContainer />
      <SlidesContainer />
    </PageLayout>
  );
}
