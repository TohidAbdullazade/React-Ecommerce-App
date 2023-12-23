import { Avatar, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../api/ProductsApi";
import { Rate } from "antd";


const Inventory = () => {
 
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(false);
  
  
  const showProducts = () => {
    setLoading(true);
    getAllProducts()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showProducts();
  }, []);

  return (
    <div className="inventory-section">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Space direction="vertical">
        <Table
          loading={loading}
          columns={[
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
              render: (link) => {
                return <Avatar src={link}></Avatar>;
              },
            },

            {
              title: "Title",
              dataIndex: "title",
            },

            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "Rating",
              dataIndex: "rating",
              render: (rating) => {
                return <Rate value={rating} allowHalf disabled />;
              },
            },
            {
              title: "Brand",
              dataIndex: "brand",
            },

            {
              title: "Category",
              dataIndex: "category",
            },
          ]}
          dataSource={data.map((data) => ({...data,key:Math.random() }))}
          pagination={{ pageSize: 5 }}
        ></Table>
      </Space>
    </div>
  );
};

export default Inventory;
