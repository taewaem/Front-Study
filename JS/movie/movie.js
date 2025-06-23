// 백틱 ` 사용 (작은다옴표 X)
// const infoUrl = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=90fe539871d70e71ce2b7bbc53a8a695&movieCd=${movieCd}`;
// const moviesUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=90fe539871d70e71ce2b7bbc53a8a695&targetDt=${targetDt}`;

const API_KEY = "90fe539871d70e71ce2b7bbc53a8a695";

// DOM 조작 기본
const dateInput = document.querySelector('#dateInput');
const btn = document.querySelector('#btn1');
const msg = document.querySelector('#msg');
const box = document.querySelector('.box3');

// 상세정보용 박스 생성 (옆에 표시될 영역)
let detailBox = null;

// 어제 날짜 구하기
function getYesterday() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
}

// 이벤트 리스너 (버튼 클릭 처리)
// 페이지 로드시 어제 날짜 설정
document.addEventListener('DOMContentLoaded', function() {
    dateInput.value = getYesterday();
    btn.addEventListener('click', searchBoxOffice);
});

// 비동기 함수 (fetch API 기본)
// 박스오피스 목록 검색
async function searchBoxOffice() {
    try {
        msg.textContent = '박스오피스 정보를 불러오는 중...';
        box.innerHTML = '';
        
        // 날짜 형식 변경 (2024-01-01 -> 20240101)
        const cleanDate = dateInput.value.replace(/-/g, '');
        // 백틱(`)을 사용한 템플릿 리터럴 - 변수를 ${} 안에 넣기
        const url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${cleanDate}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        const movies = data.boxOfficeResult.dailyBoxOfficeList;
        
        if (movies.length === 0) {
            msg.textContent = '해당 날짜의 데이터가 없습니다.';
            return;
        }
        
        // 박스오피스 목록 화면에 표시
        showBoxOfficeList(movies);
        
    } catch (error) {
        msg.textContent = '데이터를 가져오는데 실패했습니다.';
        console.error(error);
    }
}

// 박스오피스 목록을 화면에 표시 (클릭 가능하게)
function showBoxOfficeList(movies) {
    msg.innerHTML = `<strong>${dateInput.value}</strong> 박스오피스 TOP 10`;
    
    // 메인 컨테이너를 flex로 만들어서 좌우 배치
    box.style.display = 'flex';
    box.style.gap = '20px';
    
    // 영화 목록 부분
    let movieListHtml = '<div id="movie-list" style="flex: 1; min-width: 300px;">';
    movies.slice(0, 10).forEach(function(movie) {
        movieListHtml += `
            <div class="movie-item" data-moviecd="${movie.movieCd}" 
                 style="cursor: pointer; padding: 10px; border: 1px solid #ddd; margin-bottom: 8px; border-radius: 4px; background: #f9f9f9;">
                <strong>${movie.rank}위</strong> - ${movie.movieNm} 
                <span style="color: #666;">(${Number(movie.audiAcc).toLocaleString()}명 관람)</span>
            </div>
        `;
    });
    movieListHtml += '</div>';
    
    // 상세정보 부분 (처음엔 빈 상태)
    movieListHtml += `
        <div id="detail-box" style="flex: 1; min-width: 300px; padding: 20px; background: #f0f0f0; border-radius: 8px;">
            <p style="text-align: center; color: #888;">영화를 클릭하면 상세정보가 여기에 표시됩니다.</p>
        </div>
    `;
    
    box.innerHTML = movieListHtml;
    
    // detailBox 참조 저장
    detailBox = document.getElementById('detail-box');
    
    // 영화 클릭 이벤트 등록 (이벤트 위임)
    document.getElementById('movie-list').addEventListener('click', handleMovieClick);
}

// 영화 클릭시 상세정보 조회
async function handleMovieClick(event) {
    const movieItem = event.target.closest('.movie-item');
    if (!movieItem) return; // 영화 아이템이 아니면 무시
    
    const movieCd = movieItem.dataset.moviecd;
    
    try {
        msg.textContent = '영화 상세정보를 불러오는 중...';
        
        // 백틱(`)을 사용한 템플릿 리터럴 - 변수를 ${} 안에 넣기
        const url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${API_KEY}&movieCd=${movieCd}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        const movieInfo = data.movieInfoResult.movieInfo;
        
        // 상세정보 화면에 표시
        showMovieDetail(movieInfo);
        
    } catch (error) {
        msg.textContent = '상세정보를 가져오는데 실패했습니다.';
        console.error(error);
    }
}

// 영화 상세정보를 옆 박스에 표시
function showMovieDetail(movieInfo) {
    msg.textContent = `${movieInfo.movieNm} 상세정보 조회 완료`;
    
    // 감독 정보 (배열이므로 문자열로 합치기)
    const directors = movieInfo.directors && movieInfo.directors.length > 0 
        ? movieInfo.directors.map(d => d.peopleNm).join(', ')
        : '정보 없음';
    
    // 주요 배우 정보 (상위 5명만)
    const actors = movieInfo.actors && movieInfo.actors.length > 0
        ? movieInfo.actors.slice(0, 5).map(a => a.peopleNm).join(', ')
        : '정보 없음';
    
    // 장르 정보
    const genres = movieInfo.genres && movieInfo.genres.length > 0
        ? movieInfo.genres.map(g => g.genreNm).join(', ')
        : '정보 없음';
    
    // 상세정보를 오른쪽 박스에 표시
    detailBox.innerHTML = `
        <h3 style="margin-top: 0; color: #333;">${movieInfo.movieNm}</h3>
        <div style="line-height: 1.6;">
            <p><strong>영문제목:</strong> ${movieInfo.movieNmEn || '정보 없음'}</p>
            <p><strong>감독:</strong> ${directors}</p>
            <p><strong>주연배우:</strong> ${actors}</p>
            <p><strong>상영시간:</strong> ${movieInfo.showTm || '정보 없음'}분</p>
            <p><strong>장르:</strong> ${genres}</p>
            <p><strong>제작년도:</strong> ${movieInfo.prdtYear || '정보 없음'}년</p>
        </div>
    `;
}