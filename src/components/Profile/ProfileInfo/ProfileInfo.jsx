import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

  if (!profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large}/>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div>
          <h3>{profile.fullName}</h3>
        </div>
        <div>
          <p>Обо мне: {profile.aboutMe}</p>
        </div>
        <div>
          <p>Ищу работу: {profile.lookingForAJob === true ? 'Да' : 'Нет'}</p>
        </div>
          <div>
            <p>Подробнее: {profile.lookingForAJobDescription && profile.lookingForAJobDescription}</p>
        </div>
        <div>
          <h3>Контакты</h3>
          {profile.contacts.facebook && <p>facebook: {profile.contacts.facebook}</p>}
          {profile.contacts.github && <p>github: {profile.contacts.github}</p>}
          {profile.contacts.instagram && <p>instagram: {profile.contacts.instagram}</p>}
          {profile.contacts.mainLink && <p>mainLink: {profile.contacts.mainLink}</p>}
          {profile.contacts.twitter && <p>twitter: {profile.contacts.twitter}</p>}
          {profile.contacts.vk && <p>vk: {profile.contacts.vk}</p>}
          {profile.contacts.website && <p>website: {profile.contacts.website}</p>}
          {profile.contacts.youtube && <p>youtube: {profile.contacts.youtube}</p>}

        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;