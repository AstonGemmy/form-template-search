import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const API_URL = process.env.REACT_APP_API_URL

const getTemplateResponse = {
	"name": "Blood donation form template",
	"created": "2020-11-04T16:26:44.666569",
	"category": ["Health"],
	"description": "Testing template",
	"link": "",
}

const getTemplatesResponse = [
	{
		"name": "Blood donation form template",
		"created": "2020-11-04T16:26:44.666569",
		"category": ["Health"],
		"description": "Testing template",
		"link": "",
	},
	{
		"name": "Scholarship form template",
		"created": "2020-12-04T16:26:44.666569",
		"category": ["Education"],
		"description": "Sample scholarship template",
		"link": "https://formpl.us",
	},
	{
		"name": "Blood donation form template 2",
		"created": "2020-11-04T16:26:44.666569",
		"category": ["Health", "E-commerce", "Education"],
		"description": "Testing template",
		"link": "",
	},
	{
		"name": "Scholarship form template 2",
		"created": "2020-12-04T16:26:44.666569",
		"category": ["E-commerce"],
		"description": "Sample scholarship template",
		"link": "https://formpl.us",
	},
	{
		"name": "Blood donation form template 3",
		"created": "2020-11-04T16:26:44.666569",
		"category": ["Health", "Education"],
		"description": "Testing template",
		"link": "",
	},
	{
		"name": "Scholarship form template 3",
		"created": "2020-12-04T16:26:44.666569",
		"category": ["E-commerce", "Health"],
		"description": "Sample scholarship template",
		"link": "https://formpl.us",
	},
	{
		"name": "Blood donation form template 4",
		"created": "2020-11-04T16:26:44.666569",
		"category": ["Health", "E-commerce"],
		"description": "Testing template",
		"link": "",
	},
	{
		"name": "Scholarship form template 4",
		"created": "2020-12-04T16:26:44.666569",
		"category": ["Education", "Health", "E-commerce"],
		"description": "Sample scholarship template",
		"link": "https://formpl.us",
	},
	{
		"name": "Scholarship form template 5",
		"created": "2020-12-04T16:26:44.666569",
		"category": ["E-commerce", "Health"],
		"description": "Sample scholarship template",
		"link": "https://formpl.us",
	},
	{
		"name": "Blood donation form template 5",
		"created": "2020-11-04T16:26:44.666569",
		"category": ["Health", "E-commerce"],
		"description": "Testing template",
		"link": "",
	},
	{
		"name": "Scholarship form template 6",
		"created": "2020-12-04T16:26:44.666569",
		"category": ["Education", "Health", "E-commerce"],
		"description": "Sample scholarship template",
		"link": "https://formpl.us",
	},
	{
		"name": "Blood donation form template 6",
		"created": "2020-11-04T16:26:44.666569",
		"category": ["Health", "E-commerce"],
		"description": "Testing template",
		"link": "",
	},
	{
		"name": "Scholarship form template 7",
		"created": "2020-12-04T16:26:44.666569",
		"category": ["E-commerce", "Health"],
		"description": "Sample scholarship template",
		"link": "https://formpl.us",
	},
	{
		"name": "Blood donation form template 7",
		"created": "2020-11-04T16:26:44.666569",
		"category": ["Health", "E-commerce"],
		"description": "Testing template",
		"link": "",
	}
]

// Adding mock network response that is used in tests

const mockAPIResponse = () => {
	const mock = new MockAdapter(axios);

	mock.onGet(`${API_URL}task_templates`).reply(200, getTemplatesResponse);
	// mock.onPost(`${API_URL}task_templates`).reply(200, getTemplateResponse);
};

export {
	mockAPIResponse,
	getTemplateResponse,
	getTemplatesResponse,
};