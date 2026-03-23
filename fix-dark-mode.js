const fs = require('fs');
const path = require('path');

const dirs = ['ebooks', 'info', 'lessons', 'projects', 'techtips', 'templates'];
const basePath = "f:/PROJECT/beaconacademy/src/pages";

dirs.forEach(dir => {
    const filePath = path.join(basePath, dir, 'index.astro');
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/<body class="bg-slate-50">/g, '<body>');
    content = content.replace(/class="text-4xl font-extrabold text-slate-900 mb-8 border-b pb-4"/g, 'class="text-4xl font-extrabold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4"');
    content = content.replace(/class="block bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-indigo-100 transition-all group"/g, 'class="block card-hover group"');
    content = content.replace(/class="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2"/g, 'class="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2"');
    content = content.replace(/class="text-slate-600 mb-4"/g, 'class="text-slate-600 dark:text-slate-400 mb-4"');
    content = content.replace(/class="text-sm text-slate-500 font-medium"/g, 'class="text-sm text-slate-500 dark:text-slate-400 font-medium"');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
});
