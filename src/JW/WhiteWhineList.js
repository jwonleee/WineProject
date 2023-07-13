import { useNavigate } from 'react-router-dom';
import styled from './WhiteWineList.module.css';

const WhiteWineList = ( {data} ) => {

    const navigate = useNavigate(); //url을 조작할 훅

    const handleClick = (e) => { //이미지에서 클릭 이벤트 발생시
        const x = e.target.parentElement.nextElementSibling.children; //img-div-div-p태그 전부
        const arr = []; //담아줄 빈 배열 설정

        for(let i = 0 ; i < x.length; i++) {
            arr.push(x[i].innerHTML); //가져온 p태그의 innerHTML을 전부 배열에 담아줌
        }

        // console.log(arr);
        // sessionStorage로 key: detail, value: { } 객체로 한번에 보내기 - 문자열로 보내지기 때문에 바꿔서
        sessionStorage.setItem('detail', JSON.stringify({'img': e.target.src,
                                                         'info': arr})
        );
        navigate("/whitedetail"); //주소 붙이기
    }

    return (
        
        <>
            <div className={styled.whitewine_container}>
                <div className={styled.whitewinelist_title}>
                    <h3> WhiteWine List </h3>
                    {/* <img src={require('./img/s3.jpg')}/> */}
                </div>

                <ul className={styled.whitewine_wrap}>
                    {
                        data.map( (item) =>  /* 데이터 60개만 가져옴 */
                        <li key={item.id}>
                                <div className={styled.imageList}>
                                    <img src={item.image} alt={item.wine} onClick={handleClick}/>
                                </div>
                                <div className={styled.textList}>
                                    {/* <p>{item.id}</p> */}
                                    <p className={styled.nameList}>{item.wine}</p>
                                    <p className={styled.LocationList}>{item.location}</p>
                                    <p className={styled.wieryList}>{item.winery}</p>
                                    <p className={styled.avgList}>⭐️{item.rating.average}</p>
                                    <p className={styled.reviewList}>{item.rating.reviews}</p>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default WhiteWineList;