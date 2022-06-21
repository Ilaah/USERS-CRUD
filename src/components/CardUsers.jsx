import React from 'react'

const CardUsers = ({ user, deleteUser, setEditForm, setVisibilityForm, reset}) => {

    const updateUser = () => {
        setVisibilityForm(true)

        const obj = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password ,
            birthday: user.birthday
          }
        reset(obj)
        setEditForm(user)
    }

    return (
        <article className='card'>
            <div className='card__principal'>
                <h3 className='card__name'> <i className="fa-solid fa-user info-icon"></i> {`${user?.first_name} ${user?.last_name}`} </h3>
                <p className='card__info'> <i className="fa-solid fa-envelope info-icon"></i> {user?.email} </p>
                <h4 className='card__info'> <i className="fa-solid fa-calendar-day info-icon"></i> {user?.birthday} </h4>
            </div>

            <div className='card__buttons'>
                <button className='card__btn' onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash"></i></button>
                <button className='card__btn' onClick={updateUser}><i className="fa-solid fa-user-pen"></i></button>
            </div>
        </article>
    )
}

export default CardUsers