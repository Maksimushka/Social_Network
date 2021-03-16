import {DialogsType, MessagesType} from '../../Redux/dialogs-page/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../Redux/redux-store";
import {addMessageAC, updateNewMessageTextAC} from '../../Redux/dialogs-page/dialogs-actions';

type mapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    isAuth: boolean
}
type MapDispatchToPropsType = {
    updateNewMessageTextAC: (text: string) => void
    addMessageAC: () => void
}

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect<mapStateToPropsType, MapDispatchToPropsType, {}, RootStateReduxType>(mapStateToProps, {
    updateNewMessageTextAC,
    addMessageAC
})(Dialogs)

export default DialogsContainer;