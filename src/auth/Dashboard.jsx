import { useState } from "react";
import Style from "../style/DashboardModule/Dashboard.module.css"
import { supabase } from "./supabaseClient";

function Dashboard() {
    const [createName, setCreateName] = useState("")
    const [createPassword, setCreatePassword] = useState("")

    async function handleCreateAccount(e) {
        e.preventDefault()

        const error = await supabase.from("users").insert([{
            name: createName,
            password: createPassword
        }])

        if (error) {
            console.error(error.message)
        }

        setCreateName("")
        setCreatePassword("")

    }
    return (
        <>
            <div className={Style.addUserForm}>
                <form onSubmit={handleCreateAccount}>
                    <h1>Create User</h1>
                    <input
                        type="text"
                        name="" id=""
                        value={createName}
                        placeholder="Name"
                        onChange={(e) => setCreateName(e.target.value)}
                    />
                    <input
                        type="text"
                        value={createPassword}
                        name="" id=""
                        placeholder="Password"
                        onChange={(e) => setCreatePassword(e.target.value)}
                    />
                    <button type="submit">Create</button>
                </form>
            </div>
            <div className={Style.listUserContainer}>
                <div>
                    <h1>List User</h1>
                    <ol>
                        <li></li>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default Dashboard