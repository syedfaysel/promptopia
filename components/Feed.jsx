'use client';
import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';




const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}



const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const handleSearchChange = (e) => {
    
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      
      setPosts(data);
    }

    fetchPosts();
  },[])

  return (
    <section className="feed">
      <form action="" className="w-full relative flex-center">
        <input type="text" placeholder='search by tags or username' value={searchText} onChange={handleSearchChange} required className='search_input peer' />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  );
};

export default Feed;