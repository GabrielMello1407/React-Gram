import "./Profile.css";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Message";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";

// hooks
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getUserDetails } from "../../slices/userSlice";
import {
  getUserPhotos,
  publishPhoto,
  resetMessage,
  deletePhoto,
  updatePhoto,
} from "../../slices/photoSlice";

const Profile = () => {
  const { id } = useParams();

  const dispath = useDispatch ()
  

  const {user, loading} = useSelector((state) => state.user)
  const {user:userAuth} = useSelector((state) => state.auth)

  //new form and edit form refs
  const newPhotoForm = useRef()
  const editPhotoForm = useRef()


  //loading user data
  useEffect(() => {
    dispath(getUserDetails(id))
  },[dispath,id])

  const submitHandle = (e) => {
    e.preventDefault()
  }

  if(loading){
    return <p>Carregando...</p>
  }
  return <div id="profile">
      <div className="profile-header">
        {user.profileImage && (
          <img src={`${uploads}/users/${user.profileImage}`} alt={user.name}/>)}
          <div className="profile-description">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
          </div>
      </div>
      {id === userAuth._id &&(
        <>
        <div className="new-photo" ref={newPhotoForm}>
          <h3>Compartilhe suas fotos</h3>
          <form onSubmit={submitHandle}>
            <label>
              <span>Titúlo para a foto:</span>
              <input type="text" placeholder="Insira um titulo" />
            </label>
            <label>
              <span>Imagem:</span>
              <input type="file"/>
            </label>
            <input type="submit" value="Postar" />
          </form>
        </div>
        </>
      )}
  </div>


};

export default Profile;