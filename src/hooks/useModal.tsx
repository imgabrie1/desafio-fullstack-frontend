import { useContext } from "react"
import { ModalContext } from "../providers/modalProvider"

const ModalAuth = () => {
    const modalContext = useContext(ModalContext)

    return modalContext
}

export default ModalAuth