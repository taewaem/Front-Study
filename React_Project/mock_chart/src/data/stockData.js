const STOCKS = [
    { code: '005930', name: '삼성전자', basePrice: 70000 },
    { code: '000660', name: 'SK하이닉스', basePrice: 130000 },
    { code: '035420', name: 'NAVER', basePrice: 200000 },
    { code: '051910', name: 'LG화학', basePrice: 400000 },
    { code: '096770', name: 'SK이노베이션', basePrice: 150000 },
];


const generateCurrentPrices = () => {
  return STOCKS.map(stock => {

    // basePrice 기준으로 -5% ~ +5% 범위에서 랜덤 현재가 생성
    const changeRate = (Math.random() - 0.5) * 0.1; // -0.05 ~ +0.05
    const currentPrice = Math.round(stock.basePrice * (1 + changeRate));
    const previousPrice = stock.basePrice;
    
    // 거래량도 랜덤 생성 (100만 ~ 2000만)
    const volume = Math.floor(Math.random() * 19000000) + 1000000;
    
    return {
      ...stock,
      currentPrice,
      previousPrice,
      volume,
    };
  });
};

export const stocksData = generateCurrentPrices();

//계산된 값들은 함수로 만들어서 사용
export const getStockInfo = (stock) => {
  const change = stock.currentPrice - stock.previousPrice;  // 변동가격
  const changeRate = ((change / stock.previousPrice) * 100).toFixed(2);  // 변동률 (소수점 2자리)
  
  return {
    ...stock,
    change,           
    changeRate,       
    isUp: change > 0, // 상승인지 하락인지 (true/false)
  };
};

//특정 종목 찾기 함수
export const getStockByName = (name) => {
  return stocksData.find(stock => stock.name === name);
};
export const getStockByCode = (code) => {
  return stocksData.find(stock => stock.code === code);
};

// 포트폴리오 (내가 가진 주식들)
export const portfolio = {
  cash: 10000000,    // 보유 현금 (1000만원)
  stocks: {
    '005930': 0,    
    '000660': 0,    
    '035420': 0,    
    '051910': 0,    
    '096770': 0,    
  }
};

// 자주 사용하는 유틸리티 함수들
export const formatPrice = (price) => {
  return price.toLocaleString() + '원';  // 1,000원 형태로 포맷
};

export const formatVolume = (volume) => {
  return volume.toLocaleString() + '주';
};

export const formatChange = (change, changeRate) => {
  const sign = change >= 0 ? '+' : '';
  return `${sign}${formatPrice(change)} (${sign}${changeRate}%)`;
};


/**
 * 알아야 할 부분들!
 
   - STOCKS 배열을 map()으로 변환해서 현재가 정보 추가
   - find()로 특정 종목 검색

2. 데이터 구조의 확장성
   - 새로운 종목 추가하려면 STOCKS 배열에만 추가하면 됨
   - portfolio.stocks에도 해당 종목코드 추가 필요

3. 함수형 프로그래밍
   - generateCurrentPrices(): 순수 함수로 새 배열 생성
   - map(), find() 같은 배열 메서드 활용

4. 사용 예시:
   import { stocksData, getStockInfo, formatPrice } from './stockData';
   
   stocksData.forEach(stock => {
     const info = getStockInfo(stock);
     console.log(`${stock.name}: ${formatPrice(info.currentPrice)}`);
   });
 */