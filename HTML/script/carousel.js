window.addEventListener("load", function () {
    var carousels = this.document.getElementsByClassName("carousel");

    //캐러셀 이벤트 등록
    for (var i = 0; i < carousels.length; i++) {
        this.addEventListener(carousels[i]);

    }
});

//이미지 크기를 받아서 슬라이드 버튼이벤트에 등록하는 함수
function addEventToCarousel(carouselElem) {
    var ulElem = carouselElem.querySelector("ul");
    var liElems = carouselElem.querySelector("li");

    //이미지지 가로 사이즈 구현
    //clientWidth: 요소의 내용 영역의 너비
    var liWidth = liElems[0].clientWidth;
    var adjustedWidth = liElems.length * liWidth;
    ulElem.style.width = adjustedWidth;

    //슬라이드 버튼 이벤트 등록
    var slideButtons = carouselElem.querySelectorAll(".slide")


    for (var i = 0; i < slideButtons.length; i++) {
        slideButtons.addEventListener("click", createListenersSlide(carouselElem));


    }
    function createListenersSlide(carouselElem) {
        return function (event) {
            //event.currentTarget: 이벤트가 발생한 요소
            //즉 현재 클릭한 버튼
            var clickedButton = event.currentTarget;

            //li 요소 가져오기
            var liElems = carouselElem.querySelectorAll("li");
            //li 개수
            var liCount = liElems.length;

            var currentIndex = carouselElem.attributes.data.values;


            if (clickedButton.className.includes("right") && currentIndex < liCount - 1) {

                currentIndex++;
                scrollDiv(carouselElem, currentIndex);
            } else if (clickedButton.className.includes("left") && currentIndex < liCount - 1) {

                currentIndex++;
                scrollDiv(carouselElem, currentIndex);
            }
            //인디케이터 업데이트
            updateIndicator(carouselElem, currentIndex);
            //슬라이드 버튼 보여줌 여부 업데이트
            updateSlideButtonVisible(carouselElem, currentIndex, liCount);

            //새롭게 보여지는 이미지 인덱스 값을 현제 data 값으로 업데이트
            carouselElem.attributes.data.value = currentIndex;
        };

        function scrollDiv(carouselElem, nextIndex) {
            var scrollable = carouselElem.querySelector("div");
            var liWidth = scrollable.clientWidth;
            var newLeft = liWidth * nextIndex; //600*3=1800

            scrollable.scrollTo({ left: newLeft, behavior: "smooth" });

        };

        function updateIndicator(carouselElem, currentIndex) {
            var indicators = carouselElem.querySelectorAll("footer>div");
            for (var i = 0; i < indicators.length; i++) {
                if (currentIndex == i) {
                    indicators[i].className = "active";
                }
                else{
                    indicators[i].className=""
                }
            }
        };

        function updateSlideButtonVisible(carouselElem, currentIndex, liCount){
         var left = carouselElem.querySelector(".slide-left");
         var right = carouselElem.querySelector(".slide-right");

        }


    };
}