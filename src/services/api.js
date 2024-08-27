import axios from "axios";
import { homeUrl } from "../constants/path";

export const getAxios = () => axios.get(homeUrl);
