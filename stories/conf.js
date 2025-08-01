export const filterConfig = {
  tabs: [{
    title: 'Project',
    fields: [
      'project',
      'study',
    ],
    asTextAggFields: [
      'consortium_id',
    ],
  },
  {
    title: 'Subject',
    fields: [
      'race',
      'ethnicity',
      'gender',
      'vital_status',
    ],
  },
  {
    title: 'File',
    fields: [
      'file_count',
      'file_type',
      'file_format',
    ],
  }],
};

export const tableConfig = [
  { field: 'project', name: 'Project' },
  { field: 'study', name: 'Study' },
  { field: 'race', name: 'Race' },
  { field: 'ethnicity', name: 'Ethnicity' },
  { field: 'gender', name: 'Gender' },
  // { field: 'visits.days_to_visit', name: 'Days to Visit' },
  // { field: 'visits.follow_ups.days_to_follow_up', name: 'Days to Follow Up' },
  { field: 'vital_status', name: 'Vital Status' },
  { field: 'whatever_lab_result_value', name: 'Lab Result Value' },
  { field: 'file_count', name: 'File Count' },
  { field: 'file_type', name: 'File Type' },
  { field: 'file_format', name: 'File Format' },
];

export const guppyConfig = {
  path: 'http://localhost:3000',
  type: 'subject',
  fileType: 'file',
  tierAccessLimit: 20,
};

export const fieldMapping = [
  {
    field: 'project',
    name: 'Project Name',
  },
];

export const mockFilterConfig = [
  {
    field: "project",
    displayName: "Project",
    type: "checkbox"
  },
  {
    field: "subject",
    displayName: "Subject ID",
    type: "text"
  }
];

export const mockFilterTabConfigs = [
  {
    title: "Basic Filters",
    fields: ["project", "subject"]
  }
];
