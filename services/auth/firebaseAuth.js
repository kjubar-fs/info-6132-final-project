import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { firebaseErrors } from "../../utilities/firebaseErrors";


// Function to log in a user
// Returns an object with a boolean success value and a message
const signIn = async(email, password) => {
    const response = {
        success: false,
        message: ""
    }

    try{
        const request = await signInWithEmailAndPassword(auth, email, password)
        response.success = true
    }
    catch(e){
        response.success = false
        response.message = firebaseErrors[e.code] || e.message
    }
    return response
}

// Function to log out a user
const signOutUser = async(setUser) => {
    signOut(auth).then(() => {
        setUser(undefined)
      }).catch((error) => {
        console.e(error)
      });
}

// Function to sign up a new user
// Returns an object with a boolean success value and a message
const signUp = async(email, password) => {
    const response = {
        success: false,
        message: ""
    }

    try{
        const request = await createUserWithEmailAndPassword(auth, email, password)
        response.success = true
    }
    catch(e){
        response.success = false
        response.message = firebaseErrors[e.code] || e.message
    }
    return response
}



// Checks if the passed email has a valid format
// Regex from https://regexr.com/3e48o
const isEmailValid = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(email)
}

// Checks all fields and returns a success boolean value and a message
const areFieldsValid = (email, password, confirmPassword) => {
    // Creating the response object to return
    let response = {
        success: false,
        message: ""
    }

    // Then checks that the email field is not empty
    if(!email || email?.trim() == ""){
        response.success = false,
        response.message = "Please enter an email"

        return response
    }
    
    // Then, checks that the email has a valid format
    if(!isEmailValid(email)){
        response.success = false,
        response.message = "Invalid email format"
        
        return response
    }
    
    // Last, checks the password fields
    if(!password || password?.trim() == ""){
        response.success = false,
        response.message = "Please enter a password"

        return response
    }
    if(!confirmPassword || confirmPassword?.trim() == ""){
        response.success = false,
        response.message = "Please confirm your password"

        return response
    }
    if(confirmPassword !== password){
        response.success = false
        response.message = "Passwords do not match"

        return response
    }

    // If all checks pass, returns true an no error messages
    response.success = true
    return response
}

export { areFieldsValid, signIn, signOutUser, signUp }