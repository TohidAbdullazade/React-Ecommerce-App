import React, { useEffect, useState } from "react";
import { GET_USERS } from "./services/Products";
import Header from "./Header";

const UserList = () => {
  const FetctUsers = () => {
    GET_USERS().then((res) => [setUser(res)]);
  };
  useEffect(() => {
    FetctUsers();
  }, []);
  const [user, setUser] = useState([]);
  const [input, setInput] = useState("");

  return (
    <>
      <Header input={input} setInput={setInput} />
      <table className="">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        {user
          .filter((item) => {
            if (input.toLowerCase() === "") {
              return item;
            } else if (item.name.toLowerCase().includes(input.toLowerCase())) {
              return item;
            }
          })
          .map((person) => {
            return (
              <tbody key={person.id} className="text-center">
                <tr>
                  <td className="border-t border-black ">{person.id}</td>
                  <td className="border-t border-black ">{person.name}</td>
                  <td className="border-t border-black ">{person.email}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </>
  );
};

export default UserList;
