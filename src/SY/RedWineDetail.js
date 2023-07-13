import styled from './RedWineDetail.module.css';
import MapAPI from '../SM/MapAPI';
import { useState } from 'react';


/* 상세페이지 이미지 */
import img from './img/wine2.jpg';
import img2 from './img/2.jpg';
import winery from './img/wine3.jpg';
import wineRegions from './img/wine.jpg';
import wineBanner1 from './img/banner1.jpg';
import wineBanner2 from './img/banner2.jpg';
import wineBanner3 from './img/banner3.jpg';
import wineBanner4 from './img/banner4.jpg';
import wineBanner5 from './img/banner5.jpg';
import wineBanner6 from './img/banner6.jpg';

/* 스와이퍼 */
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);


const RedWineDetail = ()=> {

    const wine = sessionStorage.getItem('red_detail');
    // console.log(JSON.parse(와인));
    const detailInfo = JSON.parse(wine);

    console.log(detailInfo);


    //지도버튼
    const [visible, setVisible] = useState(false);
    const handleMap = () => {
        setVisible(true);
    }

    //상세페이지 변경
    const [ex, setEx] = useState(true);
    const handleEx = (e) => {
        if(e.target.innerHTML === "리뷰"){
            setEx(false);
        } else if(e.target.innerHTML === "상세 페이지"){
            setEx(true);
        }
    }





    return(        

        <div className={styled.detail_wrap}>
            <div style={{position: 'relative'}} >{/* 타이틀 */}
                <span className={styled.detailTitle1}><b> This is </b></span> 
                <div className={styled.oo}>
                    <h1 className={styled.data} data-heading="Slide">{detailInfo.redInfo[0]}</h1>
                </div>
                {/* <span className={styled.detailNameList}></span>  */}
                <span className={styled.detailTitle2}>RedWine</span>
                <div className={styled.detailImg_wrap}>
                    <img src={detailInfo.redImg} alt={detailInfo.redInfo[0]}/>
                </div>
            </div>
            <section className={styled.section_top}>
            <div>
                <h3 className={styled.sideName}>{detailInfo.redInfo[0]}</h3> {/* 이름 */}
                
                <span className={styled.left}><b>Location</b> | {detailInfo.redInfo[1]}</span> {/* 장소 */}
                <span className={styled.left}>{detailInfo.redInfo[3]}</span> {/* 평점 */}
                <span className={styled.left}><b>Winery</b> | {detailInfo.redInfo[2]}</span> {/* 와이너리 */}
                <span className={styled.left}>{detailInfo.redInfo[4]}</span> {/* 리뷰어 */}

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
          

            <div>
                <div>
                    {/* 상세페이지&리뷰npm */}
                    {!ex ? 
                    <article style={{marginBottom: '200px'}}> 
                        <h3>리뷰</h3> 
                        <div className={styled.reviewBox}>
                            <div className={styled.rightWrap}>
                                <div className={styled.btnWrap}>
                                    <span className={styled.minButton1}>베스트</span>
                                    <span className={styled.minButton2}>퍼플</span>                            
                                    <span style={{fontWeight: '500px'}}>정**</span>                            
                                </div>
                            </div>
                            <article className={styled.review_text}>
                                <div style={{padding: '0px 50px'}}>
                                    <div className={styled.reviewTitle}>[레드]</div>
                                    <p className={styled.reviewContent}>짙은 루비색깔을 띄고있다. 테두리는 붉은 빨간색이다.<br/>
                                        노즈에서는 특유의 칠레향 피망향이 먼저 과하게 난다. 흙, 풀잎, 계피, 토바코, 나무 오크향이 올라오고. 체리, 블랙베리향이 뒤에 올라온다. <br/>
                                        시간이 지나니 나무오크향과 향신료? 단계피향이 많이 올라온다.<br/>
                                        입안에서는 풀바디의 바디감이 느껴진다. 굉장히 실키한 느낌이고 센? 아주 단단한 타닌이 느껴진다. <br/>
                                        하지만 높은산미가 잘 받쳐주고 있다. 여운은 길었고 과일류에서 오는 단맛을 시작으로 씁쓸한맛으로 끝난다. 와인의 모든 파트가 조화롭게 벨런스를 이루고 있고, 입안에서 우아한 춤을추는 거 같았다.</p>
                                </div>
                            </article>
                        </div>
                        <div className={styled.reviewBox}>
                            <div className={styled.rightWrap}>
                                <div className={styled.btnWrap}>
                                    <span className={styled.minButton1}>베스트</span>
                                    <span className={styled.minButton2}>퍼플</span>                            
                                    <span style={{fontWeight: '500px'}}>이**</span>                            
                                </div>
                            </div>
                            <article className={styled.review_text}>
                                <div style={{padding: '0px 50px'}}>
                                    <div className={styled.reviewTitle}>[레드]</div>
                                    <p className={styled.reviewContent}>
                                        잘익은 열대과일향이 솔솔 올라온다. <br/>
                                        향부터가 기분이 좋아진다.<br/> 
                                        망고, 구아바, 오렌지, 시트러스 느낌이 나는데 굉장히 고급적이다. 회랑도 잘 어울린다.<br/>
                                        시간지나고 나니 탄산감 날아가고, 시트러스 한 맛이 일품이다. 
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className={styled.reviewBox}>
                            <div className={styled.rightWrap}>
                                <div className={styled.btnWrap}>
                                    <span className={styled.minButton2}>라벤더</span>                            
                                    <span style={{fontWeight: '500px'}}>최**</span>                            
                                </div>
                            </div>
                            <article className={styled.review_text}>
                                <div style={{padding: '0px 50px'}}>
                                    <div className={styled.reviewTitle}>[레드]</div>
                                    <p className={styled.reviewContent}>
                                        붉은 과실의 산미가 돋보이는 와인!
                                        장미빛에서 느껴지는 부드러움과 살짝의 타닌이 있어서 마시기 좋음
                                        피니시가 길지는 않고 적당함 
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className={styled.reviewBox}>
                            <div className={styled.rightWrap}>
                                <div className={styled.btnWrap}>
                                    <span className={styled.minButton2}>퍼플</span>                            
                                    <span style={{fontWeight: '500px'}}>양**</span>                            
                                </div>
                            </div>
                            <article className={styled.review_text}>
                                <div style={{padding: '0px 50px'}}>
                                    <div className={styled.reviewTitle}>[레드]</div>
                                    <p className={styled.reviewContent}>
                                        보일 때 사둬야하는 와인.<br/>
                                        샹볼만큼이나 쥐샹도 좋다
                                        제비꽃과 장미, 집중도 높은 검붉은 과실, 인텐스와 피니쉬 산미도 수준급.
                                        왠만한 프리미에 크뤼급 와인들은 뛰어넘는 듯 하다 
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className={styled.reviewBox}>
                            <div className={styled.rightWrap}>
                                <div className={styled.btnWrap}>
                                    <span className={styled.minButton2}>퍼플</span>                            
                                    <span style={{fontWeight: '500px'}}>홍**</span>                            
                                </div>
                            </div>
                            <article className={styled.review_text}>
                                <div style={{padding: '0px 50px'}}>
                                    <div className={styled.reviewTitle}>[레드]</div>
                                    <p className={styled.reviewContent}>
                                        올해 최고의 와인인 듯 하다. <br/>
                                        잘 묵은 사시까이아는 역시 기대 이상.<br/>
                                        민티함과 시원함, 블랙커런트, 수준급의 오크터치와 가죽과 흑연의 숙성 뉘앙스까지.
                                        섬세함과 생명력이 공존하는 와인이었다 
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className={styled.reviewBox}>
                            <div className={styled.rightWrap}>
                                <div className={styled.btnWrap}>
                                    <span className={styled.minButton2}>화이트</span>                            
                                    <span style={{fontWeight: '500px'}}>오**</span>                            
                                </div>
                            </div>
                            <article className={styled.review_text}>
                                <div style={{padding: '0px 50px'}}>
                                    <div className={styled.reviewTitle}>[레드]</div>
                                    <p className={styled.reviewContent}>
                                        인생 디저트 와인이라고 생각한다.<br/>
                                        파인애플과 복숭아의 열대과실과 다른 품종에서는 상상할 수 없는 높디 높은 산미. <br/>
                                        당도도 상당하지만 산미 덕분에 물리지 않는다. 복합미와 볼륨감도 좋아 혼자 완병이 가능할듯 </p>
                                </div>
                            </article>
                        </div>
                        <div className={styled.reviewBox}>
                            <div className={styled.rightWrap}>
                                <div className={styled.btnWrap}>
                                    <span className={styled.minButton2}>일반</span>                            
                                    <span style={{fontWeight: '500px'}}>윤**</span>                            
                                </div>
                            </div>
                            <article className={styled.review_text}>
                                <div style={{padding: '0px 50px'}}>
                                    <div className={styled.reviewTitle}>[레드]</div>
                                    <p className={styled.reviewContent}>쨍한 느낌, 백후추, 귤, 오렌지, 시트러스 향이 너무 좋다. <br/>쨍한 날에 비친 강 같은 느낌의 미네랄, 돌 같은 느낌.... 흰꽃 느낌이 난다. <br/>짭쪼름한게 백반과 먹기에 너무 좋다.</p>
                                </div>
                            </article>
                        </div>
                        
                    </article>
                    : 
                    <article style={{marginBottom: '200px'}}>
                        <div style={{width: '1000px', height:'500px', overflow: 'hidden', margin: '0 auto', marginBottom: '100px'}} >
                            <img src={img2} className={styled.zollim}/>
                        </div>
                        <img src={img} alt="와인맛"/>
                        <p className={styled.detailText}>
                            <b style={{color: '#580080'}}>소믈리에 한마디</b>
                            <br/>
                            은은한 향신료의 풍미와 잘 익은 과일향이 느껴지는 와인입니다. 적당한 바디감과 부드러운 탄닌으로 부담없이 마시기 좋아요.
                            <br/>
                            ▪ <b> 아로마 </b>| 딸기, 라즈베리, 제비꽃, 후추, 초콜릿
                            <br/>
                            ▪ <b>푸드 페어링</b> | 쉬림프 타코, 치킨커리
                            <br/>
                            <br/>
                            <b style={{color: '#580080'}}>알아두면 좋은 팁</b>
                            <br/>
                            ▪ <b>브리딩 및 시음 온도</b> | 오픈 후 바로 마셔도 괜찮으며, 14~17ºC로 드실 때 가장 맛있습니다.
                            <br/>
                            ▪ <b>추천 잔</b> | 보르도 타입 잔
                        </p>

                        <br/>
                        <hr/>
                        <div className={styled.swiperWrap}>
                        <h3 style={{marginBottom: '50px'}}>추천 와인</h3>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            scrollbar={{ draggable: true }}
                            navigation
                            // pagination={{ clickable: true }} //원형버튼
                            breakpoints={{
                            768: {
                            slidesPerView: 3,
                            },
                            }}
                        >
                            <SwiperSlide><div className={styled.bannerImg}><img src={wineBanner1}/></div><p>Amarone della Valpolicella<br/> Docg"Cavolo2017" </p></SwiperSlide>
                            <SwiperSlide><div className={styled.bannerImg}><img src={wineBanner2}/></div><p>Amarone della Valpolicella <br/> Docg"Cavolo2017" </p></SwiperSlide>
                            <SwiperSlide><div className={styled.bannerImg}><img src={wineBanner3}/></div><p>Amarone della Valpolicella <br/> Docg"Cavolo2017" </p></SwiperSlide>
                            <SwiperSlide><div className={styled.bannerImg}><img src={wineBanner4}/></div><p>Amarone della Valpolicella <br/> Docg"Cavolo2017" </p></SwiperSlide>
                            <SwiperSlide><div className={styled.bannerImg}><img src={wineBanner5}/></div><p>Amarone della Valpolicella <br/> Docg"Cavolo2017" </p></SwiperSlide>
                            <SwiperSlide><div className={styled.bannerImg}><img src={wineBanner6}/></div><p>Amarone della Valpolicella <br/> Docg"Cavolo2017" </p></SwiperSlide>
                            <SwiperSlide><div className={styled.bannerImg}><img src={wineBanner2}/></div><p>Amarone della Valpolicella <br/> Docg"Cavolo2017" </p></SwiperSlide>

                        </Swiper>
                        </div>
                        <img style={{marginBottom: '30px'}} src={winery} alt="제조장"/>
                        <p className={styled.detailText}>
                            <b style={{fontSize: '30px'}}>도멘 뒤 떵</b><br/>
                            <b>생산자</b> | 로렌느 & 제레미 고베르<br/>
                            <br/>
                            프랑스 랑그독 카르카손(Carcassonne)지역에 위치한 도멘 뒤 떵은 제레미 고베르와 로랑 고베르 부부가 운영하는 작은 규모의 와이너리입니다. 이들은 부르고뉴 내추럴 와인 계의 거물급 
                            와인 메이커, 프렉데릭 코사드에게서 와인 양조를 배웠는데요. 부르고뉴의 우아함을 남프랑스 스타일로 재구현한 와인을 생산하고 있죠. 깊은 양조 철학과 뛰어난 기술을 기반으로 규칙 없이도
                            아름다운 와인을 만들어 낼 수 있다는 자신감을 드러내며 좋은 와인을 만들기 위해 노력한답니다. 뿐만 아니라, 지속가능한 농법에 대해 끊임없이 연구하며 퀄리티에 대한 자부심을 지켜나가고 있습니다.
                        </p>
                        <img src={wineRegions}/>
                        
                        <p className={styled.detailText}>
                            <b style={{fontSize: '30px'}}>프랑스</b><br/>
                             <b>주요 지역(유명 산지) </b>| 보르도(메독), 부르고뉴(코트 도르, 샤블리), 샹파뉴, 알자스, 론, 랑그독 루시용 등 <br/> 
                             <b>대표 품종 </b> | 카베르네 소비뇽, 메를로, 말벡, 시라, 피노누아, 가메, 샤르도네, 소비뇽 블랑, 리슬링 
                            <br/> 
                            <br/> 
                            프랑스는 와인을 위한 나라입니다. 블렌딩의 예술을 보여주는 보르도, 우아한 피노 누아의 고향 부르고뉴, 섬세한 기포가 이는 마을 샹파뉴, 잠재력의 땅 루아르, 
                            자유와 도전이 넘치는 남프랑스까지. 테루아, 포도 품종, 포도재배 및 양조 기술 등 모든 면에 있어서 전 세계 와인 산업에 큰 영향을 준 거대한 뿌리라고 할 수 있죠.
                            <br/> 
                            <br/> 
                            무엇보다 프랑스는 체계적인 제도와 법을 통해 그 명성을 지켜왔어요. 1930년대에 AOC(원산지 통제 명칭) 규정을 통해 와인의 품질 분류법을 선구적으로 정립했죠. 지역, 포도 품종, 알코올 함량 최소치, 포도 재배 방식 등 생산지 별로 최소한의 생산 조건이 정해져 있어요.
                            육각형 별모양 땅에 좋아하는 와인 취향을 하나하나 점 찍으며 작은 와인 행성을 만들어보세요.
                        </p>
                    </article>}
                </div>
                
            </div>


        </div>
    )
}
export default RedWineDetail;