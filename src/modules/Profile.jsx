import c from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={c.content}>
      <div>
        <img
          src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
      </div>
      <div>
        ava + description
      </div>
      <div>
        my post
        <div>
          new post
        </div>
      </div>
      <div>
        <div className={c.item}>Post1</div>
        <div className={c.item}>Post2</div>
        <div className={`${c.item} ${c.active}`}>Post2</div>
      </div>
    </div>
  )
}

export default Profile;