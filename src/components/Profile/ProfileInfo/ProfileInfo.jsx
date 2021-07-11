import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div><img src={profile.photos.large || userPhoto} className={s.mainPhoto}/></div>
                <div>
                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>
                <div><p>Статус:<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></p></div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            <div>
                <h3>{profile.fullName}</h3>
            </div>
            <div>
                <p>Обо мне: {profile.aboutMe}</p>
            </div>
            <div>
                <p>Ищу работу: {profile.lookingForAJob ? 'Да' : 'Нет'}</p>
            </div>
            {profile.lookingForAJob &&
            <div>
                <p>Мои профессионалные
                    навыки: {profile.lookingForAJobDescription && profile.lookingForAJobDescription}</p>
            </div>}
            <div>
                <h3>Контакты</h3>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
            {isOwner && <div><button onClick={goToEditMode}>Редактировать</button></div>}
        </div>
    )
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>{contactValue && <div>{contactTitle}: {contactValue}</div>}</div>
}

export default ProfileInfo;