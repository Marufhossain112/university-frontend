import { baseApi } from "./baseApi";
import { tagTypes } from "./tag-types";
const DEPARTMENT_URL = "/management-departments";
export const departmentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addDepartment: build.mutation({
            query: (data) => ({
                url: DEPARTMENT_URL,
                method: "POST",
                data
            }),
            invalidatesTags: [tagTypes.department]
        }),
    }),
});
export const { useAddDepartmentMutation } = departmentApi;