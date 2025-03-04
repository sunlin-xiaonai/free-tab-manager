// 国际化翻译对象
const translations = {
  'en': {
    'title': 'Free Tab Manager',
    'sites_tab': 'My Sites',
    'manage_tab': 'Manage Groups',
    'stats_tab': 'Usage Stats',
    'group_name_label': 'Group Name',
    'group_name_placeholder': 'Enter group name',
    'add_group': 'Add Group',
    'select_group': 'Select group...',
    'site_name_label': 'Site Name',
    'site_name_placeholder': 'Enter site name',
    'site_url_label': 'Site URL',
    'add_site': 'Add Site',
    'open_all': 'Open All',
    'delete': 'Delete',
    'delete_group': 'Delete Group',
    'no_groups': 'No groups added yet. Please go to "Manage Groups" tab to add.',
    'no_sites': 'No sites, please add in "Manage Groups"',
    'weekly_stats': 'Last 7 Days Usage',
    'today_stats': 'Today\'s Website Visits',
    'total_visits': 'Total Visits',
    'total_time': 'Total Time',
    'minutes': 'minutes',
    'visits': 'visits',
    'site_distribution': 'Today\'s Website Distribution',
    'no_stats': 'No statistics yet. Browse websites to automatically record data.',
    'confirm_delete_group': 'Are you sure you want to delete the group "{0}" and all its sites?',
    'open_starred': 'Open Starred',
    'no_starred': 'No starred sites yet. Click on the star icon next to a site to star it.',
    'add_star': 'Star this site',
    'remove_star': 'Unstar this site',
    'star_group': 'Star All',
    'author_works_title': 'My Works',
    'seo_extension_title': 'AITDK SEO Extension',
    'seo_extension_desc': 'All-in-One SEO Analyzer',
    'translator_title': 'Web Translator',
    'translator_desc': 'Fast Page Translation',
    'portfolio_title': 'My Breath',
    'portfolio_desc': 'MyBreath is a platform for breathing exercises and meditation. It helps you relax and unwind.',
    'twitter_tooltip': 'Follow on Twitter',
    'youtube_tooltip': 'Subscribe on YouTube',
    'coffee_tooltip': 'Buy me a coffee'
  },
  'zh': {
    'title': '免费tab管理器',
    'sites_tab': '我的网站',
    'manage_tab': '管理分组',
    'stats_tab': '使用统计',
    'group_name_label': '分组名称',
    'group_name_placeholder': '输入分组名称',
    'add_group': '添加分组',
    'select_group': '选择分组...',
    'site_name_label': '网站名称',
    'site_name_placeholder': '输入网站名称',
    'site_url_label': '网站链接',
    'add_site': '添加网站',
    'open_all': '全部打开',
    'delete': '删除',
    'delete_group': '删除分组',
    'no_groups': '还没有添加任何分组，请前往"管理分组"标签添加。',
    'no_sites': '没有网站，请在"管理分组"中添加',
    'weekly_stats': '最近7天使用时长统计',
    'today_stats': '今日网站访问记录',
    'total_visits': '总访问量',
    'total_time': '总使用时间',
    'minutes': '分钟',
    'visits': '次访问',
    'site_distribution': '今日网站访问分布',
    'no_stats': '还没有统计数据，浏览网站后将自动记录。',
    'confirm_delete_group': '确定要删除分组"{0}"及其所有网站吗？',
    'open_starred': '优先打开',
    'no_starred': '还没有标星的网站，点击网站旁的星标图标来添加收藏。',
    'add_star': '添加星标',
    'remove_star': '取消星标',
    'star_group': '添加星标',
    'author_works_title': '我的其他作品',
    'seo_extension_title': 'AITDK SEO 扩展',
    'seo_extension_desc': '全能SEO分析工具',
    'translator_title': '网页翻译助手',
    'translator_desc': '快速翻译网页内容',
    'portfolio_title': '我的呼吸',
    'portfolio_desc': '我的呼吸是一个呼吸练习和冥想平台。它帮助你放松和放松。',
    'twitter_tooltip': '在Twitter上关注我',
    'youtube_tooltip': '订阅我的YouTube频道',
    'coffee_tooltip': '请我喝杯咖啡'
  },
  'ja': {
    'title': 'ウェブサイトツールマネージャー',
    'sites_tab': 'マイサイト',
    'manage_tab': 'グループ管理',
    'stats_tab': '使用統計',
    'group_name_label': 'グループ名',
    'group_name_placeholder': 'グループ名を入力',
    'add_group': 'グループを追加',
    'select_group': 'グループを選択...',
    'site_name_label': 'サイト名',
    'site_name_placeholder': 'サイト名を入力',
    'site_url_label': 'サイトURL',
    'add_site': 'サイトを追加',
    'open_all': 'すべて開く',
    'delete': '削除',
    'delete_group': 'グループを削除',
    'no_groups': 'グループがまだ追加されていません。「グループ管理」タブで追加してください。',
    'no_sites': 'サイトがありません。「グループ管理」で追加してください',
    'weekly_stats': '過去7日間の使用時間',
    'today_stats': '今日のウェブサイト訪問記録',
    'total_visits': '総訪問数',
    'total_time': '総使用時間',
    'minutes': '分',
    'visits': '回訪問',
    'site_distribution': '今日のウェブサイト訪問分布',
    'no_stats': 'まだ統計データがありません。ウェブサイトを閲覧すると自動的に記録されます。',
    'confirm_delete_group': 'グループ「{0}」とそのすべてのサイトを削除してもよろしいですか？',
    'open_starred': 'お気に入りを開く',
    'no_starred': 'まだお気に入りのサイトがありません。サイト横の星アイコンをクリックして追加してください。',
    'add_star': 'お気に入りに追加',
    'remove_star': 'お気に入りから削除',
    'star_group': 'すべてお気に入り',
    'author_works_title': '他の作品',
    'seo_extension_title': 'AITDK SEO拡張機能',
    'seo_extension_desc': 'オールインワンSEO分析ツール',
    'translator_title': 'ウェブ翻訳ツール',
    'translator_desc': '高速ページ翻訳',
    'portfolio_title': 'My Breath',
    'portfolio_desc': 'ストレスを解放し、心と体をリラックスさせましょう！',
    'twitter_tooltip': 'Twitterでフォロー',
    'youtube_tooltip': 'YouTubeでチャンネル登録',
    'coffee_tooltip': 'コーヒーをおごる'
  }
};

