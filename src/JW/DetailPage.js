import styled from './DetailPage.module.css';

const DetailPage = () => {

    return (
        <>
            <h1 className={styled.title}>White Wine?</h1>
            <article className={styled.type_wrap}>
                {/* <h3>화이트 와인 종류</h3> */}
                <div className={styled.type_text}>
                    <img className={styled.type_img1} src={'/img/s1.jpg'}/>
                    <img className={styled.type_img2} src={'/img/10.jpg'}/>
                    <div className={styled.type_info}>
                        <p>
                        화이트 와인은 물같이 맑은 색부터 노란 황금색까지 다양합니다.
                        대부분의 화이트 와인들은 파인애플, 사과, 복숭아 등 다양한 열대 과일의 향기가 느껴지는 경우가 많아요.
                        과실이 주는 특유의 산미는 상큼하고, 달콤한 맛은 감질나게 하죠.<br/>
                        아페리티프 Aperitif, 즉 식전주로 혹은 전채요리와 함께 많이 사용되며 대부분의 한식들과 생선류와도 어울리는 것이 화이트 와인들이예요.
                        <br/>
                        <br/>
                        화이트 와인은 대부분 청포도를 가지고 만드는데요.
                        화이트 와인을 만들 때에는 포도의 껍질을 사용하지 않으므로 타닌과 같은 떫은맛이 거의 없어요.
                        오크통 숙성을 할 경우 약간의 타닌이 느껴지지만 레드 와인에 비해 매우 적은 편이예요.
                        </p>

                        <h1>White wine Type</h1>

                        <div className={styled.type_contentWrap}>
                            <div className={styled.type_content}>
                                <img src={'/img/icon1.png'} style={{width: '70px', opacity: '0.7'}}/>
                                <h3>샤르도네</h3>
                                <span>프랑스</span><br/>
                                <span>드라이, 산미없음</span><br/>
                                <span>풍부한 과일향, 꽃향, 버터향</span>
                            </div>
                            <div className={styled.type_content}>
                                <img src={'/img/icon2.png'} style={{width: '70px', opacity: '0.7'}}/>
                                <h3>소비뇽블랑</h3>
                                <span>프랑스</span><br/>
                                <span>높은 산도, 톡쏘는 맛</span><br/>
                                <span>멜론향, 허브향</span>
                            </div>
                            <div className={styled.type_content}>
                                <img src={'/img/icon3.png'} style={{width: '70px', opacity: '0.7'}}/>
                                <h3>리슬링</h3>
                                <span>독일</span><br/>
                                <span>단맛, 상큼한 맛</span><br/>
                                <span>오렌지향, 상큼한 과일향</span>
                            </div>
                            <div className={styled.type_content}>
                                <img src={'/img/icon4.png'} style={{width: '70px', opacity: '0.7'}}/>
                                <h3>모스카토</h3>
                                <span>이탈리아</span><br/>
                                <span>달콤함</span><br/>
                                <span>아카시아, 벌꿀향</span>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </article>

            <article className={styled.current_wrap}>
                <img className={styled.current_img1} src={'/img/p10.jpg'}/>
                <img className={styled.current_img2} src={'/img/18.jpg'}/>
                <img className={styled.current_img3} src={'/img/3.jpg'}/>
                <ul>
                    <li><b>주종 </b>| 화이트</li>
                    <li><b>국가 </b>| 프랑스</li>
                    <li><b>와이너리 </b>| 도멘 미쉘롯</li>
                    <li><b>품종 </b>| 샤르도네</li>
                    <li><b>도수 </b>| 12.5%</li>
                    <li><b>컬러 </b>| 금빛 테두리와 빛나는 볏짚 컬러</li>
                    <li><b>용량 </b>| 750ml</li>
                    <li><b>오픈 타입 </b>| 코르크 마개</li>
                </ul>
                <p>뫼르소는 샤르도네 품종으로 유명한 부르고뉴 지역의 유명 산지입니다.<br/>
                   뫼르소에는 3개의 유명한 프리미에 크뤼 포도밭이 존재하죠.<br/>
                   그중 하나인 페리에르(Les Perrières) 포도밭의 포도로 양조한 와인으로 아카시아꽃, 꿀, 라임, 크렘 브륄레, 아몬드, 헤이즐넛 등 다채로운 향과 놀라운 맛을 지녔어요.
                   밀도 있는 풍만한 바디와 구조감이 인상적이며 충분한 숙성 잠재력을 지녔어요.<br/>
                   와인의 순수한 풍미를 가리는 짙은 오크 캐릭터를 지양하기 때문에 새로운 오크는 약 15% 정도만 사용했어요.
                   프랑스의 전설적인 셰프인 폴 보퀴즈가 선택한 뛰어난 퀄리티의 뫼르소를 꼭 경험해 보세요.</p>
            </article>

            <article className={styled.tasting_wrap}>
                <h3>Tasting note</h3>
                <img className={styled.tasting_img} src={'/img/tasting.jpg'}/>
                <div className={styled.tasting_text}>
                    <p>
                        다채로운 레이어의 향과 맛을 보여주며 풍만한 바디와 완벽한 구조감, 긴 여운, 뛰어난 숙성 잠재력을 지녔어요.<br/>
                        뫼르소를 사랑하는 분들이라면 꼭 한번 맛봐야 할 특별한 와인이에요. 
                    </p>
                    <br/>
                    <p>
                        <b>아로마</b> | 아카시아꽃, 꿀, 라임, 크렘 브륄레, 아몬드, 헤이즐넛<br/> 
                        <b>푸드 페어링</b> | 흰살 생선 요리, 갈릭 버터에 구운 갑각류, 에푸아스 치즈
                    </p>
                    <br/>
                    <p>
                        <b>브리딩 및 시음 온도</b> | 오픈 후 바로 마셔도 괜찮으며, 10~12℃일 때 드시면 가장 맛있습니다.<br/> 
                        <b>추천 잔</b> |  화이트와인 잔 
                    </p>
                </div>
            </article>

            <article className={styled.place_wrap}>
                <h3>Winery & Regions</h3>                
                <div className={styled.place_img1}>
                    <h3>DOMAINE MICHELOT</h3>
                    <p className={styled.producer}>Nicolas Mestre</p>
                    <p>
                    오직 뫼르소만을 6세대에 걸쳐 양조해온 유서 깊은 와이너리입니다.
                    뫼르소 프리미에 크뤼 4개, 빌라주 7개를 포함해 약 19ha 규모의 포도밭을 소유하고 있죠.<br/>
                    뛰어난 품질의 포도를 얻기 위해 매우 섬세하게 짠 경작 스케줄에 따라 움직이며, 각 테루아가 가진 캐릭터와 퀄리티를 최대한 표현하고자 노력합니다.<br/>
                    뫼르소의 토양은 진흙 토대에 석회석, 자갈이 어우러져 있는데요. 이런 환경 덕분에 풍만한 볼륨감, 놀라운 균형미, 매력적인 산도와 피니시를 가진 와인을 탄생시킬 수 있어요.<br/>
                    현재는 이십 대의 젊은 세대가 와인 메이킹 노하우를 이어 받아 전통적인 부르고뉴 스타일의 양조를 지켜나가고 있습니다.<br/> 
                    </p>
                </div>
                <div className={styled.place_regions}>
                    <img className={styled.place_img2} src={'/img/regions.jpg'}/><br/>
                    <h3 className={styled.place_rtitle}>France</h3>
                    <p>
                        <b>주요 지역(유명 산지)</b> | 보르도(메독), 부르고뉴(코트 도르, 샤블리), 샹파뉴, 알자스, 론, 랑그독 루시용 등<br/> 
                        <b>대표 품종</b> |  카베르네 소비뇽, 메를로, 말벡, 시라, 피노누아, 가메, 샤르도네, 소비뇽 블랑, 리슬링 
                    </p>
                    <p>
                    프랑스는 와인을 위한 나라입니다.
                    블렌딩의 예술을 보여주는 보르도, 우아한 피노 누아의 고향 부르고뉴, 섬세한 기포가 이는 마을 샹파뉴, 잠재력의 땅 루아르, 자유와 도전이 넘치는 남프랑스까지.
                    테루아, 포도 품종, 포도재배 및 양조 기술 등 모든 면에 있어서 전 세계 와인 산업에 큰 영향을 준 거대한 뿌리라고 할 수 있죠.
                    </p>
                    <p>
                    무엇보다 프랑스는 체계적인 제도와 법을 통해 그 명성을 지켜왔어요.
                    1930년대에 AOC(원산지 통제 명칭) 규정을 통해 와인의 품질 분류법을 선구적으로 정립했죠.
                    지역, 포도 품종, 알코올 함량 최소치, 포도 재배 방식 등 생산지 별로 최소한의 생산 조건이 정해져 있어요.
                    육각형 별모양 땅에 좋아하는 와인 취향을 하나하나 점 찍으며 작은 와인 행성을 만들어보세요. 
                    </p>   
                </div>
            </article>
        </>
    )
}

export default DetailPage;