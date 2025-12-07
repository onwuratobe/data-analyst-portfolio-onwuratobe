
function showDashboard(projectId) {
    const preview = document.getElementById(`${projectId}-dashboard`);
    if (preview) {
        preview.style.display = preview.style.display === 'none' ? 'block' : 'none';
    }
}

function openRepo(projectId) {
    const repos = {
        project1: 'https://github.com/onwuratobe/project1',
        project2: 'https://github.com/onwuratobe/project2',
        project3: 'https://github.com/onwuratobe/project3',
        project4: 'https://github.com/onwuratobe/project4',
        project5: 'https://github.com/onwuratobe/project5',
    };
    const repoUrl = repos[projectId];
    if (repoUrl) {
        window.open(repoUrl,'_blank');
    }
}
