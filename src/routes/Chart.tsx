import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ChartProps {
    coinId: string;
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

function Chart({ coinId }: ChartProps) {
    const isDark = useRecoilValue(isDarkAtom);
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
                        theme: { mode: isDark ? "dark" : "light" },
                        chart: {
                            height: 500,
                            width: 500,
                            toolbar: { show: false },
                            background: "transparent"
                        },
                        plotOptions: {
                            candlestick: {
                                colors: {
                                    upward: "#ee5353",
                                    downward: "#2e86de"
                                }
                            }
                        },
                        yaxis: {
                            show: false
                        },
                        xaxis: {
                            type: "numeric",
                            categories: data?.map(value =>
                                value.time_open.substring(5, 10)
                            ),
                            labels: {
                                show: true,
                                hideOverlappingLabels: false,
                                style: {
                                    fontSize: "10px"
                                }
                            },
                            axisBorder: {
                                strokeWidth: 5
                            }
                        }
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
