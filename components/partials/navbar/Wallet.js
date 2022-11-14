import {ChevronDown} from "react-feather";
import {useRef, useState} from "react";
import useClickOutside from "../../../hooks/useClickOutside";

const Wallet = (props) => {
    const {account, chainId, disconnect} = props

    const currentWallet = useRef()
    const [isOpen, setIsOpen] = useState(false)
    useClickOutside(currentWallet, () => setIsOpen(false))

    return (
        <>
            <div className="wallet" ref={currentWallet}>
                <span className={'current-wallet ' + (isOpen ? 'open' : '')} onClick={() => setIsOpen(!isOpen)}>Wallet <ChevronDown/></span>
                {
                    isOpen &&
                    <div className="wallet-detail">
                        <h3>Wallet Informations</h3>
                        <ul>
                            <li><span>Chain ID:</span> {chainId}</li>
                            <li><span>Account:</span> {account}</li>
                        </ul>
                        <button onClick={disconnect}>Disconnect</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Wallet