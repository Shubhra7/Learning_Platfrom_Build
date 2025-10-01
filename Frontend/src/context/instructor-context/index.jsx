import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { createContext, useState } from "react";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {
  const [courseLandingFormData, setCourseLandingFormData] = useState(
    courseLandingInitialFormData
  );

  const [courseCurriculumFormDataa, setCourseCurriculumFormDataa] =
    useState(courseCurriculumInitialFormData);

  const [mediaUploadProgress, setMediaUploadProgress] = useState(false);

  const [mediaUploadProgressPercentage, setMediaUploadProgressPercentage] = useState(0)

  return (
    <InstructorContext.Provider
      value={{
        courseLandingFormData,
        setCourseLandingFormData,
        courseCurriculumFormDataa, 
        setCourseCurriculumFormDataa,
        mediaUploadProgress, 
        setMediaUploadProgress,
        mediaUploadProgressPercentage, setMediaUploadProgressPercentage
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
