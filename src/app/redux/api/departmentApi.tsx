import { IDepartments, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "./tag-types";
const DEPARTMENT_URL = "/management-departments";
export const departmentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        departments: build.query({
            query: (arg: Record<string, any>) => ({
                url: DEPARTMENT_URL,
                method: "GET",
                params: arg,
            }),
            transformResponse: (response: IDepartments, meta: IMeta) => {
                return {
                    departments: response,
                    meta
                };
            },
            providesTags: [tagTypes.department]
        }),
        addDepartment: build.mutation({
            query: (data) => ({
                url: DEPARTMENT_URL,
                method: "POST",
                data
            }),
            invalidatesTags: [tagTypes.department]
        }),
        // get single department by id
        department: build.query({
            query: (id) => ({
                url: `${DEPARTMENT_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.department],
        }),
        // update single department by id
        updateDepartment: build.mutation({
            query: (data) => ({
                url: `${DEPARTMENT_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.department],
        }),
        // delete single department by id
        deleteDepartment: build.mutation({
            query: (id) => ({
                url: `${DEPARTMENT_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.department],
        }),
    }),
});
export const { useDepartmentsQuery, useAddDepartmentMutation, useDepartmentQuery, useUpdateDepartmentMutation, useDeleteDepartmentMutation } = departmentApi;