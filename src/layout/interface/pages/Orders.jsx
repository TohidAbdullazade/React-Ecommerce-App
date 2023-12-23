import React, { useEffect, useState } from "react";
import { Table, Typography } from "antd";
import { getOrders } from "../../../api/CardApi";

const Orders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const showOrders = () => {
   setLoading(true)
    getOrders().then(res=>{
      setData(res.products)
    setLoading(false)
      
    })
  };
  useEffect(() => {
    showOrders();
  },[]);

  return (
    <>
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        className="py-10"
        columns={[
          {
            title: "Products",
            dataIndex: "title",
            
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title:'Price',
            dataIndex:'price',
            render : (cost)=>{
              return <span>${cost}</span>
            }
          
          },
          {
            title: "discountPercentage",
            dataIndex: "discountPercentage",
            render: (percentage)=>{
              return <span>%{percentage}</span>
            }
          },
          { title:'Total Products',
            dataIndex:'total'
       
           },
        ]}
        dataSource={data.map((datas) => ({ ...datas, key: datas.id}))}
        loading={loading}
        pagination={false}
        
      ></Table>
     
    </>
  );
};

export default Orders;
