import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinToday } from "../api";

const Li = styled.li`
    width: 100%;
    line-height: 40px;
    color: black;
    background-color: ${props => props.theme.contentsBgColor};
    margin-bottom: 15px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    border-radius: 10px;
    font-weight: bold;
    color: ${props => props.theme.textColor};
    span {
        font-weight: normal;
    }
`;

interface PriceProps {
    coinId: string;
}

interface IToday {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Price({ coinId }: PriceProps) {
    const { isLoading, data } = useQuery<IToday[]>(
        ["todayPrice", coinId],
        () => fetchCoinToday(coinId),
        {
            refetchInterval: 5000
        }
    );

    return (
        <div>
            {isLoading ? (
                "Loading price..."
            ) : (
                <ul>
                    <Li>
                        Open <span>{data?.at(0)?.open.toFixed(3)}</span>
                    </Li>
                    <Li>
                        High <span>{data?.at(0)?.high.toFixed(3)}</span>
                    </Li>
                    <Li>
                        Low <span>{data?.at(0)?.low.toFixed(3)}</span>
                    </Li>
                    <Li>
                        Volume <span>{data?.at(0)?.volume}</span>
                    </Li>
                    <Li>
                        Market cap <span>{data?.at(0)?.market_cap}</span>
                    </Li>
                </ul>
            )}
        </div>
    );
}

export default Price;
