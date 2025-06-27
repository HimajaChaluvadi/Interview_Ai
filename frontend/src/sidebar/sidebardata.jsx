export const sidebarItems = [
  { id: 1, name: 'Dashboard', path: '/user' },
 /* { id: 2, name: 'Resume Builder', path: 'resume-builder' },
  { id: 3, name: 'Enroll Course', path: 'enroll-course' },*/
  
  { id: 8, name: 'Live Interview', path: 'live-interview' },
  { id: 9, name: 'AI Career Coach', path: 'ai-career-coatch' },
  { id: 10, name: 'Code Practice', path: 'practical-exam' },
  /*{ id: 11, name: 'Enroll Course History', path: 'enroll-course-history' },*/
]

export const adminrole = [
  { id: 1, name: 'Dashboard', path: '/admin' },
  {
    id: 2,
    name: 'Course Management',
    subMenu: [
      { id: 3, name: 'Course List', path: 'course-list' },
      { id: 4, name: 'Course Information', path: 'course-info' }
    ]
  },
  { id: 3, name: 'Role Management', path: 'role-management' },
  { id: 4, name: 'Skill Management', path: 'skill-management' },
  { id: 5, name: 'Recruiter Management', path: 'recruiter-management' },
  
]

export const Recruiterrole = [
  { id: 1, name: 'Interview Review', path: '/recruiter' },
]
