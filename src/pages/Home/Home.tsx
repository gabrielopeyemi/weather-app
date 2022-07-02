import React, { useEffect } from 'react';
import { Header, SearchBar } from '../../components';

function Home() {
  const [location, setLocation] = React.useState<string>('London')
  useEffect(() => {
    // getAnswer({location})
  }, [])
  
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default Home;
