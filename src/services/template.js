import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

const getTemplates = async () => {
  const response = await axios.get(`${API_URL}task_templates`)
  if (response.status === 200) return response
}

const templateService = {
  getTemplates
}

export default templateService;