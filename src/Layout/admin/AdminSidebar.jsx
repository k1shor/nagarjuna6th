import { useState } from "react";
import { Menu, Category, Inventory2, Group, ShoppingCart, Logout } from "@mui/icons-material";
import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Sidebar */}
      <Drawer variant="permanent" open={isOpen} sx={{ "& .MuiDrawer-paper": { backgroundColor: "skyblue", color: "white" , position: "relative", minHeight: "100vh"} }} >
        <IconButton onClick={toggleSidebar} className="m-4">
          <Menu fontSize="large" style={{ color: "white" }} />
        </IconButton>
        
        <List>
          <SidebarItem icon={<Category />} text="Category" isOpen={isOpen} />
          <SidebarItem icon={<Inventory2 />} text="Products" isOpen={isOpen} />
          <SidebarItem icon={<Group />} text="Users" isOpen={isOpen} />
          <SidebarItem icon={<ShoppingCart />} text="Orders" isOpen={isOpen} />
          <SidebarItem icon={<Logout />} text="Sign Out" isOpen={isOpen} />
        </List>
      </Drawer>

      {/* Main Content */}
    </>
  );
};

const SidebarItem = ({ icon, text, isOpen }) => {
  return (
    <ListItem button>
      <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
      {isOpen && <ListItemText primary={text} />}
    </ListItem>
  );
};

export default Sidebar;
