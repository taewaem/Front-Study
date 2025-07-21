import { useState } from 'react';

export const usePortfolio = () => {
  const [portfolio, setPortfolio] = useState({
    cash: 10000000,    // 보유 현금 (1000만원)
    stocks: {
      '005930': 0,    
      '000660': 0,    
      '035420': 0,    
      '051910': 0,    
      '096770': 0,    
    }
  });

  // 매수 로직
  const buyStock = (stockInfo) => {
    const buyPrice = stockInfo.currentPrice;
    
    if (portfolio.cash < buyPrice) {
      alert(`현금이 부족합니다!\n보유 현금: ${portfolio.cash.toLocaleString()}원\n필요 금액: ${buyPrice.toLocaleString()}원`);
      return false;
    }

    // 포트폴리오 업데이트
    setPortfolio(prevPortfolio => ({
      ...prevPortfolio,
      cash: prevPortfolio.cash - buyPrice,
      stocks: {
        ...prevPortfolio.stocks,
        [stockInfo.code]: prevPortfolio.stocks[stockInfo.code] + 1
      }
    }));

    // 성공 메시지
    alert(`${stockInfo.name} 1주 매수 완료!\n매수가: ${buyPrice.toLocaleString()}원`);
    console.log('매수 완료:', stockInfo);
    return true;
  };

  // 매도 로직
  const sellStock = (stockInfo) => {
    const sellPrice = stockInfo.currentPrice;
    const currentQuantity = portfolio.stocks[stockInfo.code];
    
    // 보유 주식 없음 체크
    if (currentQuantity <= 0) {
      alert(`보유한 ${stockInfo.name} 주식이 없습니다!`);
      return false;
    }

    // 포트폴리오 업데이트
    setPortfolio(prevPortfolio => ({
      ...prevPortfolio,
      cash: prevPortfolio.cash + sellPrice,
      stocks: {
        ...prevPortfolio.stocks,
        [stockInfo.code]: prevPortfolio.stocks[stockInfo.code] - 1
      }
    }));

    // 성공 메시지
    alert(`${stockInfo.name} 1주 매도 완료!\n매도가: ${sellPrice.toLocaleString()}원`);
    console.log('매도 완료:', stockInfo);
    return true;
  };

  // 커스텀 훅에서 반환할 값들
  return {
    portfolio,    // 현재 포트폴리오 상태
    buyStock,     // 매수 함수
    sellStock,    // 매도 함수
  };
};

/* 
1. 커스텀 훅 패턴 ⭐⭐⭐
   - 비즈니스 로직을 컴포넌트에서 분리
   - 재사용 가능한 로직 모듈화
   - use로 시작하는 함수명 (React 규칙)

2. 관심사 분리 (Separation of Concerns) ⭐⭐⭐
   - App.jsx: UI 구조만 담당
   - usePortfolio.js: 포트폴리오 로직만 담당
   - 각자의 역할이 명확해짐

3. 함수 반환값 패턴
   - 상태와 함수들을 객체로 반환
   - 구조분해할당으로 필요한 것만 가져다 사용

4. 성공/실패 반환
   - 함수가 true/false를 반환해서 결과 확인 가능
   - 호출하는 쪽에서 추가 처리 가능

5. 사용법:
   const { portfolio, buyStock, sellStock } = usePortfolio();
*/