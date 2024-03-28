// assets
import { ChromeOutlined, FileImageOutlined  } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  FileImageOutlined
};


const support = {
  id: 'support',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Help Centre',
      type: 'item',
      icon: icons.ChromeOutlined
    },
    {
      id: 'documentation',
      title: 'File Manager',
      type: 'item',
      icon: icons.FileImageOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
