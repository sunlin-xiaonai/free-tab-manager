// 全局变量跟踪当前活动标签页
let activeTabData = {
  tabId: null,
  domain: null,
  startTime: null
};

// 定期收集网站图标和标题
const siteMetadata = {};

// 初始化时设置侧边栏可用
chrome.runtime.onInstalled.addListener(() => {
  // 确保侧边栏可用
  if (chrome.sidePanel) {
    chrome.sidePanel.setOptions({
      enabled: true,
      path: 'panel.html'
    });
  }
});

// 扩展图标点击事件处理
chrome.action.onClicked.addListener((tab) => {
  // 打开侧边栏
  if (chrome.sidePanel) {
    chrome.sidePanel.open({ windowId: tab.windowId });
  }
});

// 跟踪网站访问记录
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // 只在页面完成加载时处理
  if (changeInfo.status === 'complete' && tab.url) {
    // 排除扩展页面和特殊页面
    if (!tab.url.startsWith('chrome://') && 
        !tab.url.startsWith('chrome-extension://') &&
        !tab.url.startsWith('edge://') &&
        !tab.url.startsWith('about:') &&
        !tab.url.startsWith('file://')) {
      
      // 提取日期作为键
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD 格式
      
      try {
        // 获取主域名
        const urlObj = new URL(tab.url);
        const domain = urlObj.hostname;
        
        // 保存网站元数据（图标和标题）
        if (tab.favIconUrl) {
          if (!siteMetadata[domain]) {
            siteMetadata[domain] = {};
          }
          siteMetadata[domain].favIconUrl = tab.favIconUrl;
          siteMetadata[domain].title = tab.title || domain;
          
          // 保存元数据到storage
          chrome.storage.local.set({ siteMetadata: siteMetadata });
        }
        
        // 记录访问
        recordVisit(domain, tab.title, today);
      } catch (error) {
        console.error('Error processing tab URL:', error);
      }
    }
  }
});

// 记录标签页变为活动状态
chrome.tabs.onActivated.addListener(activeInfo => {
  // 结束上一个活动标签的时间计时
  endCurrentActiveSession();
  
  // 获取新激活的标签页信息
  chrome.tabs.get(activeInfo.tabId, tab => {
    if (tab.url && 
        !tab.url.startsWith('chrome://') && 
        !tab.url.startsWith('chrome-extension://') &&
        !tab.url.startsWith('edge://') &&
        !tab.url.startsWith('about:') &&
        !tab.url.startsWith('file://')) {
      
      try {
        const urlObj = new URL(tab.url);
        const domain = urlObj.hostname;
        
        // 保存网站元数据（图标和标题）
        if (tab.favIconUrl) {
          if (!siteMetadata[domain]) {
            siteMetadata[domain] = {};
          }
          siteMetadata[domain].favIconUrl = tab.favIconUrl;
          siteMetadata[domain].title = tab.title || domain;
          
          // 保存元数据到storage
          chrome.storage.local.set({ siteMetadata: siteMetadata });
        }
        
        // 开始一个新的活动会话
        activeTabData = {
          tabId: tab.id,
          domain: domain,
          startTime: Date.now()
        };
      } catch (error) {
        console.error('Error starting active session:', error);
        activeTabData = {tabId: null, domain: null, startTime: null};
      }
    } else {
      activeTabData = {tabId: null, domain: null, startTime: null};
    }
  });
});

// 当窗口失去焦点时结束计时
chrome.windows.onFocusChanged.addListener(windowId => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    // 浏览器失去焦点，结束计时
    endCurrentActiveSession();
  } else {
    // 浏览器获得焦点，获取当前活动标签页并开始计时
    chrome.tabs.query({ active: true, windowId: windowId }, tabs => {
      if (tabs && tabs.length > 0 && tabs[0].url) {
        const tab = tabs[0];
        
        if (!tab.url.startsWith('chrome://') && 
            !tab.url.startsWith('chrome-extension://') &&
            !tab.url.startsWith('edge://') &&
            !tab.url.startsWith('about:') &&
            !tab.url.startsWith('file://')) {
          
          try {
            const urlObj = new URL(tab.url);
            const domain = urlObj.hostname;
            
            // 保存网站元数据（图标和标题）
            if (tab.favIconUrl) {
              if (!siteMetadata[domain]) {
                siteMetadata[domain] = {};
              }
              siteMetadata[domain].favIconUrl = tab.favIconUrl;
              siteMetadata[domain].title = tab.title || domain;
              
              // 保存元数据到storage
              chrome.storage.local.set({ siteMetadata: siteMetadata });
            }
            
            activeTabData = {
              tabId: tab.id,
              domain: domain,
              startTime: Date.now()
            };
          } catch (error) {
            console.error('Error starting window focus session:', error);
            activeTabData = {tabId: null, domain: null, startTime: null};
          }
        }
      }
    });
  }
});

