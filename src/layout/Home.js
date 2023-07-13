import RedWineAPI from "../SY/RedWineAPI";
import WhiteWineAPI from "../JW/WhiteWineAPI";
import { Link } from "react-router-dom";
import styled from './Home.module.css';
const Home = () => {


    return(
        <>
        {/* <RedWineAPI/>
        <WhiteWineAPI/> */}

        
        <Link to='./red'>
        <div className={`${styled.section}  ${styled.firstImg}`}>
            <div className={styled.txt_wrap}>
				<div className={styled.txt_box}>
					<p className={styled.txt_boxfont} >Red Wine</p>
				</div>
			</div>
        </div>
        </Link>
        <Link to='./white'>
        <div className={`${styled.section}  ${styled.secondImg}`}>
            <div className={styled.txt_wrap}>
				<div className={styled.txt_box}>
                    <p className={styled.txt_boxfont} style={{color:'#fff'}}>White Wine</p>
				</div>
			</div>
        </div>
        </Link>

        </>
    )
}

export default Home;