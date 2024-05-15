/* eslint-disable react-refresh/only-export-components */
import { httpRequest } from "~/utils/httprequest";

export const postRecruitment = async ({ data }) => {
  try {
    const res = await httpRequest.post(`recruitment/post-recruitment`, data, {
      headers: { authorization: "Bearer " + localStorage.token },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getAllRecruitment = async ({ page, perPage, nameRecruitment }) => {
  try {
    const res = await httpRequest.get(`recruitment/get-all-recruitment`, {
      headers: { authorization: "Bearer " + localStorage.token },
      params: {
        page,
        per_page: perPage,
        nameRecruitment,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const deleteRecruitment = async ({ id }) => {
  try {
    const res = await httpRequest.delete(`recruitment/delete/${id}`, {
      headers: { authorization: "Bearer " + localStorage.token },
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const editRecruitment = async ({ id, data }) => {
  try {
    const res = await httpRequest.put(`recruitment/edit/${id}`, data, {
      headers: { authorization: "Bearer " + localStorage.token },
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const getRecruitmentStudent = async () => {
  try {
    const res = await httpRequest.get(`recruitment/`, {
      headers: { authorization: "Bearer " + localStorage.token },
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const rejectApplyCV = async () => {
  try {
    const res = await httpRequest.get(`recruitment/`, {
      headers: { authorization: "Bearer " + localStorage.token },
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const successApplyCV = async () => {
  try {
    const res = await httpRequest.get(`recruitment/`, {
      headers: { authorization: "Bearer " + localStorage.token },
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const applyRecruitment = async () => {
  try {
    const res = await httpRequest.get(`recruitment/`, {
      headers: { authorization: "Bearer " + localStorage.token },
    });

    return res;
  } catch (error) {
    return error;
  }
};