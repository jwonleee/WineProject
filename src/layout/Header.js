import { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from './Header.module.css';
import SearchContext, { SearchProvider } from "../SM/ContextAPI";
//import './general.css';



const Header = () => {
    let nav = useNavigate();
    const goHome = () => {
        nav('/'); // 경로
    }

    const goBack = () => {
        nav(-1); // 뒤로가기, +1은 앞으로 가기
    }

    const [oneSelect, setOneSelect] = useState(false);
    const [twoSelect, setTwoSelect] = useState(false);
    const [threeSelect, setThreeSelect] = useState(false);
    const [fourSelect, setFourSelect] = useState(false);



    const handleChild = (e) => {
        if (e.target.innerHTML === "레드와인") {
            setOneSelect(!oneSelect);
            setTwoSelect(false);
            setThreeSelect(false);
            setFourSelect(false);
        } else if (e.target.innerHTML === "화이트와인") {
            setOneSelect(false);
            setTwoSelect(!twoSelect);
            setThreeSelect(false);
            setFourSelect(false);
        } else if (e.target.innerHTML === "스파클링") {
            setOneSelect(false);
            setTwoSelect(false);
            setThreeSelect(!threeSelect);
            setFourSelect(false);
        } else if (e.target.innerHTML === "로제") {
            setOneSelect(false);
            setTwoSelect(false);
            setThreeSelect(false);
            setFourSelect(!fourSelect);
        }
    }

    const [st, setSt] = useState({ display: "none" });

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [search, setSearch] = useState();
    const searchInput = useRef(null);
    const searchButton = useRef(null);

    const navigate = useNavigate();
    const onEnterInput = () => {
        navigate(`/search`);
    };

    const handleSearch = () => {
        setSearch(searchInput.current.value);
    }

    const { state, action } = useContext(SearchContext);
    const goSearch = () => {
        action.setSearch({ search: search });
    }

    const enterSearch = (e) => {
        if (e.keyCode === 13) {
            handleSearch();
            goSearch();
            onEnterInput();
        }
    }

    return (
        <>
            <header className={styled.HeaderBySemin}>
                <div className={styled.fixedHeader}>
                    <div className={styled.HeaderBySemin_left}>
                        {/* <button className={styled.HeaderBySemin_leftchildbtn}> */}
                        <Link to="/" style={{ color: 'white' }} className={styled.HeaderBySemin_leftchildbtn}><img className={styled.HeaderLogo} style={{ width: '80px' }} src={'/realwinelogo2.png'}></img>
                        </Link>
                        {/* </button> */}
                        <ul className={styled.HeaderBySemin_leftchild} onClick={handleChild}><p style={{ fontFamily: 'Nanum Gothic' }}>레드와인</p>
                            <li className={!oneSelect ? styled.HeaderBySemin_lefthiddenchild_default : styled.HeaderBySemin_lefthiddenchild_clicked}><Link to='/red' style={{ color: 'white' }}><span>목록보기</span></Link></li>
                            <li className={!oneSelect ? styled.HeaderBySemin_lefthiddenchild_default : styled.HeaderBySemin_lefthiddenchild_clicked}><span>안주추천</span></li>
                        </ul>
                        <ul className={styled.HeaderBySemin_leftchild} onClick={handleChild}><p style={{ fontFamily: 'Nanum Gothic' }}>화이트와인</p>
                            <li className={!twoSelect ? styled.HeaderBySemin_lefthiddenchild_default : styled.HeaderBySemin_lefthiddenchild_clicked}><Link to='/white' style={{ color: 'white' }}><span>목록보기</span></Link></li>
                            <li className={!twoSelect ? styled.HeaderBySemin_lefthiddenchild_default : styled.HeaderBySemin_lefthiddenchild_clicked}><span>안주추천</span></li>
                        </ul>
                        <ul className={styled.HeaderBySemin_leftchild} onClick={handleChild}><p style={{ fontFamily: 'Nanum Gothic' }}>스파클링</p>
                            <li className={!threeSelect ? styled.HeaderBySemin_lefthiddenchild_default : styled.HeaderBySemin_lefthiddenchild_clicked}><Link to='/red' style={{ color: 'white' }}><span>목록보기</span></Link></li>
                            <li className={!threeSelect ? styled.HeaderBySemin_lefthiddenchild_default : styled.HeaderBySemin_lefthiddenchild_clicked}><span>안주추천</span></li>
                        </ul>
                        <ul className={styled.HeaderBySemin_leftchild} onClick={handleChild}><p style={{ fontFamily: 'Nanum Gothic' }}>로제</p>
                            <li className={!fourSelect ? styled.HeaderBySemin_lefthiddenchild_default : styled.HeaderBySemin_lefthiddenchild_clicked}><Link to='/red' style={{ color: 'white' }}><span>목록보기</span></Link></li>
                            <li className={!fourSelect ? styled.HeaderBySemin_lefthiddenchild_default : styled.HeaderBySemin_lefthiddenchild_clicked}><span>안주추천</span></li>
                        </ul>
                    </div>
                    <div className={`${styled.search}`}>
                        <input className={`${styled.searchInput}`} placeholder="검색어를 입력해주세요" onChange={handleSearch} onKeyDown={enterSearch} ref={searchInput} />
                        <Link to='/search'>
                            <button className={`${styled.searchBtn}`} onClick={goSearch} ref={searchButton}><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzNnYzNkgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVGMDA4MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0yNi4wODEgMjYuMDgxLTQuMTItNC4xMk0xNi40NjcgMjMuMzM0YTYuODY3IDYuODY3IDAgMSAwIDAtMTMuNzM0IDYuODY3IDYuODY3IDAgMCAwIDAgMTMuNzM0eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="></img></button>
                        </Link>
                    </div>
                </div>
                {/* <div className={styled.HeaderBySemin_left}>
                    <p className={styled.category} onClick={handleOn} >三 카테고리</p>

                </div> */}

            </header>
            {/* <div className={styled.hiddenBox}>
                <ul className={styled.hiddenCategory} style={st} onMouseOver={handleOn} onMouseOut={handleOn2}>
                    <li><Link to="/" style={{ color: 'white' }}>HOME</Link></li>
                    <li><Link to='/red' style={{ color: 'white' }}>RedWine</Link></li>
                    <li><Link to='/white' style={{ color: 'white' }}>WhiteWine</Link></li>
                    <li>Sparkling</li>
                    <li>Rose</li>
                </ul>
            </div> */}

            <div className={styled.topbutton} onClick={goToTop}>
                <span style={{ fontFamily: 'Nanum Gothic' }}>TOP</span>
            </div>

            <section>
                {/* 헤더 하위의 라우터 표현 */}
                <Outlet />
            </section>
        </>
    )
}

export default Header;