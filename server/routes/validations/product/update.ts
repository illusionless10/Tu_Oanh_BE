import { body, query } from 'express-validator';
import checkError from '../check-error';

const deviceCheck = () => {
  return [
    body('deviceId').notEmpty().withMessage('mã thiết bị không được trống'),
    body('fcmToken').notEmpty().withMessage('fcm token không được trống'),
  ];
};

const removeDeviceByDeviceIdCheck = () => {
  return [query('deviceId').isUUID().withMessage('mã thiết bị không đúng')];
};

export default {
  device: [deviceCheck(), checkError],
  removeDeviceByDeviceId: [removeDeviceByDeviceIdCheck(), checkError],
};
