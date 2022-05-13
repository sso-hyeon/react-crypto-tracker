const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then(response => response.json());
}

export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then(response => response.json());
}

export function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then(response => response.json());
}

export function fetchCoinHistory(coinId: string) {
    const endDate = Math.ceil(Date.now() / 1000);
    // 4주일 전
    const startDate = endDate - 60 * 60 * 24 * 7 * 4;
    return fetch(
        `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
    ).then(response => response.json());
}

export function fetchCoinToday(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/today`).then(response =>
        response.json()
    );
}
