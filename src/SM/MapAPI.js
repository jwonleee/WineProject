/* global kakao */
import React, { useEffect, useState } from "react";
import { MapList } from "./MapList";
import styled from './MapAPI.module.css';

const { kakao, daum } = window;
const MapAPI = () => {
    const [UserAddr, setUserAddr] = useState();

    //	b64d360857aefac8da414760b7e5f360
    useEffect(() => {
        if (!UserAddr) {
            // if (UserAddr === undefined) {
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(37.4995, 127.0305),
                level: !UserAddr ? 14 : 5
            };
            const map = new kakao.maps.Map(container, options);

            var clusterer = new kakao.maps.MarkerClusterer({
                map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
                averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
                minLevel: 10 // 클러스터 할 최소 지도 레벨 
            });

            var markers = [];

            MapList.forEach((el) => {
                // 마커를 생성합니다

                var marker = new kakao.maps.Marker({
                    //마커가 표시 될 지도
                    map: map,
                    //마커가 표시 될 위치
                    position: new kakao.maps.LatLng(el.FCLTY_LA, el.FCLTY_LO),
                    //마커에 hover시 나타날 title
                    title: el.FCLTY_NM + el.TEL_NO,
                });

                var iwContent = `<div style="width:300px; padding:5px; text-align:center">${el.FCLTY_NM}<br>${el.TEL_NO}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

                var infowindow = new kakao.maps.InfoWindow({
                    content: iwContent,
                    removable: iwRemoveable
                });

                kakao.maps.event.addListener(marker, 'click', function () {
                    // 마커 위에 인포윈도우를 표시합니다
                    infowindow.open(map, marker);
                });

                markers.push(marker);

            });

            clusterer.addMarkers(markers);

        } else {
            console.log("gd");

            var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                mapOption = {
                    center: new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
                    level: 5 // 지도의 확대 레벨
                };

            //지도를 미리 생성
            var map = new daum.maps.Map(mapContainer, mapOption);

            clusterer = new kakao.maps.MarkerClusterer({
                map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
                averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
                minLevel: 10 // 클러스터 할 최소 지도 레벨 
            });

            markers = [];

            //주소-좌표 변환 객체를 생성
            var geocoder = new daum.maps.services.Geocoder();

            var imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/HERE_logo.svg', // 마커이미지의 주소입니다    
                imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
                imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

            //마커를 미리 생성
            var marker = new daum.maps.Marker({
                position: new daum.maps.LatLng(37.537187, 127.005476),
                map: map,
                image: markerImage
            });



            var addr = UserAddr; // 최종 주소 변수

            // 주소 정보를 해당 필드에 넣는다.
            // document.getElementById("sample5_address").value = addr;
            // 주소로 상세 정보를 검색
            geocoder.addressSearch(UserAddr, function (results, status) {
                // 정상적으로 검색이 완료됐으면
                if (status === daum.maps.services.Status.OK) {

                    MapList.forEach((el) => {
                        // 마커를 생성합니다

                        var marker = new kakao.maps.Marker({
                            //마커가 표시 될 지도
                            map: map,
                            //마커가 표시 될 위치
                            position: new kakao.maps.LatLng(el.FCLTY_LA, el.FCLTY_LO),
                            //마커에 hover시 나타날 title
                            title: el.FCLTY_NM + el.TEL_NO,

                        });

                        var iwContent = `<div style="width:300px; padding: 5px; text-align:center">${el.FCLTY_NM}<br>${el.TEL_NO}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                            iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

                        var infowindow = new kakao.maps.InfoWindow({
                            content: iwContent,
                            removable: iwRemoveable
                        });

                        kakao.maps.event.addListener(marker, 'click', function () {
                            // 마커 위에 인포윈도우를 표시합니다
                            infowindow.open(map, marker);
                        });

                        markers.push(marker);

                    });




                    clusterer.addMarkers(markers);


                    var result = results[0]; //첫번째 결과의 값을 활용

                    // 해당 주소에 대한 좌표를 받아서
                    var coords = new daum.maps.LatLng(result.y, result.x);
                    // 지도를 보여준다.
                    mapContainer.style.display = "block";
                    map.relayout();
                    // 지도 중심을 변경한다.
                    map.setCenter(coords);
                    // 마커를 결과값으로 받은 위치로 옮긴다.
                    marker.setPosition(coords)
                }
            });
        }
    }, [UserAddr]);



    const handlePostCode = () => {
        const btn = document.getElementById("findAddrBtn");
        btn.disabled = true;
        new daum.Postcode({

            onclose: function () {
                btn.disabled = false;

            },

            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                setUserAddr(data.address);
                btn.disabled = false;
            }
        }).open();
    }





    return (
        <>

            <div className={styled.map} id="map" style={{
                width: '500px',
                height: '500px'
            }}>
            </div>
            <div className={styled.user_address}>{UserAddr}</div>
            <button onClick={handlePostCode} id="findAddrBtn" disabled={false} className={styled.search_btn}>주소찾기</button>
            { }
        </>
    )
}

export default MapAPI;