import React, { useEffect, useState } from "react";
import { Table, Typography } from "antd";
import { getOrders } from "../../../api/CardApi";

const RecentOrder = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const showOrders = () => {
    setLoading(true);
    getOrders().then((res) => {
      setData(res.products);
      setLoading(false);
    });
  };

  useEffect(() => {
    showOrders();
  }, []);

  return (
    <div className="orders-container relative my-5  ">
      <div className="text-container text-center   absolute top-2 left-48   ">
        <Typography.Title level={4}>Recent Orders</Typography.Title>
      </div>

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
            title: "Total-Products",
            dataIndex: "total",
          },
        ]}
        dataSource={data.map((datas) => ({ ...datas, key: datas.id }))}
        loading={loading}
        pagination={false}
      ></Table>
    </div>
  );
};

export default RecentOrder;
