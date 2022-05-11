export const baseURLDevelopment = "https://animquiz.tedoratech.com/animquiz/";
export const baseURLProduction = "http://pmap:3051/users/login";

// export const studentAPI = "stuapi/"
// export const surveyResponsesURL = "user/surveyResponses"

export const APIConfig = {
  

    
    /// ---------------------------------------------------------------------
    /// Student - Start

    /// GET : Student Semesters
    // studentSemestersFetch: baseURLDevelopment  + "semester/getsemester",

    /// GET : Student Appointment Information
    // studentAppointmentInformation: baseURLDevelopment + "appointment/appointmentfor/",

    /// POST : Update Student Appointment Status
    postDemographicDetails: baseURLDevelopment + "users/createuser",
    loginPost: baseURLProduction 
    /// POST : Send E-Mail
    // sendSupportEmail: baseURLDevelopment  + "email/sendemail",

    // /// GET : Student Personal information
    // studentPersonalInformation: baseURLDevelopment+ "studentdetails/getstudentdetails/",

    // /// POST : Student Personal information
    // createStudentPersonalInformation: baseURLDevelopment+ "studentdetails/createdetails",

    // /// POST : Student Personal information
    // updateStudentPersonalInformation: baseURLDevelopment + "studentdetails/updatedetails/"

    /// Student - End
    /// ---------------------------------------------------------------------

}


