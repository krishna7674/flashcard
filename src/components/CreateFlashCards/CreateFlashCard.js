import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { MdOutlineUploadFile, MdAdd } from "react-icons/md";
import { validationSchema } from "../../utils/yupSchema.js";
import { v4 } from "uuid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectUserCards } from "../../features/appSlice.js";
import { useDispatch } from "react-redux";
import { setUserCards } from "../../features/appSlice.js";

const CreateFlashCard = () => {
  //Fetching user cards data from redux store
  const userCards = useSelector(selectUserCards);
  const dispatch = useDispatch();

  //Initial Values for Formik for validation (Required by Formik!)
  var initialValues = {
    groupName: "",
    description: "",
    cardTerms: [{ term: "", defination: "" }],
  };

  //Function to handle Form Submit ~ Adding the cards details to local storage and redux store
  const onSubmit = (values, action) => {
    const id = v4();
    dispatch(setUserCards([...userCards, { id: id, ...values }]));
    localStorage.setItem(
      "userFlashCards",
      JSON.stringify([...userCards, { id: id, ...values }])
    );
    action.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form>
            <div className="pt-2 sm:pt-5 mx-7 sm:mx-12 md:mx-20 lg:mx-24">
              <div className="grid sm:grid-cols-1 gap-6">
                <div className="p-6 sm:p-10 bg-white rounded-md shadow-lg">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <label className="text-gray-700 pb-1">
                        Create Group *
                      </label>
                      <Field
                        type="text"
                        name="groupName"
                        className="border-2 border-gray-400 p-1 rounded-md w-56 md:w-72"
                      />
                    </div>

                    <div className="self-end">
                      <label
                        htmlFor="image-upload"
                        className="flex flex-row gap-2 px-3 py-1 border-2 text-blue-600 border-gray-400 rounded-md cursor-pointer hover:opacity-80"
                      >
                        <MdOutlineUploadFile size={25} />
                        <span className="text-base">Upload Image</span>
                      </label>
                      <input id="image-upload" type="file" className="hidden" />
                    </div>
                  </div>
                  <ErrorMessage
                    name="groupName"
                    component="p"
                    className="text-red-600 text-xs"
                  />

                  <label className="block mb-0.5 mt-2 text-gray-700 text-base pb-1">
                    Add Description
                  </label>

                  <Field
                    as="textarea"
                    style={{
                      resize: "none",
                    }}
                    rows="4"
                    className="w-full md:w-[70%] p-2 text-base border-2 border-gray-400 rounded-md placeholder-gray-300 outline-none"
                    name="description"
                    placeholder="Describe the roles, responsibility, skills required for the job and help candidate understand the role better."
                  />

                  <ErrorMessage
                    component="p"
                    name="description"
                    className="flex text-red-500 text-xs mb-1"
                  />
                </div>
                {/* ------------------------- */}
                {/* Add Cards Section  */}
                <div className="py-4 bg-white rounded-md shadow-lg">
                  {/* FieldArray component from Formik which will create Dynamic Form for the custom input */}
                  <FieldArray name="cardTerms">
                    {/* push and remove are the formik properties.Push is used to add the elements
                     and remove is used to remove the elements */}
                    {({ push, remove }) => (
                      <>
                        {values.cardTerms.map((term, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-1 px-6 sm:px-10 sm:w-auto sm:flex"
                          >
                            <div className="bg-red-500 mt-3 sm:mt-5 sm:mr-4 h-6 w-7 rounded-full text-white shrink-0">
                              <span className="flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </span>
                            </div>
                            <div className="w-full sm:mt-4 sm:mr-4">
                              <label className="block pb-1 text-gray-500 text-base">
                                Enter Term *
                              </label>
                              <Field
                                name={`cardTerms.${index}.term`}
                                type="text"
                                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none"
                              />
                              <ErrorMessage
                                name={`cardTerms.${index}.term`}
                                component="div"
                                className="text-red-600 text-xs"
                              />
                            </div>

                            <div className="mt-2 sm:mt-4 sm:ml-10 md:ml-10 lg:ml-10 w-full">
                              <label className="block pb-1 text-gray-500 text-base">
                                Enter Defination *
                              </label>
                              <Field
                                className="p-2 w-full border border-gray-400 rounded-md outline-none"
                                type="text"
                                name={`cardTerms[${index}].defination`}
                              />
                              <ErrorMessage
                                name={`cardTerms.${index}.defination`}
                                component="p"
                                className="text-red-600 text-xs"
                              />
                            </div>

                            {index > 0 && (
                              <div className="flex items-center justify-start sm:mt-8 py-2">
                                <button
                                  type="button"
                                  className="px-2"
                                  onClick={() => remove(index)}
                                >
                                  <AiOutlineDelete
                                    size={25}
                                    className="text-gray-600"
                                  />
                                </button>

                                <AiOutlineEdit
                                  size={27}
                                  className="text-blue-600 cursor-pointer"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                        <button
                          onClick={() => push({ term: "", defination: "" })}
                          type="button"
                          className="flex font-medium pt-4 pb-2 ml-6 sm:ml-16 text-blue-600"
                        >
                          <MdAdd className="self-center mr-1" /> Add more
                        </button>
                      </>
                    )}
                  </FieldArray>
                </div>
              </div>
              <div className="my-10 grid place-content-center">
                <button
                  type="submit"
                  className="px-14 py-1.5 rounded-md bg-red-600 text-white text-lg"
                >
                  Create
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateFlashCard;
