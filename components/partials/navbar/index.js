import Link from "next/link";
import {Container} from "react-bootstrap";
import {useWeb3React} from "@web3-react/core";
import {InjectedConnector} from "@web3-react/injected-connector";
import useClickOutside from "../../../hooks/useClickOutside";

import Wallet from "./Wallet";

export const Navbar = () => {
    const injectedConnector = new InjectedConnector({supportedChainIds: [1,3, 4, 5, 42, 54 ],})

    const {chainId, account, active, activate, deactivate} = useWeb3React()

    const connect = async () => {
        await activate(injectedConnector)
    }

    const disconnect = async () => {
        await deactivate()
    }

    return (
        <>
            <div className="header">
                <Container>
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link href={'/'}>
                                <img src="/logo.png" alt=""/>
                            </Link>
                        </div>
                        <div className="connect">
                            {
                                account
                                    ?
                                    <Wallet account={account} chainId={chainId} disconnect={disconnect}/>
                                    :
                                    <div>
                                        <button onClick={connect}>Connect to Metamask</button>
                                    </div>
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Navbar