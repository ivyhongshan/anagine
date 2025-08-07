export async function fetchProjects() {
  const query = {
    query: `
      query {
        _aggregation {
          subject {
            project {
              histogram {
                key
              }
            }
          }
        }
      }
    `
  };

  const res = await fetch("http://localhost:3010/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query)
  });

  const data = await res.json();
  const buckets = data?.data?._aggregation?.subject?.project?.histogram || [];
  return buckets.map(b => b.key).filter(Boolean);
}

export async function fetchSubjectsByProject(projectName) {
  const query = {
    query: `
      query ($filter: JSON) {
        subject(filter: $filter) {
          subject_id
          project
        }
      }
    `,
    variables: {
      filter: {
        in: {
          project: [projectName]
        }
      }
    }
  };

  const res = await fetch("http://localhost:3010/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query)
  });

  const data = await res.json();
  return data?.data?.subject || [];
}

