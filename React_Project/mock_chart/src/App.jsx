import StockList from './components/StockList';
import Portfolio from './components/PortFolio';
import { stocksData } from './data/stockData';
import { usePortfolio } from './hooks/usePortfolio';
import './styles/App.css';
import './styles/Portfolio.css';

function App() {
  const { portfolio, buyStock, sellStock } = usePortfolio();

  return (
    <div className="app">
      {/* 앱 헤더 */}
      <header className="app-header">
        <h1 className="app-title">📈 모의주식 거래소</h1>
        <p className="app-subtitle">주식 거래 시뮬레이터</p>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="app-main">
        {/* 포트폴리오 현황 */}
        <Portfolio portfolio={portfolio} stocksData={stocksData} />
        
        {/* 주식 리스트 */}
        <StockList 
          stocks={stocksData}           
          onBuyStock={buyStock}   // 커스텀 훅에서 가져온 함수
          onSellStock={sellStock} // 커스텀 훅에서 가져온 함수
          portfolio={portfolio}
        />
      </main>

      {/* 앱 푸터 */}
      <footer className="app-footer">
        <p> 실제 거래와 무관합니다</p>
      </footer>
    </div>
  );
}

export default App;
