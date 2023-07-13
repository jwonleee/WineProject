import { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import WhiteWineList from './WhiteWhineList';
import WhiteWinePagination from './WhiteWinePagination';

/* API 가져오기 */
const WhiteWineAPI = () => {
  
  /** 로딩중일 때 */
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); /* 데이터 1부터 보여줌 */
  const [dataPerPage, setDatasPerPage] = useState(12); /* 12개씩 보여줄 데이터 관리 */

    const getData = async () => {
      const resp = await fetch('https://api.sampleapis.com/wines/whites');
      const json = await resp.json();
      // console.log(json);
      setData(json.filter( data => data.id !== 18 && data.id !== 42 )
                  .filter( (data, index) => index < 60 ));
      setLoading(true); //로딩완료
    }
    
    useEffect(() => {
      getData();
    }, []);
    
    if(loading === false){ /* 로딩 마크 */
    return <div style={{height: '800px', position: 'relative'}}>
      <PuffLoader style={{position: 'absolute', marginTop: '15%', marginLeft: '45%'}}
      color="#36d7b7"
      cssOverride={{}}
      loading
      size={150}
      speedMultiplier={4}
      />
    </div>
  } 

    /* pagination */

    const indexOfLast = currentPage * dataPerPage; /* 마지막 인덱스 값 */
    const indexOfFirst = indexOfLast - dataPerPage;/* 처음 인덱스 값 */

    const currentDatas = (data) => {
      let currentDatas = 0;
      currentDatas = data.slice(indexOfFirst, indexOfLast);
      return currentDatas;
    }
    
    return (
      <div>
        
          {/* <WhiteWineList data={data} /> */}
        <WhiteWineList data={currentDatas(data)} />

        <WhiteWinePagination
          postsPerPage={dataPerPage}
          totalPosts={data.length}
          paginate={setCurrentPage}
        ></WhiteWinePagination>

      </div>


    )
      }

export default WhiteWineAPI;