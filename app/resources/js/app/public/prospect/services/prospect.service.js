import axiosService from "common/services/axios.service";
import qs from "querystring";

export default {
  submitProspect: payload => {
    return axiosService.post("prospects", qs.stringify(payload));
  }
};
