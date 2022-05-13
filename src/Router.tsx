import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface Mode {
    mode: boolean;
}

function Router({ mode }: Mode) {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/:coinId">
                    <Coin mode={mode} />
                </Route>
                <Route path="/">
                    <Coins />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
