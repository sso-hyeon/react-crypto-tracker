import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
    background-color: ${props => props.theme.contentsBgColor};
    color: ${props => props.theme.textColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        padding: 20px;
        transition: color 0.2s ease-in;
        display: flex;
        align-items: center;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const ModeBtn = styled.button`
    position: absolute;
    right: 0;
    padding: 0;
    margin: auto 10px;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 20px;
    background-color: ${props => props.theme.textColor};
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`;

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom(prev => !prev);
    const isDark = useRecoilValue(isDarkAtom);
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

    return (
        <Container>
            <Helmet>
                <title>coin</title>
            </Helmet>
            <Header>
                <Title>Coins</Title>
                <ModeBtn onClick={toggleDarkAtom}>{isDark ? "🌞" : "🌙"}</ModeBtn>
            </Header>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinList>
                    {data?.slice(0, 100).map(coin => (
                        <Coin key={coin.id}>
                            <Link
                                to={{
                                    pathname: `/${coin.id}`,
                                    state: { name: coin.name }
                                }}
                            >
                                <Img
                                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinList>
            )}
        </Container>
    );
}

export default Coins;
