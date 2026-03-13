class carousel{
    constructor(targetQuery,speed){
        //domの準備完了が終わったら実行される関数を登録する。
        document.addEventListener("DOMContentLoaded", loadingCompleate)
        //domの準備完了時に走る処理群の定義
        function loadingCompleate() {
            //一回だけ走る処理
            ///カルーセルをするための準備
            const carousel = document.querySelector(targetQuery);
            if (!carousel) {
                console.error("Carousel or CarouselContainer not found");
                return;
            }
            const CarouselItems = Array.from(carousel.children);

            CarouselItems.forEach((items) => {
                const cloneItems = items.cloneNode(true);
                items.cloneItems;
                carousel.appendChild(cloneItems);
            });

            ///PC,スマホ両方で使われる識別子群
            let currentX = 0;

            let hovering = false;
            let dragging = false;
            let prevDragX = 0;
            let currentDragX = 0;
            let dragDeltaX = 0;

            const scrollHalfWidth = carousel.scrollWidth / 2;

            ///スマホ用の識別子
            let TimerId;


            ///イベント関係の処理の登録&定義
            ////PCのタッチイベント
            carousel.addEventListener("mouseenter", () => {
                hovering = true;
            })
            carousel.addEventListener("mousedown", (mouse) => {
                dragging = true;
                prevDragX = mouse.pageX;
                currentDragX = mouse.pageX;
            })
            carousel.addEventListener("mousemove", (mouse) => {
                if (!dragging) return;
                currentDragX = mouse.pageX;
            })
            carousel.addEventListener("mouseup", () => {
                dragging = false;
            })
            carousel.addEventListener("mouseleave", () => {
                StartAutoScroll();
            })

            ////スマホのタッチイベント
            carousel.addEventListener("touchstart", (touch) => {
                hovering = true;
                dragging = true;
                prevDragX = touch.touches[0].pageX;
                currentDragX = touch.touches[0].pageX;
                clearTimeout(TimerId);
            })
            carousel.addEventListener("touchmove", (touch) => {
                if (!dragging) return;
                currentDragX = touch.touches[0].pageX;
            })
            carousel.addEventListener("touchend", (touch) => {
                TimerId = setTimeout(StartAutoScroll, 500);
            })
            carousel.addEventListener("touchecancel", (touch) => {
                TimerId = setTimeout(StartAutoScroll, 500);
            })




            //恒常的(毎フレーム)に走る処理
            autoScroll();
            function autoScroll() {
                dragDeltaX = currentDragX - prevDragX
                if (!hovering & !dragging) {
                    currentX += speed;
                }
                else if (hovering & dragging) {
                    currentX += dragDeltaX;
                }
                currentX = Repeat(currentX, -scrollHalfWidth)
                carousel.style.transform = `translateX(${currentX}px) translateZ(0)`;
                prevDragX = currentDragX;
                requestAnimationFrame(autoScroll);
            }
            //任意のタイミングで呼び出される関数
            function Repeat(t, length) {
                return t - Math.floor(t / length) * length;
            }
            function StartAutoScroll() {
                dragging = false;
                hovering = false;
            }


        }

    }
    
}
//都合が良いグローバルなユーザー定義関数群
function generateCarousel(targetQuery,speed){
   new carousel(targetQuery,speed);
}



