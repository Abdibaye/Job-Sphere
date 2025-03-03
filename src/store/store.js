import { create } from "zustand";

const initialUserData = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
}

console.log(initialUserData)

export const useStoredAutho = create((set) => ({
    initialUserData,
    updateFirstName: (username) => set((state) => ({
        initialUserData: {...state.initialUserData, firstname: username}
    })),
    updateLastName: (userlastname) => set((state) => ({
        initialUserData: {...state.initialUserData, lastname: userlastname}
    })),
    updateEmail: (useremail) => set((state) => ({
        initialUserData: {...state.initialUserData, email: useremail}
    })),
    updatePassword: (userpassword) => set((state) => ({
        initialUserData: {...state.initialUserData, password: userpassword}
    })),

}))
