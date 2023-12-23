import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Space, Typography, Card, Statistic } from "antd";
import RecentOrder from "../components/RecentOrder";
import DashboardChart from "../components/DashboardChart";
import {Link} from "react-router-dom";


const Dashboard = () => {
  return (
    <div className="dashboard-section ">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashBoardCards
          icon={
            <Link to = '/orders'>
              <ShoppingCartOutlined
              className="text-white  bg-green-500 p-3 text-xl"
              style={{ borderRadius: "22px" }}
            />
            </Link>
          }
          title={"Orders"}
          value={1245}
        />
        <DashBoardCards
          icon={
            <Link to='/inventory'>
            <ShoppingOutlined
              className="text-white bg-orange-500 p-3 text-xl"
              style={{ borderRadius: "22px" }}
              />
              </Link>
          }
          title={"Inventory"}
          value={3545}
        />
        <DashBoardCards
           icon={
             <Link to={'/customers'}>
            <UserOutlined
              className="text-white p-3  bg-blue-700 text-xl"
              style={{ borderRadius: "22px" }}
            />
         </Link>
          }
          title={"Customers"}
          value={1285}
        />
        <DashBoardCards
          icon={
           <Link to={'/'}>
             <DollarCircleOutlined
              className="text-white p-3 bg-red-700 text-xl"
              style={{ borderRadius: "22px" }}
            />
           </Link>
          }
          title={"Revenue"}g
          value={8645} 
        />
      </Space>

      <Space size={20}>
        <RecentOrder />
        <Card style={{ width: 550, height:350 }}>
          <DashboardChart />
        </Card>
      </Space>
     
    </div>
  );
};

const DashBoardCards = ({ title, value, icon }) => {
  return (
    <>
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value}></Statistic>
        </Space>
      </Card>
    </>
  );
};

export default Dashboard;
