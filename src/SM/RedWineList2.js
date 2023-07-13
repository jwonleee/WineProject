import styled from '../SY/RedWine.module.css';
import RedWineDetail from '../SY/RedWineDetail';
import { useNavigate } from 'react-router-dom';
import SearchContext from './ContextAPI';
import { useContext } from 'react';


const RedWineList2 =  ( {data} ) => {

    const { state, action } = useContext(SearchContext);

    //console.log(data); //{item} 하나씩 들어옴
    const navigate = useNavigate();    
    /* 상세페이지(온클릭이벤트) */
    const handleClick = (e)=>{
        const pTag = e.target.parentElement.nextElementSibling.children;
        // console.log(pTag);

        const pTag_arr = [];
        for(let i = 1; i < pTag.length; i++){
            pTag_arr.push(pTag[i].innerHTML);
        }
        // console.log(pTag_arr);

        sessionStorage.setItem('red_detail', JSON.stringify({'redImg':e.target.src,
                                                            'redInfo':pTag_arr})
                              );
        
        navigate("/redDetail");
        
       
    }
    
     return (
        <div className={styled.redwine_container}>
            <ul className={styled.redwine_wrap}>
                {data
                .filter((item) => item.wine.toLowerCase().includes(state.search.toLowerCase()))
                .map( (item) => 
                    <li key={item.id} >
                            <div className={styled.imageList}>
                                <img src={item.image} alt={item.wine} onClick={handleClick} />
                            </div>
                            <div className={styled.textList}>
                               {/*  <p>{item.id}</p> */}
                                <p className={styled.nameList}>{item.wine}</p>
                                <p className={styled.locationList}>{item.location}</p>
                                <p className={styled.wineryList}>{item.winery}</p>
                                <p className={styled.avgList}>⭐️{item.rating.average}</p>
                                <p className={styled.reviews}>{item.rating.reviews}</p>
                            </div>
                    </li>
                    )
                }
             
            </ul>
        </div>
    ); 
};
export default RedWineList2;