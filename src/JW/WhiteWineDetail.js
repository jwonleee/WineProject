import styled from './WhiteWineDetail.module.css';
import { useState } from 'react';
import MapAPI from '../SM/MapAPI';
import DetailPage from './DetailPage';
import ReviewPage from './ReviewPage';

const WhiteWineDetail = () => {

    const wine = sessionStorage.getItem('detail');
    // console.log(JSON.parse(wine));
    const whiteInfo = JSON.parse(wine); //변수에 받아서 파싱
    // console.log(whiteInfo.info);
 
    //지도 버튼
    const [visible, setVisible] = useState(false);
    const handleMap = () => {
        setVisible(true);
    }

    const [ex, setEx] = useState(true);

    const handleEx = (e) => {
        if(e.target.innerHTML === "리뷰") {
            setEx(false);
        } else if (e.target.innerHTML === "상세 페이지"){
            setEx(true);
        }
    }

    return (
        <>
        {/* 타이틀 */}
        <div className={styled.wrap}>
        <div className={styled.detail_header}>
            {/* 좋아요, 공유하기 */}
            <div className={styled.rightSide}>
                <button onClick={(e) => {e.target.innerHTML = '💜'}}>🤍</button>
                <button >📡</button>
            </div>
            {/* 이름, 이미지 */}
            <span className={styled.titleText1}>This is</span>
            <img src={whiteInfo.img} alt={whiteInfo.info[0]}/>
            <span className={styled.titleName}>{whiteInfo.info[0]}</span>
            <span className={styled.titleText2}>wine</span>
        </div>

        
        {/* 상위 데이터 */}    
        <section className={styled.section_top}>
            <div>
                <h3 className={styled.sideName}>{whiteInfo.info[0]}</h3> {/* 이름 */}
                
                <span className={styled.left}><b>Location</b> | {whiteInfo.info[1]}</span> {/* 장소 */}
                <span className={styled.left}>{whiteInfo.info[3]}</span> {/* 평점 */}
                <span className={styled.left}><b>Winery</b> | {whiteInfo.info[2]}</span> {/* 와이너리 */}
                <span className={styled.left}>{whiteInfo.info[4]}</span> {/* 리뷰어 */}

                <button className={styled.map_btn} onClick={handleMap}>{visible ? null : "구매 가능한 매장 찾기"}</button>
                { visible ? <MapAPI/> : null }
            </div>
        </section>
        <section className={styled.section_bottom}>
            <div className={styled.page_wrap}>
                <button className={styled.page_btn} onClick={handleEx}>상세 페이지</button>
                <button className={styled.page_btn} onClick={handleEx}>리뷰</button>
            </div>
        </section>

        {/* 하위 데이터 */}
        <section className={styled.article_wrap}>
            <div>{!ex ? <ReviewPage/> : <DetailPage/>}</div>
        </section>
        </div>
        </>
    )
}

export default WhiteWineDetail;