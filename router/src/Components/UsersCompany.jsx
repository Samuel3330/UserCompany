import { useEffect, useState } from "react"
import User from "./User"
const UsersCompany = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])



    return (
        <div className="mt-20">
            {data?.map(user => { return <User key={user.id} name={user.name} username={user.username} email={user.email} /> })}
        </div>
    )
}

export default UsersCompany