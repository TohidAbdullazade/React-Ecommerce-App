import React, { useEffect, useState } from "react";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { getAllComments } from "../../../api/CommentApi";
import { getAllPosts } from "../../../api/PostApi";


const Header = () => {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [openCommments, setOpenComments] = useState(false);
  const [openPosts, setOpenPosts] = useState(false);
  

  useEffect(() => {
    getAllComments().then((res) => {
      setComments(res);
     
    });
    getAllPosts().then((res) => {
      setPosts(res);
      
    });
  }, []);

  return (
    <>
   
      <header className="flex justify-between px-6 py-1 h-14 item-center border-b border-black opacity-80">
        <Image
          width={40}
          src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
        ></Image>
       <div className="title ">
       <Typography.Title>Admin Dashboard</Typography.Title>
       </div>
        <Space size={15}>
       
          <Badge count={comments.total}>
            <MailOutlined
              style={{ fontSize: "24px" }}
              onClick={() => setOpenComments(true)}
            />
          </Badge>
          <Badge count={posts.total}>
            <BellFilled
              style={{ fontSize: "24px" }}
              onClick={() => setOpenPosts(true)}
            />
          </Badge>
        </Space>
        
        <Drawer
          title="Comments"
          open={openCommments}
          onClose={() => setOpenComments(false)}
          maskClosable
        >
          <List
            dataSource={comments.comments}
            renderItem={(item) => {
              return <List.Item>{item.body}</List.Item>;
            }}
          ></List>
        </Drawer>

        <Drawer
          title="Notification"
          open={openPosts}
          onClose={() => setOpenPosts(false)}
        >
          <List
            dataSource={posts.posts}
            renderItem={(item) => {
              return <List.Item>{item.body}</List.Item>;
            }}
          ></List>
        </Drawer>
      </header>
    </>
  );
};

export default Header;
