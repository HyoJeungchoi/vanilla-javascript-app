const goals = [
    {
        goal: "토이 프로젝트 앱 제작",
        detail: "3년 이내 달성 목표",
    },
    {
        goal: "개인 사업 준비",
        detail: "사업 아이템 구상 및 창업 경진대회 참여",
    },
    {
        goal: "재테크로 현금흐름 확보",
        detail: "연 10% 이상 수익  및 부동산 공부",
    },
    {
        goal: "개인 이모티콘 승인",
        detail: "이모티콘 심사 제출 완료",
    },
    {
        goal: "절약습관",
        detail: "월급 75% 이상 저축/투자",
    },
    {
        goal: "운동 건강 유지",
        detail: "매일 미라클헬스 1시간",
    },
    {
        goal: "개인 블로그 관리",
        detail: "매일 기록 습관 확보",
    },
] ;

const first = document.querySelector("#goals span:first-child");
const second = document.querySelector("#goals span:last-child");

function random() {
    const randomObj = goals[Math.floor(Math.random()*goals.length)];
    first.innerText = randomObj.goal;
    second.innerText = randomObj.detail;
};

random();
setInterval(random,3000);