import React from 'react'
import { Helmet } from 'react-helmet'
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDeleteDataMutation, useGetDataQuery, usePostDataMutation } from '../app/Slices/robotSlices';
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from 'sweetalert2'

let schema = yup.object().shape({
  img: yup.string().required("Image is Required"),
  name: yup.string().required("Name is Required"),
  desc: yup.string().required("Description is Required"),
});

function Add() {
  let [postData] = usePostDataMutation()
  let [deleteData] = useDeleteDataMutation()
  let { refetch,data,isLoading } = useGetDataQuery()

 async function handleDelete(id) {
    await deleteData(id)
    refetch()
  }
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://is.gd/RlZxWY" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Add</title>
      </Helmet>
      <div className="Add">
        <h1>Add Form</h1>
        <Formik
          initialValues={{ img: '', name: '', desc: '' }}
          validationSchema={schema}

          onSubmit = {async (values) => {
            await postData(values);
            refetch()
            Swal.fire({
              icon: "success",
              title: `${values.name} əlavə olundu`,
              showConfirmButton: false,
              timer: 1500
            });
            values.name = ''
              values.img = ''
            values.desc = ''

          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="img" placeholder='ENTER Image' />
              <ErrorMessage name="img" component="div" />

              <Field type="text" name="name" placeholder='ENTER Name' />
              <ErrorMessage name="name" component="div" />

              <Field type="text" name="desc" placeholder='ENTER Description' />
              <ErrorMessage name="desc" component="div" />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>

        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
          {
            isLoading ? (
              <h1>...Loading</h1>
            ) : (
              data.map((item)=>(
                <tr key={item._id}>
            <td style={{width:"150px",height:"150px",objectFit:"cover"}}><img src={item.img} alt=""  /></td>
            <td>{item.name}</td>
            <td>{item.desc}</td>
            <td><button onClick={()=>handleDelete(item._id)}><FaDeleteLeft /></button></td>
          </tr>
              ))
            )
          }
        </table>
      </div>
    </>
  )
}

export default Add
