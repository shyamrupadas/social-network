import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      {/*<div>
        <img
          src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
          alt="Picture"/>
      </div>*/}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        <div>
          <h3>{props.profile.fullName}</h3>
        </div>
        <div>
          <p>Обо мне: {props.profile.aboutMe}</p>
        </div>
        <div>
          <p>Ищу работу: {props.profile.lookingForAJob === true ? 'Да' : 'Нет'}</p>
        </div>
          <div>
            <p>Подробнее: {props.profile.lookingForAJobDescription && props.profile.lookingForAJobDescription}</p>
        </div>
        <div>
          <h3>Контакты</h3>
          {props.profile.contacts.facebook && <p>facebook: {props.profile.contacts.facebook}</p>}
          {props.profile.contacts.github && <p>github: {props.profile.contacts.github}</p>}
          {props.profile.contacts.instagram && <p>instagram: {props.profile.contacts.instagram}</p>}
          {props.profile.contacts.mainLink && <p>mainLink: {props.profile.contacts.mainLink}</p>}
          {props.profile.contacts.twitter && <p>twitter: {props.profile.contacts.twitter}</p>}
          {props.profile.contacts.vk && <p>vk: {props.profile.contacts.vk}</p>}
          {props.profile.contacts.website && <p>website: {props.profile.contacts.website}</p>}
          {props.profile.contacts.youtube && <p>youtube: {props.profile.contacts.youtube}</p>}

        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;