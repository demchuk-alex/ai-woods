import Container from "@/components/features/container";
import { PostGrid } from "@/components/features/more-stories";
import { AllPostsList } from "@/components/features/all-posts-list";
import { HomeBanner } from "@/components/features/home-banner";
import { getAllPosts } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <HomeBanner />
      <div className="mt-4">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-7">
              <Card className="overflow-hidden">
                <CardContent className="p-4">
                  {allPosts.length > 0 && <PostGrid posts={allPosts} />}
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-5">
              <Card className="overflow-visible">
                <CardContent className="p-4">
                  {allPosts.length > 0 && <AllPostsList posts={allPosts} />}
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
