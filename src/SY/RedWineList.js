import styled from './RedWine.module.css';
import { useNavigate } from 'react-router-dom';


const RedWineList =  ( {data} ) => {

    //console.log(data); //{item} 하나씩 들어옴
    const navigate = useNavigate();    
    /* 상세페이지(온클릭이벤트) */
    const handleClick = (e)=>{
        const pTag = e.target.parentElement.nextElementSibling.children;
        console.log(pTag);

        const pTag_arr = [];
        for(let i = 0; i < pTag.length; i++){
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
            
            <div className={styled.topImgWrap}>
            RedWine List 
            <div className={styled.orangeBox}/>
            </div>
            <div></div>
            <ul className={styled.redwine_wrap}>
                {data.map( (item) => 
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
export default RedWineList;