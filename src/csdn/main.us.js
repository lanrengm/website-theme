// ==UserScript==
// @name         CSDN Theme
// @namespace    lanrengm
// @version      1.0
// @description  Theme of CSDN Docs. CSDN文档皮肤。
// @author       lanrengm@gmail.com
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @match        https://blog.csdn.net/*/article/details/*
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

// 将本文件的内容复制到油猴插件中才可生效

(function() {
	'use strict';
	console.log(`油猴插件开始执行...`);
	GM_addStyle(`
	  /* 左侧 */
	  #asideProfile, /* 个人信息 */
	  #asideWriteGuide, /* 广告 */
	  #asideSearchArticle, /* 搜索框 */
	  #asideHotArticle, /* 热门文章 */
	  #asideNewComments, /* 最新评论 */
	  #asideArchive, /* 最新文章 */
	  #asideCategory, /* 半屏左侧分类专栏 */
	  #asidedirectory, /* 半屏左侧目录 */
	  /* 右侧 */
	  .aside-box.kind_person, /* 分类专栏 */
	  #recommend-right, /* 目录 */
	  /* 右侧工具栏 */
	  .csdn-side-toolbar,
	  /* 底部 */
	  .recommend-box, /* 推荐列表 */
	  .blog-footer-bottom, /* 网站信息 */
	  /* 顶部 */
	  #toolbarBox, /* 导航 */
	  xx{
		display: none!important;
		visibility:hidden;
	  }
	  .main_father {}
	`);
	console.log(`油猴插件执行结束.`);
  })();
  