import { UserType } from "types";

export const postNewUser = async (addNewUser: UserType) => {

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