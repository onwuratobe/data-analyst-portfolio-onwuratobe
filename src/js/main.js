function showDashboard(projectId) {
    const preview = document.getElementById(`${projectId}-dashboard`);
    preview.style.display = preview.style.display === 'none' ? 'block' : 'none';
}

function openRepo(projectId) {
    const repos = {
        project1: 'https://github.com/yourusername/project1',
        // Add other projects here...
    };
    window.open(repos[project
function showDashboard(projectId) {
    const preview = document.getElementById(`${projectId}-dashboard`);
    if (preview) {
        preview.style.display = preview.style.display === 'none' ? 'block' : 'none';
    }
}

function openRepo(projectId) {
    const repos = {
        project1: 'https://github.com/yourusername/project1',
        // Add other projects here...
    };
    const repoUrl = repos[projectId];
    if (repoUrl) {
        window.open(repoUrl, '_blank');
    }
}
