import Home from "./home/page";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
export default function App() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return <Home />;
}
