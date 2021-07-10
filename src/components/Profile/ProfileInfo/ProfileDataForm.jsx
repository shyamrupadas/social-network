import {createField, Input, Textarea} from "../../common/FormsContrls/FormsControls";
import {reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";

const ProfileDataForm = ({profile, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <strong>Имя</strong> {createField('Имя', 'fullName', [], Input)}
            </div>
            <div>
                Ищу работу: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                Мои профессионалные навыки:
                    {createField('Мои профессионалные навыки', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                Обо мне: {createField('Обо мне', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <h3>Контакты</h3>
                {Object.keys(profile.contacts).map(key => {
                            return <div className={s.contact}>{key}: {createField(key, 'contacts.' + key, [], Input)}</div>
                    // <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
            <div><button>Сохранить</button></div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;