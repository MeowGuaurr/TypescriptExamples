import { get } from "./utils/http";
import BlogPosts, { BlogPost } from './components/BogPosts';
import ErrorMessage from "./components/ErrorMessage";
import fetchingImage from "./assets/data-fetching.png"
import { ReactNode, useEffect, useState } from "react";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();
  
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPost[];
      const blogPosts: BlogPost[] = data.map(rawPost => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body
        };
      });
      setFetchedPosts(blogPosts);
      } catch (error) {
        setError((error as Error).message);
      }
      
      
      setIsFetching(false);
      
    }
    fetchPosts();
  }, []);

  let content: ReactNode;

  if (error){
     content = <ErrorMessage text={error}/>
  }

  if (fetchedPosts){
    content = <BlogPosts posts={fetchedPosts}/>
  }

  if (isFetching){
    content = <p id="loading-fallback"> Fetching posts...</p>
  }
  
  return <main>
    <img src={fetchingImage} alt="in proccess of fetching data" />
    {content}
  </main>;
}

export default App;
