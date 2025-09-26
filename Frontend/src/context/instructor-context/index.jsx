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

  return (
    <InstructorContext.Provider
      value={{
        courseLandingFormData,
        setCourseLandingFormData,
        courseCurriculumFormDataa, setCourseCurriculumFormDataa
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
