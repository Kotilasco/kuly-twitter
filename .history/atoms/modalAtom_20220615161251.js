import {atom} from 'recoil'


//same as const [modalState, setModalState] = useState(false)
export const modalState = atom({
    key: 'modalState',
    default: false,
})

export const postIdState = atom({
    key: 'postIdState',
    default: "",
})