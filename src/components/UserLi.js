const UserLi = ({ user }) => {
    return (
        <li className="list-item" key={user.id}>
            <i className="name-on-list">{user.name}</i> usually plays <i className="role-on-list">{user.role}</i>
        </li>
    )
}

export default UserLi;