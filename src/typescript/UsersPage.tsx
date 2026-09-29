import React from 'React'

export const UsersPage = () => {
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
          <tr className="p-2">
            <td>
              <img 
                src="https://via.placeholder.com/150" 
                className="rounded-full w-14" 
                alt="User Avatar" 
              />
            </td>
            <td>Antonio Calabuig</td>
            <td>a.calabuigpuigvert@edu.gva.es</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};