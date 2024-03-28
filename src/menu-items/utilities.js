// assets
<<<<<<< HEAD
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //
=======
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //
>>>>>>> c425b4cbd6d1cfd5b7d6a448d381cb3beb64247f

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
<<<<<<< HEAD
      url: '/typography',
      icon: icons.FontSizeOutlined
=======
      url: '/utils/util-typography',
      icon: icons.IconTypography,
      breadcrumbs: false
>>>>>>> c425b4cbd6d1cfd5b7d6a448d381cb3beb64247f
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
<<<<<<< HEAD
      url: '/color',
      icon: icons.BgColorsOutlined
=======
      url: '/utils/util-color',
      icon: icons.IconPalette,
      breadcrumbs: false
>>>>>>> c425b4cbd6d1cfd5b7d6a448d381cb3beb64247f
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
<<<<<<< HEAD
      url: '/shadow',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'ant-icons',
      title: 'Ant Icons',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
=======
      url: '/utils/util-shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'icons',
      title: 'Icons',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'tabler-icons',
          title: 'Tabler Icons',
          type: 'item',
          url: '/icons/tabler-icons',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Material Icons',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        }
      ]
>>>>>>> c425b4cbd6d1cfd5b7d6a448d381cb3beb64247f
    }
  ]
};

export default utilities;
