import React from 'react';
import { useFormik } from 'formik';
import { swalModal } from './swalModal';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';
import './modal.css';

export const Modal = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: () => swalModal(),
  });

  return (
    <div>
      <h1>Buy ticket</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className="validate_text" htmlFor="name">
            First Name
          </label>
          <input
            className="validate_input"
            id="name"
            type="text"
            name="firstName"
            placeholder="Например: Ексакустодиан"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          {formik.errors.firstName && formik.touched.firstName && (
            <p className="error_text">{formik.errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="validate_text" htmlFor="lastName">
            Second Name
          </label>
          <input
            className="validate_input"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Например: Хачапури"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          {formik.errors.lastName && formik.touched.lastName && (
            <p className="error_text">{formik.errors.lastName}</p>
          )}
        </div>
        <div>
          <label className="validate_text" htmlFor="passport_number">
            Passport Number
          </label>
          <input
            className="validate_input"
            id="passport_number"
            type="text"
            name="passport_number"
            placeholder="Например: 00011133377"
            value={formik.values.passport_number}
            onChange={formik.handleChange}
          />
          {formik.errors.passport_number && formik.touched.passport_number && (
            <p className="error_text">{formik.errors.passport_number}</p>
          )}
        </div>
        <div>
          <label className="validate_text" htmlFor="phone">
            Phone number
          </label>
          <input
            className="validate_input"
            type="text"
            id="phone"
            name="phone"
            placeholder="Например: 380667778899"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone && formik.touched.phone && (
            <p className="error_text">{formik.errors.phone}</p>
          )}
        </div>
        <div>
          <label className="validate_text" htmlFor="email">
            Email
          </label>
          <input
            className="validate_input"
            id="email"
            type="email"
            name="email"
            placeholder="Например: name@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error_text">{formik.errors.email}</p>
          )}
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