// 结束当前活动会话并更新使用时间
function endCurrentActiveSession() {
  if (activeTabData.domain && activeTabData.startTime) {
    const now = Date.now();
    const duration = now - activeTabData.startTime; // 毫秒
    
    // 只记录超过1秒的活动
    if (duration > 1000) {
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD 格式
      
      // 更新使用时间
      updateUsageTime(activeTabData.domain, Math.round(duration / 1000), today);
    }
    
    // 重置活动标签数据
    activeTabData = {tabId: null, domain: null, startTime: null};
  }
}

// 记录网站访问
function recordVisit(domain, title, date) {
  chrome.storage.local.get(['dailyStats'], function(result) {
    let dailyStats = result.dailyStats || {};
    
    // 确保日期的数据结构存在
    if (!dailyStats[date]) {
      dailyStats[date] = {
        domains: {},
        totalVisits: 0,
        totalTime: 0
      };
    }
    
    // 确保域名的数据结构存在
    if (!dailyStats[date].domains[domain]) {
      dailyStats[date].domains[domain] = {
        visits: 0,
        timeSpent: 0, // 秒
        title: title
      };
    }
    
    // 增加访问次数
    dailyStats[date].domains[domain].visits += 1;
    dailyStats[date].domains[domain].title = title; // 更新标题
    dailyStats[date].totalVisits += 1;
    
    // 保存更新的统计信息
    chrome.storage.local.set({ dailyStats: dailyStats });
  });
}

// 更新使用时间
function updateUsageTime(domain, seconds, date) {
  chrome.storage.local.get(['dailyStats'], function(result) {
    let dailyStats = result.dailyStats || {};
    
    // 确保日期的数据结构存在
    if (!dailyStats[date]) {
      dailyStats[date] = {
        domains: {},
        totalVisits: 0,
        totalTime: 0
      };
    }
    
    // 确保域名的数据结构存在
    if (!dailyStats[date].domains[domain]) {
      dailyStats[date].domains[domain] = {
        visits: 0,
        timeSpent: 0,
        title: domain
      };
    }
    
    // 增加使用时间
    dailyStats[date].domains[domain].timeSpent += seconds;
    dailyStats[date].totalTime += seconds;
    
    // 保存更新的统计信息
    chrome.storage.local.set({ dailyStats: dailyStats });
  });
}

// 获取Chrome历史记录中的前10个高频网站
function getTopHistorySites() {
  // 计算7天前的时间戳
  const oneWeekAgo = new Date().getTime() - (7 * 24 * 60 * 60 * 1000);
  
  // 查询Chrome的历史记录
  chrome.history.search({
    text: '',           // 空字符串会匹配所有项目
    startTime: oneWeekAgo,
    maxResults: 100     // 获取更多结果然后进行处理
  }, function(historyItems) {
    // 按域名分组
    const domainVisits = {};
    
    historyItems.forEach(item => {
      try {
        const url = new URL(item.url);
        const domain = url.hostname;
        
        if (!domainVisits[domain]) {
          domainVisits[domain] = {
            visitCount: 0,
            lastVisitTime: 0,
            title: item.title || domain,
            url: domain
          };
        }
        
        domainVisits[domain].visitCount += 1;
        
        // 记录最近的访问时间
        if (item.lastVisitTime > domainVisits[domain].lastVisitTime) {
          domainVisits[domain].lastVisitTime = item.lastVisitTime;
          domainVisits[domain].title = item.title || domain;
        }
      } catch (error) {
        console.error('Error processing history item:', error);
      }
    });
    
    // 转换为数组并排序
    const sortedDomains = Object.keys(domainVisits)
      .map(domain => domainVisits[domain])
      .sort((a, b) => b.visitCount - a.visitCount)
      .slice(0, 10); // 取前10个
    
    // 存储结果
    chrome.storage.local.set({ topHistorySites: sortedDomains });
  });
}

// 定期更新顶级历史网站数据
setInterval(getTopHistorySites, 30 * 60 * 1000); // 每30分钟更新一次

// 初始化时立即获取历史记录
getTopHistorySites();

// 浏览器关闭时结束计时
chrome.runtime.onSuspend.addListener(() => {
  endCurrentActiveSession();
});