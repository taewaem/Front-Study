import { useState, useEffect } from 'react';
import { stocksData, updateStockPrices } from '../data/stockData';

export const useStocks = () => {


    const [stocks, setStocks] = useState(stocksData);
    const [isRealTimeActive, setIsRealTimeActive] = useState(false);

    useEffect(() => {
        console.log("주식 데이터 초기화");
    }, []); // 빈 배열 = 컴포넌트 마운트 시 한 번만 실행

    useEffect(() => {
        let intervalId = null;

        if (isRealTimeActive) {
            console.log("실시간 업데이트 시작");

            intervalId = setInterval(() => {
                setStocks(currentStocks => {
                    const updateStock = updateStockPrices(currentStocks);
                    console.log("업데이트 됨");
                    return updateStock;
                });
            }, 3000);   //3초마다
        }

        return () => {
            if (intervalId) {
                console.log("실시간 업데이트 중지");
                clearInterval(intervalId);
            }
        }
    }, [isRealTimeActive]); //isRealTimeActive가 변경될 때마다 실행

    useEffect(() => {
        if (isRealTimeActive) {
            document.title = '📈 실시간 업데이트 중...';
        } else {
            document.title = '📈 모의주식 거래소';
        }

        // cleanup에서 원래 타이틀로 복원
        return () => {
            document.title = '📈 모의주식 거래소';
        };
    }, [isRealTimeActive]);

    // 실시간 업데이트
    const toggleRealTime = () => {
        setIsRealTimeActive(prev => !prev);
    };

    // 수동 새로고침
    const refreshStocks = () => {
        setStocks(currentStocks => updateStockPrices(currentStocks));
        console.log('수동 새로고침 완료');
    };

    return {
        stocks,              // 현재 주식 데이터
        isRealTimeActive,    // 실시간 업데이트 상태
        toggleRealTime,      // 실시간 업데이트 토글
        refreshStocks,       // 수동 새로고침
    };

}