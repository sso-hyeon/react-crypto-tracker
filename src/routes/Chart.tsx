import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
    coinId: string;
    mode: boolean;
}

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Chart({ coinId, mode }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
        fetchCoinHistory(coinId)
    );
    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[
                        {
                            name: "Price",
                            data:
                                data?.map(price => ({
                                    x: price.time_close,
                                    y: [
                                        price.open.toFixed(3),
                                        price.high.toFixed(3),
                                        price.low.toFixed(3),
                                        price.close.toFixed(3)
                                    ]
                                })) ?? []
                        }
                    ]}
                    options={{
                        theme: { mode: mode ? "dark" : "light" },
                        chart: {
                            height: 500,
                            width: 500,
                            toolbar: { show: false },
                            background: "transparent"
                        },
                        dataLabels: {
                            enabled: false
                        },
                        grid: { show: true },
                        plotOptions: {
                            candlestick: {
                                colors: {
                                    upward: "#ee5353",
                                    downward: "#2e86de"
                                },
                                wick: {
                                    useFillColor: true
                                }
                            }
                        },
                        yaxis: {
                            show: false
                        },
                        xaxis: {
                            axisBorder: { show: true },
                            axisTicks: { show: false },
                            labels: {
                                show: true
                            },
                            type: "datetime",
                            categories: data?.map(value => value.time_close)
                        }
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
