// 多语言资源文件
const i18n = {
  "zh": {
    "appName": "网站tab管理器",
    "tabSites": "我的网站",
    "tabManage": "管理分组",
    "tabStats": "使用统计",
    "groupName": "分组名称",
    "inputGroupName": "输入分组名称",
    "addGroup": "添加分组",
    "selectGroup": "选择分组...",
    "siteName": "网站名称",
    "inputSiteName": "输入网站名称",
    "siteUrl": "网站链接",
    "addSite": "添加网站",
    "delete": "删除",
    "deleteGroup": "删除分组",
    "openAll": "全部打开",
    "confirmDeleteGroup": "确定要删除分组\"{0}\"及其所有网站吗？",
    "noGroups": "还没有添加任何分组，请前往\"管理分组\"标签添加。",
    "noSites": "没有网站，请在\"管理分组\"中添加",
    // 统计相关
    "recentUsage": "最近7天使用时长统计",
    "usageMinutes": "使用时长（分钟）",
    "todayVisits": "今日网站访问记录 ({0})",
    "totalStats": "总访问量: {0} | 总使用时间: {1} 分钟",
    "visitsAndTime": "{0} 次访问 | {1} 分钟",
    "noStatsData": "还没有统计数据，浏览网站后将自动记录。",
    "todayDistribution": "今日网站访问分布",
    "noTodayRecords": "今日没有访问记录",
    "languageSelector": "界面语言",
    "saveAsDefault": "设为默认语言",
    "minutes": "分钟"
  },
  "en": {
    "appName": "Website Tab Manager",
    "tabSites": "My Sites",
    "tabManage": "Manage Groups",
    "tabStats": "Usage Stats",
    "groupName": "Group Name",
    "inputGroupName": "Enter group name",
    "addGroup": "Add Group",
    "selectGroup": "Select a group...",
    "siteName": "Site Name",
    "inputSiteName": "Enter site name",
    "siteUrl": "Site URL",
    "addSite": "Add Site",
    "delete": "Delete",
    "deleteGroup": "Delete Group",
    "openAll": "Open All",
    "confirmDeleteGroup": "Are you sure you want to delete the group \"{0}\" and all its sites?",
    "noGroups": "No groups added yet. Please go to the \"Manage Groups\" tab to add.",
    "noSites": "No sites. Please add in \"Manage Groups\"",
    // 统计相关
    "recentUsage": "Last 7 Days Usage Statistics",
    "usageMinutes": "Usage Time (minutes)",
    "todayVisits": "Today's Site Visits ({0})",
    "totalStats": "Total Visits: {0} | Total Time: {1} minutes",
    "visitsAndTime": "{0} visits | {1} minutes",
    "noStatsData": "No statistics data yet. It will be recorded automatically when browsing websites.",
    "todayDistribution": "Today's Website Visit Distribution",
    "noTodayRecords": "No visits recorded today",
    "languageSelector": "Interface Language",
    "saveAsDefault": "Set as Default",
    "minutes": "minutes"
  }
};

// 字符串格式化函数
function formatString(str, ...args) {
  return str.replace(/{(\d+)}/g, (match, number) => {
    return typeof args[number] !== 'undefined' ? args[number] : match;
  });
}

// 当前语言
let currentLang = "zh";

// 获取文本
function getText(key, ...args) {
  const text = i18n[currentLang][key] || key;
  if (args.length === 0) {
    return text;
  }
  return formatString(text, ...args);
}

// 更改语言
function changeLanguage(lang) {
  if (i18n[lang]) {
    currentLang = lang;
    applyLanguage();
  }
}

// 保存默认语言设置
function saveDefaultLanguage(lang) {
  chrome.storage.sync.set({ defaultLanguage: lang }, function() {
    console.log(`Default language set to ${lang}`);
  });
}

// 加载默认语言设置
function loadDefaultLanguage(callback) {
  chrome.storage.sync.get(['defaultLanguage'], function(result) {
    if (result.defaultLanguage && i18n[result.defaultLanguage]) {
      currentLang = result.defaultLanguage;
    }
    if (callback) callback();
  });
}

// 应用当前语言到界面
function applyLanguage() {
  // 更新页面标题
  document.title = getText("appName");
  document.querySelector('h1').textContent = getText("appName");
  
  // 更新标签按钮
  document.querySelector('.tab-button[data-tab="sites"]').textContent = getText("tabSites");
  document.querySelector('.tab-button[data-tab="manage"]').textContent = getText("tabManage");
  document.querySelector('.tab-button[data-tab="stats"]').textContent = getText("tabStats");
  
  // 更新表单标签
  document.querySelectorAll('.form-group label').forEach(label => {
    if (label.getAttribute('for') === 'group-name') {
      label.textContent = getText("groupName");
    } else if (label.getAttribute('for') === 'site-name') {
      label.textContent = getText("siteName");
    } else if (label.getAttribute('for') === 'site-url') {
      label.textContent = getText("siteUrl");
    } else if (label.getAttribute('for') === 'language-selector') {
      label.textContent = getText("languageSelector");
    }
  });
  
  // 更新按钮文本
  document.getElementById('add-group').textContent = getText("addGroup");
  document.getElementById('add-site').textContent = getText("addSite");
  document.getElementById('save-language').textContent = getText("saveAsDefault");
  
  // 更新选择框提示
  const selectGroup = document.getElementById('select-group');
  if (selectGroup.options.length > 0) {
    selectGroup.options[0].textContent = getText("selectGroup");
  }
  
  // 更新placeholder
  document.getElementById('group-name').placeholder = getText("inputGroupName");
  document.getElementById('site-name').placeholder = getText("inputSiteName");
  
  // 重新加载数据以应用新语言
  loadGroups();
  loadGroupsForManagement();
  loadStats();
} 