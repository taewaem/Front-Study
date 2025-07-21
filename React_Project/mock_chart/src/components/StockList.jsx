import StockItem from "./StockItem";

/**
 * 배열 렌더링과 이벤트 전달
 */
function StockList({ stocks, onBuyStock, onSellStock, portfolio }) {
  if (!stocks || stocks.length === 0) {
    return (
      <div className="stock-list-empty">
        표시할 주식이 없습니다.
      </div>
    );
  }

  const handleBuyStock = (stockInfo) => {
    console.log('매수 요청:', stockInfo.name); // 개발용 로그
    if (onBuyStock) {
      onBuyStock(stockInfo); // 부모 컴포넌트에 전달
    }
  };

  const handleSellStock = (stockInfo) => {
    console.log('매도 요청:', stockInfo.name); // 개발용 로그
    if (onSellStock) {
      onSellStock(stockInfo); // 부모 컴포넌트에 전달
    }
  };

  return (
    <div className="stock-list">
      <h2 className="stock-list-title">주식 종목</h2>
      
      {/* 
        - map() 함수로 배열 렌더링 
        - 배열의 각 항목을 컴포넌트로 변환
        - key prop은 React 성능 최적화를 위해 필수!
      */}
      {stocks.map((stock) => (
        <StockItem
          key={stock.code}           // 실무 필수: 고유한 key 값
          stock={stock}              // 각 주식 데이터 전달
          onBuy={handleBuyStock}     // 매수 함수 전달
          onSell={handleSellStock}   // 매도 함수 전달
          ownedQuantity={portfolio?.stocks[stock.code] || 0}  // 보유 수량 전달
        />
      ))}
    </div>
  );
}

export default StockList;

/* 
1. 배열 렌더링 (최고 중요!)
   stocks.map((stock) => <StockItem key={stock.code} stock={stock} />)
   
   - map(): 배열의 각 요소를 JSX로 변환
   - key prop: React가 각 항목을 구분하기 위해 필요
   - 고유한 값 사용 (여기서는 stock.code)

2. key prop의 중요성
   - React가 변경사항을 효율적으로 감지
   - 고유하고 안정적인 값 사용 (배열 인덱스 말고!)
   - stock.code처럼 데이터의 고유 ID 사용

3. 이벤트 버블링 패턴
   StockList → StockItem → Button
   클릭 이벤트가 위로 올라가면서 최종적으로 부모에서 처리

4. 방어 코딩
   - !stocks || stocks.length === 0 체크
   - onBuyStock && onBuyStock() 패턴

5. 개발용 로그
   - console.log()로 디버깅 정보 확인
   - 실제 배포시에는 제거

6. 사용 예시:
   <StockList 
     stocks={stocksData}
     onBuyStock={(stock) => alert(`${stock.name} 매수!`)}
     onSellStock={(stock) => alert(`${stock.name} 매도!`)}
   />
*/