import styled from './Footer.module.css';


const Footer = () => {
    return(
        <>
        <footer className={styled.footerBySemin}>
            <div className={styled. divsBox}>
                <div className={styled.divs} style={{fontFamily: 'Nanum Gothic'}}>서울 강남구 테헤란로 7길 7(역삼동 에스코빌딩 6층) / 대표자:정현경 / 사업자등록번호:220-90-07535 / 통신판매번호:제 강남-8062호 / TEL:02-561-1911 / FAX:02-538-2613</div>
                <div className={styled.divs} style={{fontFamily: 'Nanum Gothic'}}>서울 마포구 신촌로 176 중앙빌딩 / 대표자:정상은 / 사업자등록번호:220-95-00629 / 통신판매번호:제 2009-서울마포-00040호 / TEL:02-704-1711 / FAX:02-393-9218</div>
                <div className={styled.divs} style={{fontFamily: 'Nanum Gothic'}}>서울 마포구 신촌로 176 중앙빌딩 / 대표자:정재원 / 사업자등록번호:105-91-95789 / 통신판매번호:제 2014-서울마포-1125호 / TEL:02-313-1711 / FAX:02-393-9218</div>
                <div className={styled.divs} style={{fontFamily: 'Nanum Gothic'}}>학원설립/운영 등록번호: 제02197000003호 중앙정보처리학원 / 중앙정보기술인재개발원</div>
                <div className={styled.divs} style={{fontFamily: 'Nanum Gothic'}}>개인정보관리책임자:유창현, infoprotect@choongang.co.kr Copyright ⓒ 1969 by CHOONGANG INSTITUTE, All Rights Reserved.</div>
            </div>
        </footer>
        </>
    )
}

export default Footer;