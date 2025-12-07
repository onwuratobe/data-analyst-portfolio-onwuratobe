
function showDashboard(projectId) {
    const preview = document.getElementById(`${projectId}-dashboard`);
    if (preview) {
        preview.style.display = preview.style.display === 'none' ? 'block' : 'none';
    }
}

function openRepo(projectId) {
    const repos = {
        dataproject1: 'https://github.com/onwuratobe/dataproject1',
        dataproject2: 'https://github.com/onwuratobe/dataproject2',
        dataproject3: 'https://github.com/onwuratobe/dataproject3',
        dataproject4: 'https://github.com/onwuratobe/dataproject4',
        dataproject5: 'https://github.com/onwuratobe/dataproject5',
    };
    const repoUrl = repos[projectId];
    if (repoUrl) {
        window.open(repoUrl,'_blank');
    }
}
