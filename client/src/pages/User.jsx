import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const User = () => {
  const { userId, token } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const [openAvatarModal, setOpenAvatarModal] = React.useState(false);
  const handleOpenAvatar = () => setOpenAvatarModal(true);
  const handleCloseAvatar = () => setOpenAvatarModal(false);

  const [openUserEdit, setOpenUserEdit] = React.useState(false);
  const handleOpenUserEdit = () => setOpenUserEdit(true);
  const handleCloseUserEdit = () => setOpenUserEdit(false);

  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  useEffect(() => {
    const fetchUSer = async () => {
      try {
        const res = await axios.get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUSer();
  }, [token, userId]);

  return (
    <>
      <Card sx={{ display: "flex", padding: "15px", margin: "15px" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`/png/${user?.userAvatar}.png`}
          alt="Live from space album cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              <h2>{user?.userName}</h2>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <h5>{user?.email}</h5>
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 5, pb: 1 }}>
            <Button size="small" color="secondary" onClick={handleOpenAvatar}>
              Change Avatar
            </Button>
            <Modal
              open={openAvatarModal}
              onClose={handleCloseAvatar}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <List
                  dense
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  {[0, 1, 2].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                      <ListItem
                        key={value}
                        secondaryAction={
                          <Checkbox
                            edge="end"
                            onChange={handleToggle(value)}
                            checked={checked.indexOf(value) !== -1}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        }
                        disablePadding
                      >
                        <ListItemButton>
                          <ListItemAvatar>
                            <Avatar
                              alt={`Avatar ${value}`}
                              src={`/png/${value}.png`}
                            />
                          </ListItemAvatar>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Modal>
            <Button size="small" color="secondary" onClick={handleOpenUserEdit}>
              Edit User
            </Button>
            <Modal
              open={openUserEdit}
              onClose={handleCloseUserEdit}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <form>
                  <input
                    type="text"
                    value={user?.userName}
                    name="userName"
                  />
                  <input
                    type="text"
                    value={user?.email}
                    name="email"
                  />
                  <button onClick={handleSubmit}>Update</button>
                </form>
              </Box>
            </Modal>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default User;
