import { UserTypeDB } from "types";

export const postNewUser = async (addNewUser: UserTypeDB) => {
    const response = await fetch('http://localhost:3003/api/v1/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addNewUser),
    });

    if (response.ok) {
        let data = await response.json();
        return data
    } else {
        console.error('Failed to add user');
    }
}

export const getUsers = async () => {
    try {
        const response = await fetch('http://localhost:3003/api/v1/user');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}