import React, { useEffect, useState } from "react";
import { Avatar, Button, Space, Table, Typography } from "antd";
import { getAllUsers } from "../../../api/UsersApi";
import { UserDeleteOutlined, EditOutlined } from "@ant-design/icons";

const Customers = () => {
  const [userDatas, setUserDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const showUsers = () => {
    setLoading(true);
    getAllUsers().then((res) => {
      setUserDatas(res.users);
      setLoading(false);

    });
  };
  useEffect(() => {
    showUsers();
  }, []);

  return (
    <>
      <div className="form-section flex items-center justify-end  ">
        <form action="">
          <input
            type="search"
            className="rounded-md p-1 px-2.5  w-80 bg-slate-100 focus: outline-red-400 mr-2.5"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
      <Typography.Title level={4} className="text-center">
        Customers
      </Typography.Title>

      <div className="table-container   ">
        <Table
          className="p-0"
          columns={[
            {
              title: " Image",
              dataIndex: "image",
              render: (img) => {
                return <Avatar src={img}></Avatar>;
              },
            },

            {
              title: "Id",
              dataIndex: "id",
            },

            {
              title: " Name",
              dataIndex: "firstName",
            },

            {
              title: "Last Name",
              dataIndex: "lastName",
            },

            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Phone",
              dataIndex: "phone",
            },

            {
              title: "Ip ",
              render: (ip) => {
                return <span>{ip.ip}</span>;
              },
            },

            {
              title: "Password",
              dataIndex: "password",
            },

            {
              title: "Actions",
              render: () => {
                return (
                  <>
                    <Space>
                      <Button title="edit user">
                        <EditOutlined />
                      </Button>

                      <Button title="remove user">
                        <UserDeleteOutlined />
                      </Button>
                    </Space>
                  </>
                );
              },
            },
          ]}
          dataSource={userDatas
            .filter((data) => {
              if (input.toLowerCase() == "") {
                return data;
              } else if (
                data.firstName.toLowerCase().startsWith(input.toLowerCase())
              ) {
                return data;
              }
            })
            .map((users) => ({ ...users, key: users.id }))}
          loading={loading}
          pagination={{ pageSize: 5 }}
        ></Table>
      </div>
    </>
  );
};

export default Customers;
