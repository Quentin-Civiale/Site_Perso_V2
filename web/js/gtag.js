function analyticsTopBar(type) {
    switch (type) {
        case 'home':
            firebase.analytics().logEvent('topBar_home');
            break;
        case 'cv':
            firebase.analytics().logEvent('topBar_cv');
            break;
        case 'blog':
            firebase.analytics().logEvent('topBar_blog');
            break;
        default:
            break;
    }
}

function analyticsHome(type) {
    switch (type) {
        case 'callHomeView_byLogo':
            firebase.analytics().logEvent('call_HomeView_byLogo');
            break;
        case 'callHomeView_byFooter':
            firebase.analytics().logEvent('call_HomeView_byFooter');
            break;
        default:
            break;
    }
}

function analyticsResume(type) {
    switch (type) {
        case 'callCvView_byProfileCard':
            firebase.analytics().logEvent('call_CvView_byProfileCard');
            break;
        case 'callCvView_byFooter':
            firebase.analytics().logEvent('call_CvView_byFooter');
            break;
        default:
            break;
    }
}

function analyticsBlog(type) {
    switch (type) {
        case 'callBlogView_byBlogCard':
            firebase.analytics().logEvent('call_BlogView_byBlogCard');
            break;
        case 'callBlogView_byFooter':
            firebase.analytics().logEvent('call_BlogView_byFooter');
            break;
        default:
            break;
    }
}

function analyticsArticle(type) {
    switch (type) {
        case 'callArticleSymfony_byBlogView':
            firebase.analytics().logEvent('call_ArticleSymfony_byBlogView');
            break;
        case 'callArticleWordpress_byBlogView':
            firebase.analytics().logEvent('call_ArticleWordpress_byBlogView');
            break;
        default:
            break;
    }
}

// document.querySelector('.share_twitter').addEventListener('click', function (e) {
//     e.preventDefault();
//     /* Variable de l'url de l'article */
//     var articleUrl = this.getAttribute('data-url');
//
//
// })

function analyticsSharingArticle(type, title) {
    firebase.analytics().logEvent('share_article', {
        article_title: title,
        social_network: type
    });
}

function analyticsDownloadCV() {
    firebase.analytics().logEvent('downloadCv');
}

function analyticsContactForm(type) {
    switch (type) {
        case 'callContactForm_byNavbar':
            firebase.analytics().logEvent('call_ContactForm_byNavbar');
            break;
        case 'callContactForm_byProfileCard':
            firebase.analytics().logEvent('call_ContactForm_byProfileCard');
            break;
        case 'callContactForm_byAboutMeCard':
            firebase.analytics().logEvent('call_ContactForm_byAboutMeCard');
            break;
        case 'callContactForm_byFooter':
            firebase.analytics().logEvent('call_ContactForm_byFooter');
            break;
        case 'sendContactForm':
            firebase.analytics().logEvent('send_ContactForm');
            break;
        default:
            break;
    }
}

function analyticsSocialMediaBtn(type) {
    switch (type) {
        case 'onLinkedinBtn_byProfileCard':
            firebase.analytics().logEvent('on_LinkedinBtn_byProfileCard');
            break;
        case 'onGithubBtn_byProfileCard':
            firebase.analytics().logEvent('on_GithubBtn_byProfileCard');
            break;
        case 'onCodepenBtn_byProfileCard':
            firebase.analytics().logEvent('on_CodepenBtn_byProfileCard');
            break;
        case 'onLinkedinBtn_byFooter':
            firebase.analytics().logEvent('on_LinkedinBtn_byFooter');
            break;
        case 'onGithubBtn_byFooter':
            firebase.analytics().logEvent('on_GithubBtn_byFooter');
            break;
        case 'onCodepenBtn_byFooter':
            firebase.analytics().logEvent('on_CodepenBtn_byFooter');
            break;
        case 'onInstagramBtn_byFooter':
            firebase.analytics().logEvent('on_InstagramBtn_byFooter');
            break;
        default:
            break;
    }
}