import React, { Fragment, useContext, useState } from "react";
import Modal from "./Modal";
import UserContext from "../Context/userContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../api/auth";

const LogInButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      // navigate("/");
      setShowModal(false);
    },
  });

  const handleLogout = () => {
    logout();
    setUser(false);
    navigate("/");
  };

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <Fragment>
      {!user ? (
        <>
          <div className="w-22 h-9 px-10 py-2 rounded shadow border border-green-600 flex justify-center cursor-pointer">
            <div
              className="text-emerald-700 text-sm font-normal font-['Syne'] uppercase leading-tight"
              onClick={() => {
                setShowModal(true);
              }}
            >
              L
            </div>
            <Modal
              isVisible={showModal}
              onClose={() => {
                setShowModal(false);
              }}
            >
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Signin to your account
                  </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div>
                      <label
                        htmlFor="text"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Username
                      </label>
                      <div className="mt-2">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          autoComplete="text"
                          required
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Signin
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Modal>
          </div>
        </>
      ) : (
        <button
          className="w-22 h-9 px-10 py-2 rounded shadow border border-emerald-700 flex justify-end cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </Fragment>
  );
};

export default LogInButton;
