function showProject(projectId) {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.style.display = 'none';
  });
  document.getElementById(projectId).style.display = 'block';
}
