import { query } from "../config/mysql";

export const fetchUsers = async (id?: number) => {
    let condition = "";
    if (id) condition = "WHERE user_id=" + id;
    return await query(`SELECT * from users ${condition}`);
};

export const addUser = async (name: string, email: string) => {
    return await query("INSERT INTO users(name, email) VALUES(?,?)", [name, email]);
};

export const updateUser = async (name: string, id: number) => {
    return await query("UPDATE users SET name=? WHERE user_id=?", [name, id]);
};

export const deleteUser = async (id: number) => {
    return await query("DELETE FROM users WHERE user_id=?", [id]);
};
