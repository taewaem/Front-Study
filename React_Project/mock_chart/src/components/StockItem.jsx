import Button from './Button';
import { getStockInfo, formatPrice, formatVolume, formatChange } from '../data/stockData';
import '../styles/Stock.css';

function StockItem({ stock, onBuy, onSell, ownedQuantity = 0 }) {
  //계산된 정보를 컴포넌트에서 가져오기
  const stockInfo = getStockInfo(stock);
  
  //상승/하락/보합에 따른 CSS 클래스 결정
  const getPriceChangeClass = () => {
    if (stockInfo.change > 0) return 'price-up';
    if (stockInfo.change < 0) return 'price-down';
    return 'price-same';
  };

  const handleBuy = () => {
    if (onBuy) {
      onBuy(stockInfo); // 부모 컴포넌트에 주식 정보 전달
    }
  };

  const handleSell = () => {
    if (onSell) {
      onSell(stockInfo); // 부모 컴포넌트에 주식 정보 전달
    }
  };

  return (
    <div className="stock-item">
      {/* 주식 기본 정보 */}
      <div className="stock-header">
        <div className="stock-info">
          <div className="stock-name">{stockInfo.name}</div>
          <div className="stock-code">{stockInfo.code}</div>
        </div>
        
        <div className="stock-price">
          <div className="current-price">
            {formatPrice(stockInfo.currentPrice)}
          </div>
          <div className={`price-change ${getPriceChangeClass()}`}>
            {formatChange(stockInfo.change, stockInfo.changeRate)}
          </div>
        </div>
      </div>

      {/* 거래량 및 보유 정보 */}
      <div className="stock-volume">
        거래량: {formatVolume(stockInfo.volume)}
        {ownedQuantity > 0 && (
          <span className="owned-info"> | 보유: {ownedQuantity}주</span>
        )}
      </div>

      {/* 매수/매도 버튼 */}
      <div className="stock-buttons">
        <Button type="buy" onClick={handleBuy}>
          매수
        </Button>
        <Button type="sell" onClick={handleSell}>
          매도
        </Button>
      </div>
    </div>
  );
}

export default StockItem;

/* 
1. Props 활용
   - stock: 주식 데이터 객체
   - onBuy, onSell: 부모에서 전달받은 함수들

2. 조건부 스타일링
   - getPriceChangeClass(): 조건에 따라 다른 CSS 클래스 반환
   - 상승=빨강, 하락=파랑, 보합=회색

3. 이벤트 핸들링
   - handleBuy/handleSell: 버튼 클릭 시 부모 컴포넌트에 알림
   - 부모에서 실제 매수/매도 로직 처리

4. 데이터 가공
   - getStockInfo()로 원본 데이터에 계산된 정보 추가
   - formatPrice(), formatVolume() 등으로 사용자 친화적 표시

5. 컴포넌트 재사용
   - 우리가 만든 Button 컴포넌트 활용
   - type="buy", type="sell"로 다른 스타일 적용

6. 사용 예시:
   <StockItem 
     stock={stockData} 
     onBuy={(stock) => console.log('매수:', stock.name)}
     onSell={(stock) => console.log('매도:', stock.name)}
   />
*/