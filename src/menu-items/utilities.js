// assets
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

const utilities = {
  id: 'utilities',
  title: 'DashBoard',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'DashBoard',
      type: 'item',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-color',
      title: 'Messages',
      type: 'item',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-shadow',
      title: 'Friends',
      type: 'item',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'ant-icons',
      title: 'Apps',
      type: 'item',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    }
  ]
};

export default utilities;
