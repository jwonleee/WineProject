import styled from './ReviewPage.module.css';

const ReviewPage = () => {

    return (
        <>
            <article className={styled.review_wrap}>
                {/* <h1 className={styled.title}>Review</h1> */}
                <div className={styled.review_box}>
                    <div className={styled.review_left}>
                        <h1 className={styled.title}>Review</h1>
                        <img className={styled.review_img} src={'/img/bottle.png'}/>
                    </div>
                    <div className={styled.review_right}>
                        <a className={styled.review_contentTitle} style={{fontSize: '20px'}}>
                            <p className={styled.review_star}><b>별점</b></p>
                            <p className={styled.review_reviewer}><b>작성자</b></p>
                            <p className={styled.review_titles}><b>제목</b></p>
                        </a>
                        <a>
                            <p className={styled.review_star}>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                            </p>
                            <p className={styled.review_reviewer}> wineLover </p>
                            <p className={styled.review_titles}> 와인 진짜 많이 마셔봤는데 이게 최고인 듯 </p>
                        </a>
                        <a>
                            <p className={styled.review_star}>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                            </p>
                            <p className={styled.review_reviewer}> threemean </p>
                            <p className={styled.review_titles}> 이 와인 분위기 낼 때 먹기 딱 좋아요 </p>
                        </a>
                        <a>
                            <p className={styled.review_star}>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                            </p>
                            <p className={styled.review_reviewer}> sion </p>
                            <p className={styled.review_titles}> 맛있긴 한데 저는 별로... </p>
                        </a>
                        <a>                                
                        <p className={styled.review_star}>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                            </p>
                            <p className={styled.review_reviewer}> seeyou </p>
                            <p className={styled.review_titles}> 맛있는데 가격이 ㄷㄷㄷ </p>
                        </a>
                        <a>
                            <p className={styled.review_star}>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                            </p>
                            <p className={styled.review_reviewer}> lalala </p>
                            <p className={styled.review_titles}> 최애 진짜 무겁지도 않고 달고 향도 장난 아님 </p>
                        </a>
                        <a>
                            <p className={styled.review_star}>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                            </p>                                
                            <p className={styled.review_reviewer}> omg8282 </p>
                            <p className={styled.review_titles}> 어...? 이게 와인이라고..? </p>
                        </a>
                        <a>
                            <p className={styled.review_star}>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                                <img src={'/img/icon_star.png'} style={{width: '20px'}}/>
                            </p>   
                            <p className={styled.review_reviewer}> haha123 </p>
                            <p className={styled.review_titles}> 와알못이 먹어도 </p>
                        </a>

                        <button className={styled.page_btn}>글쓰기</button>

                    </div>
                </div>

            </article>
        </>
    )
}

export default ReviewPage;