// 获取当前语言
function getCurrentLanguage() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['language'], function(result) {
      resolve(result.language || 'en'); // 默认为英文
    });
  });
}

// 保存语言设置
function saveLanguage(language) {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ language: language }, function() {
      resolve();
    });
  });
}

// 获取翻译文本
function getTranslation(key, language) {
  return translations[language][key] || key;
}

// 应用翻译到界面元素
async function applyTranslations() {
  const language = await getCurrentLanguage();
  
  // 设置body的语言属性
  document.body.setAttribute('data-language', language);
  
  // 翻译标题
  document.querySelector('h1').textContent = getTranslation('title', language);
  document.title = getTranslation('title', language);
  
  // 翻译顶部优先打开按钮
  const openStarredButton = document.getElementById('open-starred');
  if (openStarredButton) {
    openStarredButton.textContent = getTranslation('open_starred', language);
  }
  
  // 翻译标签页按钮
  document.querySelector('.tab-button[data-tab="sites"]').textContent = getTranslation('sites_tab', language);
  document.querySelector('.tab-button[data-tab="manage"]').textContent = getTranslation('manage_tab', language);
  document.querySelector('.tab-button[data-tab="stats"]').textContent = getTranslation('stats_tab', language);
  
  // 翻译表单标签和按钮
  const groupNameLabel = document.querySelector('label[for="group-name"]');
  if (groupNameLabel) groupNameLabel.textContent = getTranslation('group_name_label', language);
  
  const groupNameInput = document.getElementById('group-name');
  if (groupNameInput) groupNameInput.placeholder = getTranslation('group_name_placeholder', language);
  
  const addGroupButton = document.getElementById('add-group');
  if (addGroupButton) addGroupButton.textContent = getTranslation('add_group', language);
  
  const selectGroup = document.getElementById('select-group');
  if (selectGroup && selectGroup.options[0]) {
    selectGroup.options[0].textContent = getTranslation('select_group', language);
  }
  
  const siteNameLabel = document.querySelector('label[for="site-name"]');
  if (siteNameLabel) siteNameLabel.textContent = getTranslation('site_name_label', language);
  
  const siteNameInput = document.getElementById('site-name');
  if (siteNameInput) siteNameInput.placeholder = getTranslation('site_name_placeholder', language);
  
  const siteUrlLabel = document.querySelector('label[for="site-url"]');
  if (siteUrlLabel) siteUrlLabel.textContent = getTranslation('site_url_label', language);
  
  const addSiteButton = document.getElementById('add-site');
  if (addSiteButton) addSiteButton.textContent = getTranslation('add_site', language);
  
  // 翻译作者作品区域
  const authorWorksTitle = document.querySelector('.author-works-title');
  if (authorWorksTitle) {
    authorWorksTitle.textContent = getTranslation('author_works_title', language);
  }
  
  // 翻译社交媒体图标提示
  const youtubeIcon = document.querySelector('.social-icon[title="YouTube"]');
  const twitterIcon = document.querySelector('.social-icon[title="Twitter"]');
  const coffeeIcon = document.querySelector('.social-icon[title="Buy me a coffee"]');
  
  if (youtubeIcon) {
    youtubeIcon.title = getTranslation('youtube_tooltip', language);
  }
  
  if (twitterIcon) {
    twitterIcon.title = getTranslation('twitter_tooltip', language);
  }
  
  if (coffeeIcon) {
    coffeeIcon.title = getTranslation('coffee_tooltip', language);
  }
  
  const workTitles = document.querySelectorAll('.work-title');
  const workDescs = document.querySelectorAll('.work-desc');
  
  if (workTitles.length >= 3 && workDescs.length >= 3) {
    // 翻译第一个作品（SEO扩展）
    workTitles[0].textContent = getTranslation('seo_extension_title', language);
    workDescs[0].textContent = getTranslation('seo_extension_desc', language);
    
    // 翻译第二个作品（翻译助手）
    workTitles[1].textContent = getTranslation('translator_title', language);
    workDescs[1].textContent = getTranslation('translator_desc', language);
    
    // 翻译第三个作品（作品集）
    workTitles[2].textContent = getTranslation('portfolio_title', language);
    workDescs[2].textContent = getTranslation('portfolio_desc', language);
  }
  
  // 重新加载列表以应用翻译
  loadGroups();
  loadGroupsForManagement();
  loadStats();
}

