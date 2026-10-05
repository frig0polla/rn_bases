import React from 'react'
import { UserRow } from './UserRow.tsx'
import { useUsers } from '../hooks/useUsers.ts'


export const UsersPage = () => {

  const { users , nextPage ,previousPage} = useUsers();
  
  console.log(users);
  
  return (
    <>
      <h3>Usuarios</h3>
      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

          { 
              users.map(user => 
                  <UserRow key={user.id} user={user} />
              )
            
          }
          
        </tbody>
      </table>
      <button onClick={ previousPage } className="p-2 bg-blue-500 text-white roundedxl">Anteriores</button>
      <button onClick={ nextPage } className="p-2 bg-blue-500 text-white roundedxl">Siguientes</button>
    </>
  );
};