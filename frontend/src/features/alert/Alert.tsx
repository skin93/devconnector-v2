import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { alertState } from '../../features/alert/alertSlice';
import * as A from './Alert.style';

const Alert = () => {
  const alerts = useAppSelector(alertState);
  return (
    <>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <A.Alert key={alert.id} theme={alert.alertType}>
            {alert.msg}
          </A.Alert>
        ))}
    </>
  );
};

export default Alert;
