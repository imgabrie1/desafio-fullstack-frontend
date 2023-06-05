import { createContext, useState } from 'react'

export interface iProviderProps {
    children: React.ReactNode
}

interface iModalContextProps {
    modalIsOpen: (boolean | undefined)[]
    setModalIsOpen: React.Dispatch<React.SetStateAction<(boolean | undefined)[]>>
    handleModal: (contactId: number) => void
    handleModalDeleteAccount: () => void
    modalIsOpenDeleteAccount: boolean
    setIsOpenDeleteAccount: React.Dispatch<React.SetStateAction<boolean>>
    handleModalCreateContact: () => void
    modalIsOpenCreateContact: boolean
    setIsOpenCreateContact: React.Dispatch<React.SetStateAction<boolean>>
    handleModalEditContact: (contactId: number) => void
    handleModalProfileUser: () => void
    modalIsOpenEditContact: (boolean | undefined)[]
    setIsOpenEditContact: React.Dispatch<React.SetStateAction<(boolean | undefined)[]>>
    modalIsOpenProfileUser: boolean
    setIsOpenProfileUser: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext({} as iModalContextProps)

export const ModalProvider = ({ children }: iProviderProps) => {
    const [modalIsOpen, setModalIsOpen] = useState<Array<boolean | undefined>>([])
    const [modalIsOpenDeleteAccount, setIsOpenDeleteAccount] = useState(false)
    const [modalIsOpenCreateContact, setIsOpenCreateContact] = useState(false)
    const [modalIsOpenEditContact, setIsOpenEditContact] = useState<Array<boolean | undefined>>([])
    const [modalIsOpenProfileUser, setIsOpenProfileUser] = useState(false)

    const handleModalProfileUser = () => {
        if (!modalIsOpenProfileUser) {
            setIsOpenProfileUser(true)
        } else {
            setIsOpenProfileUser(false)
        }
    }

    const handleModal = (contactId: number) => {
        setModalIsOpen((prevModalIsOpen) => {
            const updatedModalIsOpen = [...prevModalIsOpen]
            updatedModalIsOpen[contactId] = !updatedModalIsOpen[contactId]
            return updatedModalIsOpen
        })
    }

    const handleModalDeleteAccount = () => {
        if (!modalIsOpenDeleteAccount) {
            setIsOpenDeleteAccount(true)
        } else {
            setIsOpenDeleteAccount(false)
        }
    }

    const handleModalCreateContact = () => {
        if (!modalIsOpenCreateContact) {
            setIsOpenCreateContact(true)
        } else {
            setIsOpenCreateContact(false)
        }
    }

    const handleModalEditContact = (contactId: number) => {
        setIsOpenEditContact((prevModalIsOpen) => {
            const updatedModalIsOpen = [...prevModalIsOpen]
            updatedModalIsOpen[contactId] = !updatedModalIsOpen[contactId]
            return updatedModalIsOpen
        })
    }

    return (
        <ModalContext.Provider
            value={{
                modalIsOpen,
                setModalIsOpen,
                handleModal,
                handleModalDeleteAccount,
                modalIsOpenDeleteAccount,
                setIsOpenDeleteAccount,
                handleModalCreateContact,
                modalIsOpenCreateContact,
                setIsOpenCreateContact,
                modalIsOpenEditContact,
                setIsOpenEditContact,
                handleModalEditContact,
                handleModalProfileUser,
                modalIsOpenProfileUser,
                setIsOpenProfileUser,
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}