import '../styles/Portfolio.css';

function Portfolio({ portfolio, stocksData }) {
  // 보유 주식의 현재 가치 계산
  const calculateStockValue = () => {
    let totalStockValue = 0;
    
    // 각 보유 주식의 현재 가치 계산
    Object.entries(portfolio.stocks).forEach(([stockCode, quantity]) => {
      if (quantity > 0) {
        // 해당 주식의 현재가 찾기
        const stock = stocksData.find(s => s.code === stockCode);
        if (stock) {
          totalStockValue += stock.currentPrice * quantity;
        }
      }
    });
    
    return totalStockValue;
  };

  //보유 주식 목록 생성
  const getOwnedStocks = () => {
    const ownedStocks = [];
    
    Object.entries(portfolio.stocks).forEach(([stockCode, quantity]) => {
      if (quantity > 0) {
        const stock = stocksData.find(s => s.code === stockCode);
        if (stock) {
          ownedStocks.push({
            ...stock,
            quantity,
            totalValue: stock.currentPrice * quantity
          });
        }
      }
    });
    
    return ownedStocks;
  };

  const stockValue = calculateStockValue();
  const totalAssets = portfolio.cash + stockValue;
  const ownedStocks = getOwnedStocks();

  return (
    <div className="portfolio">
      <h2 className="portfolio-title">💰 내 포트폴리오</h2>
      
      {/* 자산 현황 */}
      <div className="portfolio-summary">
        <div className="asset-item">
          <span className="asset-label">보유 현금</span>
          <span className="asset-value cash">{portfolio.cash.toLocaleString()}원</span>
        </div>
        
        <div className="asset-item">
          <span className="asset-label">주식 가치</span>
          <span className="asset-value stocks">{stockValue.toLocaleString()}원</span>
        </div>
        
        <div className="asset-item total">
          <span className="asset-label">총 자산</span>
          <span className="asset-value">{totalAssets.toLocaleString()}원</span>
        </div>
      </div>

      {/* 보유 주식 목록 */}
      {ownedStocks.length > 0 ? (
        <div className="owned-stocks">
          <h3 className="owned-stocks-title">보유 주식</h3>
          {ownedStocks.map(stock => (
            <div key={stock.code} className="owned-stock-item">
              <div className="owned-stock-info">
                <span className="owned-stock-name">{stock.name}</span>
                <span className="owned-stock-quantity">{stock.quantity}주</span>
              </div>
              <div className="owned-stock-value">
                <span className="owned-stock-price">
                  {stock.currentPrice.toLocaleString()}원
                </span>
                <span className="owned-stock-total">
                  총 {stock.totalValue.toLocaleString()}원
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-stocks">
          <p>보유한 주식이 없습니다. 주식을 매수해보세요!</p>
        </div>
      )}
    </div>
  );
}

export default Portfolio;

/* 

1. 계산 로직 분리 ⭐⭐
   - calculateStockValue(): 복잡한 계산을 별도 함수로
   - getOwnedStocks(): 데이터 변환 로직을 별도 함수로

2. Object.entries() 활용 ⭐⭐
   - 객체를 배열로 변환해서 순회
   - [key, value] 구조분해할당으로 편리하게 사용

3. 조건부 렌더링 ⭐⭐
   - ownedStocks.length > 0 ? <목록> : <빈 상태>
   - 데이터가 있을 때와 없을 때 다른 UI 표시

4. 계산된 값 표시
   - toLocaleString()으로 천 단위 콤마
   - 실시간으로 계산되는 총 자산, 주식 가치

5. find() 메서드 활용 ⭐⭐
   - 배열에서 특정 조건의 요소 찾기
   - stocksData.find(s => s.code === stockCode)

6. 데이터 변환 패턴
   - 원본 데이터 + 계산된 값을 조합한 새 객체 생성
   - { ...stock, quantity, totalValue }
*/