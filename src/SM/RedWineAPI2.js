import {useEffect, useState} from 'react';
import RedWineList from '../SY/RedWineList';
import styled from '../SY/RedWine.module.css';
import { PuffLoader } from 'react-spinners';
import Pagination from '../SY/Pagination';
import RedWineDetail from '../SY/RedWineDetail';
import RedWineList2 from './RedWineList2';

const RedWineAPI2 = () => {

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(12);


  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/wines/reds');
    const json = await resp.json();      
    setData(json.filter( item => item.id !== 1 && item.id !== 16 && item.id !==21 && item.id !== 25 && item.id !== 26 && item.id !== 31 && item.id !== 33 && item.id !== 40 && item.id !== 43 && item.id !== 46 && item.id !== 54 && item.id !== 55 && item.id !== 58 && item.id !== 63 && item.id !== 69 && item.id !== 70 && item.id !== 76).filter( (item, index) => index < 60 ));
    setLoading(true); //로딩완료    
  }
  
  useEffect(() => {
    getData();
  }, []);

  if(loading === false){ /* 로딩 마크 */
  return <div>
      <PuffLoader
      color="#36d7b7"
      cssOverride={{}}
      loading
      size={100}
      speedMultiplier={1}
      />
    </div>
  };

  /* 숫자페이지 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (data) => {
    let currentPosts = 0;
    currentPosts = data.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

 

  return (
    <div>
    
      <RedWineList2 data={currentPosts(data)}/>
      {/* <RedWineList data={data}/> */}
           
        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts = {data.length}
          paginate = {setCurrentPage}
          >         
        </Pagination> */}

    </div>
    
      
    
  )
}

export default RedWineAPI2;