// 加载统计数据
async function loadStats() {
  const container = document.getElementById('stats-container');
  container.innerHTML = '';
  
  const language = await getCurrentLanguage();
  
  try {
    // 获取Top10历史访问网站数据和网站图标元数据
    chrome.storage.local.get(['dailyStats', 'topHistorySites', 'siteMetadata'], function(result) {
      try {
        const dailyStats = result.dailyStats || {};
        const topHistorySites = result.topHistorySites || [];
        const siteMetadata = result.siteMetadata || {};
        
        console.log('统计数据:', dailyStats); // 调试用
        console.log('Top10历史网站:', topHistorySites); // 调试用
        
        const dates = Object.keys(dailyStats).sort().reverse(); // 按日期降序排列
        
        // 添加网站使用统计可视化展示（散点图效果）
        const topSitesCard = document.createElement('div');
        topSitesCard.className = 'stats-card';
        
        const topSitesHeader = document.createElement('div');
        topSitesHeader.className = 'stats-header';
        topSitesHeader.textContent = getTranslation('weekly_stats', language);
        topSitesCard.appendChild(topSitesHeader);
        
        // 创建网站散点图容器
        const bubbleContainer = document.createElement('div');
        bubbleContainer.className = 'bubble-chart-container';
        
        if (topHistorySites.length === 0) {
          const emptyMessage = document.createElement('div');
          emptyMessage.className = 'empty-message';
          emptyMessage.textContent = getTranslation('no_stats', language);
          bubbleContainer.appendChild(emptyMessage);
        } else {
          // 获取访问最多的网站的访问次数，用于计算相对大小
          const maxVisits = Math.max(...topHistorySites.map(site => site.visitCount));
          
          // 创建散点图效果
          topHistorySites.forEach((site, index) => {
            // 计算相对大小 (40px ~ 80px)
            const relativeSize = 40 + Math.floor((site.visitCount / maxVisits) * 40);
            
            // 创建气泡元素
            const bubble = document.createElement('div');
            bubble.className = 'site-bubble';
            bubble.style.width = `${relativeSize}px`;
            bubble.style.height = `${relativeSize}px`;
            
            // 随机位置（稍后会通过CSS动画调整）
            const randomDelay = Math.random() * 2;
            bubble.style.animationDelay = `${randomDelay}s`;
            
            // 创建网站图标
            const domain = site.url;
            let iconUrl = null;
            
            // 尝试多种方式获取网站图标
            if (siteMetadata[domain] && siteMetadata[domain].favIconUrl) {
              // 1. 从我们的元数据中获取
              iconUrl = siteMetadata[domain].favIconUrl;
            } else {
              // 2. 尝试使用谷歌的favicon服务获取
              iconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
            }
            
            // 内部内容
            if (iconUrl) {
              const icon = document.createElement('img');
              icon.src = iconUrl;
              icon.className = 'bubble-icon';
              icon.alt = site.title || domain;
              icon.onerror = function() {
                // 如果图标加载失败，替换为文字图标
                this.style.display = 'none';
                bubble.textContent = (site.title || domain).charAt(0).toUpperCase();
                bubble.classList.add('text-bubble');
              };
              bubble.appendChild(icon);
            } else {
              // 创建文字图标（使用网站名称首字母）
              bubble.textContent = (site.title || domain).charAt(0).toUpperCase();
              bubble.classList.add('text-bubble');
            }
            
            // 创建悬停提示框容器(先不添加到DOM)
            const tooltip = document.createElement('div');
            tooltip.className = 'bubble-tooltip';
            
            // 填充提示框内容
            const tooltipTitle = document.createElement('div');
            tooltipTitle.className = 'tooltip-title';
            tooltipTitle.textContent = site.title || domain;
            
            const tooltipDomain = document.createElement('div');
            tooltipDomain.className = 'tooltip-domain';
            
            const domainLabel = document.createElement('span');
            domainLabel.className = 'tooltip-label';
            domainLabel.textContent = getTranslation('site_url_label', language) + ':';
            
            const domainValue = document.createElement('span');
            domainValue.className = 'tooltip-value';
            domainValue.textContent = domain;
            
            tooltipDomain.appendChild(domainLabel);
            tooltipDomain.appendChild(domainValue);
            
            const tooltipVisits = document.createElement('div');
            tooltipVisits.className = 'tooltip-visits';
            
            const visitsLabel = document.createElement('span');
            visitsLabel.className = 'tooltip-label';
            visitsLabel.textContent = getTranslation('visits', language) + ':';
            
            const visitsValue = document.createElement('span');
            visitsValue.className = 'tooltip-value';
            visitsValue.textContent = site.visitCount;
            
            tooltipVisits.appendChild(visitsLabel);
            tooltipVisits.appendChild(visitsValue);
            
            tooltip.appendChild(tooltipTitle);
            tooltip.appendChild(tooltipDomain);
            tooltip.appendChild(tooltipVisits);
            
            // 点击打开该网站
            bubble.addEventListener('click', () => {
              chrome.tabs.create({ url: `https://${domain}` });
            });
            
            // 鼠标悬停显示提示框
            bubble.addEventListener('mouseenter', (e) => {
              // 定位提示框
              const rect = bubble.getBoundingClientRect();
              const bubbleCenter = rect.left + rect.width / 2;
              const bubbleTop = rect.top;
              
              tooltip.style.left = `${bubbleCenter - 90}px`; // 居中
              tooltip.style.top = `${bubbleTop - 100}px`; // 在气泡上方
              
              document.body.appendChild(tooltip);
              
              // 淡入效果
              setTimeout(() => {
                tooltip.classList.add('visible');
              }, 10);
            });
            
            // 鼠标移出隐藏提示框
            bubble.addEventListener('mouseleave', () => {
              tooltip.classList.remove('visible');
              
              // 等待过渡效果完成后删除
              setTimeout(() => {
                if (tooltip.parentNode) {
                  tooltip.parentNode.removeChild(tooltip);
                }
              }, 300);
            });
            
            bubbleContainer.appendChild(bubble);
          });
        }
        
        topSitesCard.appendChild(bubbleContainer);
        container.appendChild(topSitesCard);
        
        // 如果没有日常统计数据，仅显示顶级网站
        if (dates.length === 0) {
          return;
        }
        
        // 今天的访问统计
        if (dates.length > 0) {
          const today = dates[0];
          const todayStats = dailyStats[today];
          
          // 创建每日访问排行榜
          const todayCard = document.createElement('div');
          todayCard.className = 'stats-card';
          
          const todayHeader = document.createElement('div');
          todayHeader.className = 'stats-header';
          todayHeader.textContent = `${getTranslation('today_stats', language)} (${today})`;
          todayCard.appendChild(todayHeader);
          
          const totalInfo = document.createElement('div');
          totalInfo.className = 'stats-total-info';
          const totalMinutes = Math.round((todayStats.totalTime || 0) / 60);
          totalInfo.textContent = `${getTranslation('total_visits', language)}: ${todayStats.totalVisits || 0} | ${getTranslation('total_time', language)}: ${totalMinutes} ${getTranslation('minutes', language)}`;
          todayCard.appendChild(totalInfo);
          
          const domainKeys = Object.keys(todayStats.domains || {});
          
          if (domainKeys.length === 0) {
            const emptyRow = document.createElement('div');
            emptyRow.className = 'stats-row';
            emptyRow.textContent = getTranslation('no_stats', language);
            todayCard.appendChild(emptyRow);
          } else {
            // 按使用时间排序
            const sortedDomains = domainKeys.sort((a, b) => {
              return (todayStats.domains[b].timeSpent || 0) - (todayStats.domains[a].timeSpent || 0);
            });
            
            const maxTime = Math.max(...sortedDomains.map(domain => todayStats.domains[domain].timeSpent || 0));
            
            sortedDomains.slice(0, 10).forEach(domain => {
              const stats = todayStats.domains[domain];
              const timeInMinutes = Math.round((stats.timeSpent || 0) / 60);
              const percent = maxTime > 0 ? Math.round(((stats.timeSpent || 0) / maxTime) * 100) : 0;
              
              const row = document.createElement('div');
              row.className = 'stats-row';
              
              // 添加图标
              const iconContainer = document.createElement('div');
              iconContainer.className = 'site-icon-container small';
              
              // 尝试获取网站图标
              let iconUrl = null;
              
              // 从我们收集的元数据中获取图标
              if (siteMetadata[domain] && siteMetadata[domain].favIconUrl) {
                iconUrl = siteMetadata[domain].favIconUrl;
              }
              
              // 如果没有图标，使用默认图标或生成初始字母图标
              if (iconUrl) {
                const icon = document.createElement('img');
                icon.src = iconUrl;
                icon.className = 'site-icon';
                icon.alt = stats.title || domain;
                icon.onerror = function() {
                  // 如果图标加载失败，替换为文字图标
                  this.style.display = 'none';
                  iconContainer.textContent = (stats.title || domain).charAt(0).toUpperCase();
                  iconContainer.classList.add('text-icon');
                };
                iconContainer.appendChild(icon);
              } else {
                // 创建文字图标（使用网站名称首字母）
                iconContainer.textContent = (stats.title || domain).charAt(0).toUpperCase();
                iconContainer.classList.add('text-icon');
              }
              
              const siteName = document.createElement('div');
              siteName.className = 'stat-name';
              siteName.textContent = stats.title || domain;
              
              const siteValue = document.createElement('div');
              siteValue.className = 'stat-value';
              siteValue.textContent = `${stats.visits} ${getTranslation('visits', language)} | ${timeInMinutes} ${getTranslation('minutes', language)}`;
              
              const barContainer = document.createElement('div');
              barContainer.className = 'stat-bar-container';
              
              const bar = document.createElement('div');
              bar.className = 'stat-bar';
              bar.style.width = `${percent}%`;
              
              barContainer.appendChild(bar);
              
              // 添加一个容器包含图标和网站名称
              const nameContainer = document.createElement('div');
              nameContainer.className = 'stat-name-container';
              nameContainer.appendChild(iconContainer);
              nameContainer.appendChild(siteName);
              
              row.appendChild(nameContainer);
              row.appendChild(siteValue);
              row.appendChild(barContainer);
              todayCard.appendChild(row);
            });
          }
          
          container.appendChild(todayCard);
        }
      } catch (innerErr) {
        console.error('处理统计数据时出错:', innerErr);
        container.innerHTML += `<div class="empty-message">处理统计数据时出错，请检查控制台</div>`;
      }
    });
  } catch (err) {
    console.error('加载统计数据时出错:', err);
    container.innerHTML += `<div class="empty-message">加载统计数据时出错，请检查控制台</div>`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // 初始化语言设置
  initLanguageSelector();
  
  // 获取当前活动标签页信息并自动填充表单
  getCurrentTabInfo();
  
  // 设置标签页切换和更新的监听器
  setupTabListeners();
  
  // 添加标星网站打开按钮事件监听
  document.getElementById('open-starred').addEventListener('click', openStarredSites);
  
  // 标签切换功能
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');
      
      // 激活选中的标签按钮
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // 显示对应的内容面板
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tabName}-tab`) {
          content.classList.add('active');
        }
      });
      
      // 如果切换到"网站"标签，重新加载数据
      if (tabName === 'sites') {
        loadGroups();
      } else if (tabName === 'manage') {
        loadGroupsForManagement();
        updateGroupSelectWithTranslation();
      }
    });
  });

  // 添加分组按钮
  document.getElementById('add-group').addEventListener('click', () => {
    const groupName = document.getElementById('group-name').value.trim();
    
    if (groupName) {
      chrome.storage.sync.get(['groups'], function(result) {
        const groups = result.groups || [];
        groups.push({
          name: groupName,
          sites: []
        });
        
        chrome.storage.sync.set({ groups: groups }, function() {
          document.getElementById('group-name').value = '';
          updateGroupSelectWithTranslation();
          loadGroupsForManagement();
        });
      });
    }
  });

  // 添加网站按钮
  document.getElementById('add-site').addEventListener('click', () => {
    const siteName = document.getElementById('site-name').value.trim();
    const siteUrl = document.getElementById('site-url').value.trim();
    const groupSelect = document.getElementById('select-group');
    const selectedGroupIndex = groupSelect.selectedIndex - 1; // -1 因为第一个选项是"选择分组..."
    
    if (siteName && siteUrl && selectedGroupIndex >= 0) {
      chrome.storage.sync.get(['groups'], function(result) {
        const groups = result.groups || [];
        
        // 确保URL有http/https前缀
        let finalUrl = siteUrl;
        if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
          finalUrl = 'https://' + finalUrl;
        }
        
        groups[selectedGroupIndex].sites.push({
          name: siteName,
          url: finalUrl,
          starred: false // 添加新网站时默认不标星
        });
        
        chrome.storage.sync.set({ groups: groups }, function() {
          document.getElementById('site-name').value = '';
          document.getElementById('site-url').value = '';
          loadGroupsForManagement();
        });
      });
    }
  });

  // 初始加载
  loadGroups();
  updateGroupSelectWithTranslation();
  loadStats();
  
  // 加载网站分组到主界面
  async function loadGroups() {
    const container = document.getElementById('groups-container');
    container.innerHTML = '';
    
    const language = await getCurrentLanguage();
    console.log('加载分组，当前语言:', language); // 添加调试日志
    
    chrome.storage.sync.get(['groups'], function(result) {
      const groups = result.groups || [];
      
      if (groups.length === 0) {
        container.innerHTML = `<p>${getTranslation('no_groups', language)}</p>`;
        return;
      }
      
      groups.forEach((group, groupIndex) => {
        const groupElement = document.createElement('div');
        groupElement.className = 'group';
        
        // 创建分组头部
        const groupHeader = document.createElement('div');
        groupHeader.className = 'group-header';
        
        const groupName = document.createElement('div');
        groupName.className = 'group-name';
        groupName.textContent = group.name;
        
        const groupButtons = document.createElement('div');
        groupButtons.className = 'group-buttons';
        
        // 添加"增加标星"按钮
        const addStarButton = document.createElement('button');
        addStarButton.className = 'add-star-button';
        addStarButton.textContent = getTranslation('star_group', language);
        console.log('Star All按钮文本:', getTranslation('star_group', language)); // 添加调试日志
        addStarButton.addEventListener('click', (e) => {
          e.stopPropagation();
          
          // 查找分组中是否有网站还未标星
          const hasUnstarredSites = group.sites.some(site => !site.starred);
          
          if (hasUnstarredSites) {
            // 如果有未标星的网站，则将所有网站标星
            chrome.storage.sync.get(['groups'], function(result) {
              const updatedGroups = result.groups;
              updatedGroups[groupIndex].sites.forEach(site => {
                site.starred = true;
              });
              
              chrome.storage.sync.set({ groups: updatedGroups }, function() {
                loadGroups();
                loadGroupsForManagement();
              });
            });
          } else {
            // 如果所有网站都已标星，则取消所有标星
            chrome.storage.sync.get(['groups'], function(result) {
              const updatedGroups = result.groups;
              updatedGroups[groupIndex].sites.forEach(site => {
                site.starred = false;
              });
              
              chrome.storage.sync.set({ groups: updatedGroups }, function() {
                loadGroups();
                loadGroupsForManagement();
              });
            });
          }
        });
        
        const openAllButton = document.createElement('button');
        openAllButton.className = 'open-all';
        openAllButton.textContent = getTranslation('open_all', language);
        console.log('Open All按钮文本:', getTranslation('open_all', language)); // 添加调试日志
        openAllButton.addEventListener('click', (e) => {
          e.stopPropagation();
          group.sites.forEach(site => {
            chrome.tabs.create({ url: site.url });
          });
        });
        
        groupButtons.appendChild(addStarButton);
        groupButtons.appendChild(openAllButton);
        groupHeader.appendChild(groupName);
        groupHeader.appendChild(groupButtons);
        
        // 创建分组内容区域
        const groupContent = document.createElement('div');
        groupContent.className = 'group-content';
        
        if (group.sites.length === 0) {
          const emptyMessage = document.createElement('div');
          emptyMessage.className = 'site-item';
          emptyMessage.textContent = getTranslation('no_sites', language);
          groupContent.appendChild(emptyMessage);
        } else {
          group.sites.forEach((site, siteIndex) => {
            const siteItem = document.createElement('div');
            siteItem.className = 'site-item';
            
            // 添加星标按钮
            const starIcon = document.createElement('span');
            starIcon.className = 'star-icon' + (site.starred ? ' starred' : '');
            starIcon.innerHTML = '★';
            starIcon.title = site.starred ? 
              getTranslation('remove_star', language) : 
              getTranslation('add_star', language);
            
            starIcon.addEventListener('click', (e) => {
              e.stopPropagation();
              toggleSiteStar(groupIndex, siteIndex);
            });
            
            const siteName = document.createElement('div');
            siteName.className = 'site-name';
            siteName.textContent = site.name;
            siteName.addEventListener('click', () => {
              chrome.tabs.create({ url: site.url });
            });
            
            siteItem.appendChild(starIcon);
            siteItem.appendChild(siteName);
            groupContent.appendChild(siteItem);
          });
        }
        
        // 点击分组头部时展开/折叠内容
        groupHeader.addEventListener('click', () => {
          groupContent.classList.toggle('open');
        });
        
        groupElement.appendChild(groupHeader);
        groupElement.appendChild(groupContent);
        container.appendChild(groupElement);
      });
    });
  }
  
  // 加载分组到管理界面
  async function loadGroupsForManagement() {
    const container = document.getElementById('manage-groups-container');
    container.innerHTML = '';
    
    const language = await getCurrentLanguage();
    
    chrome.storage.sync.get(['groups'], function(result) {
      const groups = result.groups || [];
      
      if (groups.length === 0) {
        container.innerHTML = `<p>${getTranslation('no_groups', language)}</p>`;
        return;
      }
      
      groups.forEach((group, groupIndex) => {
        const groupElement = document.createElement('div');
        groupElement.className = 'manage-group';
        
        // 分组头部
        const groupHeader = document.createElement('div');
        groupHeader.className = 'manage-group-header';
        
        const groupName = document.createElement('span');
        groupName.className = 'manage-group-name';
        groupName.textContent = group.name;
        groupName.title = group.name;
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-group';
        deleteButton.textContent = getTranslation('delete', language);
        deleteButton.title = getTranslation('delete_group', language);
        deleteButton.addEventListener('click', () => {
          // 使用格式化的确认消息
          const confirmMsg = getTranslation('confirm_delete_group', language).replace('{0}', group.name);
          if (confirm(confirmMsg)) {
            chrome.storage.sync.get(['groups'], function(result) {
              const updatedGroups = result.groups.filter((_, i) => i !== groupIndex);
              chrome.storage.sync.set({ groups: updatedGroups }, function() {
                loadGroupsForManagement();
                updateGroupSelectWithTranslation();
              });
            });
          }
        });
        
        groupHeader.appendChild(groupName);
        groupHeader.appendChild(deleteButton);
        groupElement.appendChild(groupHeader);
        
        // 分组中的网站列表
        if (group.sites.length === 0) {
          const emptyMessage = document.createElement('div');
          emptyMessage.className = 'manage-site';
          emptyMessage.textContent = getTranslation('no_sites', language);
          groupElement.appendChild(emptyMessage);
        } else {
          group.sites.forEach((site, siteIndex) => {
            const siteItem = document.createElement('div');
            siteItem.className = 'manage-site';
            
            // 添加星标按钮到管理界面
            const starIcon = document.createElement('span');
            starIcon.className = 'star-icon' + (site.starred ? ' starred' : '');
            starIcon.innerHTML = '★';
            starIcon.title = site.starred ? 
              getTranslation('remove_star', language) : 
              getTranslation('add_star', language);
            
            starIcon.addEventListener('click', (e) => {
              e.stopPropagation();
              toggleSiteStar(groupIndex, siteIndex);
            });
            
            // 替换原来的单行显示方式
            const siteInfo = document.createElement('div');
            siteInfo.className = 'site-info';
            
            const siteName = document.createElement('div');
            siteName.className = 'site-info-name';
            siteName.textContent = site.name;
            
            const siteUrl = document.createElement('div');
            siteUrl.className = 'site-info-url';
            siteUrl.textContent = site.url;
            siteUrl.title = site.url; // 鼠标悬停时显示完整URL
            
            siteInfo.appendChild(siteName);
            siteInfo.appendChild(siteUrl);
            
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-site';
            deleteButton.textContent = getTranslation('delete', language);
            deleteButton.addEventListener('click', () => {
              chrome.storage.sync.get(['groups'], function(result) {
                result.groups[groupIndex].sites.splice(siteIndex, 1);
                chrome.storage.sync.set({ groups: result.groups }, function() {
                  loadGroupsForManagement();
                });
              });
            });
            
            siteItem.appendChild(starIcon);
            siteItem.appendChild(siteInfo);
            siteItem.appendChild(deleteButton);
            groupElement.appendChild(siteItem);
          });
        }
        
        container.appendChild(groupElement);
      });
    });
  }
  
  // 获取当前标签页信息并填充到表单
  function getCurrentTabInfo() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs && tabs.length > 0) {
        const currentTab = tabs[0];
        
        // 自动切换到管理分组标签(可能需要短暂停确保标签初始化完成)
        setTimeout(() => {
          document.querySelector('.tab-button[data-tab="manage"]').click();
        }, 100);
        
        // 填充网站名称（使用标签页标题）
        document.getElementById('site-name').value = currentTab.title;
        
        // 填充网站URL
        document.getElementById('site-url').value = currentTab.url;
      }
    });
  }

  // 更新当前标签页信息到表单（不切换标签）
  function updateCurrentTabInfo() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs && tabs.length > 0) {
        const currentTab = tabs[0];
        
        // 只有当表单元素存在且可见时才更新
        const siteNameInput = document.getElementById('site-name');
        const siteUrlInput = document.getElementById('site-url');
        const manageTab = document.getElementById('manage-tab');
        
        if (siteNameInput && siteUrlInput && manageTab) {
          // 确保管理标签是活跃的或者在其他标签可见的情况下才更新表单
          if (manageTab.classList.contains('active') || document.body.classList.contains('panel-mode')) {
            // 填充网站名称（使用标签页标题）
            siteNameInput.value = currentTab.title || '';
            
            // 填充网站URL
            siteUrlInput.value = currentTab.url || '';
          }
        }
      }
    });
  }

  // 监听标签页切换事件
  function setupTabListeners() {
    // 监听标签页激活事件（用户切换到不同标签页）
    chrome.tabs.onActivated.addListener(function(activeInfo) {
      updateCurrentTabInfo();
    });
    
    // 监听标签页更新事件（标签页URL或标题变化）
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
      // 只有当更新的是当前活动标签页且URL或标题发生变化时才更新
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs && tabs.length > 0 && tabs[0].id === tabId && 
            (changeInfo.url || changeInfo.title)) {
          updateCurrentTabInfo();
        }
      });
    });
  }

  // 更新分组选择下拉框
  function updateGroupSelect() {
    const groupSelect = document.getElementById('select-group');
    // 保留第一个"选择分组..."选项
    groupSelect.innerHTML = '<option value="">选择分组...</option>';
    
    chrome.storage.sync.get(['groups'], function(result) {
      const groups = result.groups || [];
      
      groups.forEach((group, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = group.name;
        groupSelect.appendChild(option);
      });
    });
  }

  // 更新分组选择下拉框，并应用翻译
  async function updateGroupSelectWithTranslation() {
    const language = await getCurrentLanguage();
    const groupSelect = document.getElementById('select-group');
    
    // 保留第一个选项，但应用翻译
    groupSelect.innerHTML = `<option value="">${getTranslation('select_group', language)}</option>`;
    
    chrome.storage.sync.get(['groups'], function(result) {
      const groups = result.groups || [];
      
      groups.forEach((group, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = group.name;
        groupSelect.appendChild(option);
      });
    });
  }

  // 初始化语言选择器
  async function initLanguageSelector() {
    // 获取当前语言
    const currentLanguage = await getCurrentLanguage();
    
    // 设置body的语言属性
    document.body.setAttribute('data-language', currentLanguage);
    
    // 设置下拉框当前值
    const languageSelector = document.getElementById('language-selector');
    languageSelector.value = currentLanguage;
    
    // 添加语言切换事件监听
    languageSelector.addEventListener('change', async function() {
      const newLanguage = this.value;
      await saveLanguage(newLanguage);
      
      // 设置body的语言属性
      document.body.setAttribute('data-language', newLanguage);
      
      // 强制刷新整个UI
      // 1. 更新标题和顶部元素
      document.querySelector('h1').textContent = getTranslation('title', newLanguage);
      document.title = getTranslation('title', newLanguage);
      
      // 2. 更新优先打开按钮
      const openStarredButton = document.getElementById('open-starred');
      if (openStarredButton) {
        openStarredButton.textContent = getTranslation('open_starred', newLanguage);
      }
      
      // 3. 更新标签页按钮
      document.querySelector('.tab-button[data-tab="sites"]').textContent = getTranslation('sites_tab', newLanguage);
      document.querySelector('.tab-button[data-tab="manage"]').textContent = getTranslation('manage_tab', newLanguage);
      document.querySelector('.tab-button[data-tab="stats"]').textContent = getTranslation('stats_tab', newLanguage);
      
      // 4. 清空并重新加载所有列表
      const groupsContainer = document.getElementById('groups-container');
      const manageGroupsContainer = document.getElementById('manage-groups-container');
      const statsContainer = document.getElementById('stats-container');
      
      if (groupsContainer) groupsContainer.innerHTML = '';
      if (manageGroupsContainer) manageGroupsContainer.innerHTML = '';
      if (statsContainer) statsContainer.innerHTML = '';
      
      // 5. 重新加载所有UI列表
      loadGroups();
      loadGroupsForManagement();
      loadStats();
      
      // 6. 更新所有表单元素文本
      const groupNameLabel = document.querySelector('label[for="group-name"]');
      if (groupNameLabel) groupNameLabel.textContent = getTranslation('group_name_label', newLanguage);
      
      const groupNameInput = document.getElementById('group-name');
      if (groupNameInput) groupNameInput.placeholder = getTranslation('group_name_placeholder', newLanguage);
      
      const addGroupButton = document.getElementById('add-group');
      if (addGroupButton) addGroupButton.textContent = getTranslation('add_group', newLanguage);
      
      const selectGroup = document.getElementById('select-group');
      if (selectGroup && selectGroup.options[0]) {
        selectGroup.options[0].textContent = getTranslation('select_group', newLanguage);
      }
      
      const siteNameLabel = document.querySelector('label[for="site-name"]');
      if (siteNameLabel) siteNameLabel.textContent = getTranslation('site_name_label', newLanguage);
      
      const siteNameInput = document.getElementById('site-name');
      if (siteNameInput) siteNameInput.placeholder = getTranslation('site_name_placeholder', newLanguage);
      
      const siteUrlLabel = document.querySelector('label[for="site-url"]');
      if (siteUrlLabel) siteUrlLabel.textContent = getTranslation('site_url_label', newLanguage);
      
      const addSiteButton = document.getElementById('add-site');
      if (addSiteButton) addSiteButton.textContent = getTranslation('add_site', newLanguage);
      
      // 7. 更新下拉框选项
      updateGroupSelectWithTranslation();
    });
    
    // 应用当前语言的翻译
    applyTranslations();
    // 确保下拉菜单也使用正确的翻译
    updateGroupSelectWithTranslation();
  }

  // 切换网站标星状态
  function toggleSiteStar(groupIndex, siteIndex) {
    chrome.storage.sync.get(['groups'], function(result) {
      const groups = result.groups || [];
      
      // 确保该网站存在
      if (groups[groupIndex] && groups[groupIndex].sites[siteIndex]) {
        // 如果starred属性不存在，则初始化为false
        if (typeof groups[groupIndex].sites[siteIndex].starred === 'undefined') {
          groups[groupIndex].sites[siteIndex].starred = false;
        }
        
        // 切换标星状态
        groups[groupIndex].sites[siteIndex].starred = !groups[groupIndex].sites[siteIndex].starred;
        
        // 保存更新后的数据
        chrome.storage.sync.set({ groups: groups }, function() {
          // 重新加载界面以反映变化
          loadGroups();
          loadGroupsForManagement();
        });
      }
    });
  }
  
  // 打开所有标星网站
  async function openStarredSites() {
    const language = await getCurrentLanguage();
    
    chrome.storage.sync.get(['groups'], function(result) {
      const groups = result.groups || [];
      let starredSites = [];
      
      // 收集所有标星的网站
      groups.forEach(group => {
        group.sites.forEach(site => {
          if (site.starred) {
            starredSites.push(site);
          }
        });
      });
      
      // 打开所有标星网站
      if (starredSites.length > 0) {
        starredSites.forEach(site => {
          chrome.tabs.create({ url: site.url });
        });
      } else {
        // 如果没有标星网站，显示提示
        alert(getTranslation('no_starred', language));
      }
    });
  }
});