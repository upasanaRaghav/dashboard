import { Avatar, List, ListItem, ListItemAvatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import User1 from 'assets/images/users/user-round.svg';
import { IconBuildingStore } from '@tabler/icons-react';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 16,
  '&:hover': {
    background: theme.palette.primary.light
  },
  '& .MuiListItem-root': {
    padding: 0
  }
}));

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 330,
        py: 0,
        borderRadius: '10px'
      }}
    >
      <ListItemWrapper>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Jane Doe" src={User1} />
          </ListItemAvatar>
        </ListItem>
      </ListItemWrapper>
    </List>
  );
};

export default NotificationList;
