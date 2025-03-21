document.addEventListener('DOMContentLoaded', function() {
    const groupList = document.getElementById('groupList');
    
    // 10チャプターごとにグループ化
    for (let i = 34; i <= 150; i += 10) {
        const groupEnd = Math.min(i + 9, 150);
        const link = document.createElement('a');
        link.href = `group_${i}.html`;
        link.className = 'group-link';
        link.textContent = `第${i}話 - 第${groupEnd}話`;
        groupList.appendChild(link);
    }
}); 