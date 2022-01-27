import { Button } from 'antd';
import logo from 'assets/logo.svg';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { setName } from 'store/slice/persistedSlice';
import classes from './index.module.less';

const Dashboard = () => {
  const name = useAppSelector((state) => state.persisted.name);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(setName('testName'));
  }, []);

  return (
    <div className={classes.App}>
      <header className={classes['App-header']}>
        <img src={logo} className={classes['App-logo']} alt="logo" />
        <p>
          {name} Edit <code>src/App.tsx</code>
          and save to reload.{t('hello')}
        </p>
        <p className="mb-20">{process.env.REACT_APP_API_URL}</p>
        <Button type="primary">Primary Button</Button>
      </header>
    </div>
  );
};

export default Dashboard;
