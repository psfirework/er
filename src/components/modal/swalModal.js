import swal from '@sweetalert/with-react';
import React from 'react';

export const swalModal = () => {
  return swal({
    icon: 'success',
    buttons: {
      cancel: 'Close',
    },
    content: <h1>Thank you!</h1>,
  });
};
