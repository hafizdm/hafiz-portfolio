export const projectsQuery = `
  *[_type == "project" && published == true]
  | order(_createdAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    "category": category->title,
    technologies,
    "thumbnail": thumbnail.asset->url,
    year,
    projectUrl,
    githubUrl,
    featured
  }
`;

export const featuredProjectsQuery = `
  *[
    _type == "project" &&
    published == true &&
    featured == true
  ]
  | order(_createdAt desc)[0...4] {
    _id,
    title,
    slug,
    shortDescription,
    "category": category->title,
    technologies,
    "thumbnail": thumbnail.asset->url,
    year,
    featured
  }
`;