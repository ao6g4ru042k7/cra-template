import { Button } from 'antd';
import logo from 'assets/logo.svg';
import { useTranslation } from 'react-i18next';

import classes from './index.module.less';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.App}>
      <header className={classes['App-header']}>
        <img src={logo} className={classes['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code>
          and save to reload.{t('hello')}
        </p>
        <p className="mb-20">{process.env.REACT_APP_API_URL}</p>
        <Button type="primary">Primary Button</Button>
      </header>
    </div>
  );
};

export default Dashboard;
