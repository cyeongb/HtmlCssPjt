window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    const sections = document.querySelectorAll('section');
    const content = document.querySelector('.content');
    const sectionContents = document.querySelectorAll('.section-content');
    
    // Banner content animation
    if (isInViewport(sections[0])) {
        content.classList.add('active');
    } else {
        content.classList.remove('active');
    }
    
    // Section content animations
    sectionContents.forEach((sectionContent, index) => {
        if (isInViewport(sections[index + 1])) {
            sectionContent.classList.add('active');
        } else {
            sectionContent.classList.remove('active');
        }
    });
});

// Navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 1.3 &&
        rect.bottom >= 0
    );
}

// Add active class to content on page load
window.addEventListener('load', function() {
    const content = document.querySelector('.content');
    content.classList.add('active');
});

// 지도 ==========================================================
  // 네이버 지도 초기화
  var mapOptions = {
    center: new naver.maps.LatLng(35.1795543, 128.1076769), // 진주시 중심 좌표
    zoom: 12,
    zoomControl: true,
    zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT
    }
};

var map = new naver.maps.Map('map', mapOptions);

// 진주시 중심에 마커 생성
var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.1795543, 128.1076769),
    map: map,
    title: '진주시'
});

// 반응형 지도 크기 조정
window.addEventListener('resize', function() {
    map.setSize(new naver.maps.Size(window.innerWidth, window.innerHeight));
});