import React, { FC } from 'react';
import Drawer from '@material-ui/core/Drawer'
import { Route } from 'react-router-dom';

interface Props {

}

const Sidebar: FC<Props> = (props) => {
  return (
    <>
      <Drawer
        anchor='left'
        open={true}
        variant='persistent'
      />
      <div>Sidebar component</div>
    </>
  )
};

export default Sidebar;
