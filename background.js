// 监听webNavigation事件，检测URL
chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  // 获取当前URL
  const url = details.url;
  
  // 检查URL是否以https://byrutgame.org./开头
  if (url.startsWith('https://byrutgame.org./')) {
    // 构建正确的URL，替换https://byrutgame.org./为https://byrutgame.org/
    const correctedUrl = url.replace('https://byrutgame.org./', 'https://byrutgame.org/');
    
    // 取消当前导航并跳转到正确的URL
    chrome.tabs.update(details.tabId, {
      url: correctedUrl
    });
    
    // 阻止默认导航
    return { cancel: true };
  }
});

// 也监听tabs更新事件，确保所有场景都能覆盖
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // 确保URL已改变且标签页正在加载
  if (changeInfo.url && tab.status === 'loading') {
    const url = changeInfo.url;
    
    // 检查URL是否以https://byrutgame.org./开头
    if (url.startsWith('https://byrutgame.org./')) {
      // 构建正确的URL
      const correctedUrl = url.replace('https://byrutgame.org./', 'https://byrutgame.org/');
      
      // 跳转到正确的URL
      chrome.tabs.update(tabId, {
        url: correctedUrl
      });
    }
  }
});