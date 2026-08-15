document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ПЕРЕВОДЫ ---
    const translations = {
        ru: {
            nav_login_btn: "Рег./Вход", opt_title: "Оптимизация", opt_desc: "Как наше ПО оптимизировано для максимального FPS.",
            vis_title: "Визуальные Эффекты", vis_desc: "Потрясающая красота графики.", team_title: "Наша Команда",
            role_lead: "Главный Разработчик", role_texture: "Художник текстур",
            download_title: "Скачать Визуал", download_desc: "Нажми, чтобы скачать", profile_title: "Мой профиль", profile_desc: "Нажми, чтобы открыть",
            back_btn: "❮ Назад", auth_welcome: "С возвращением", auth_subtitle: "Начни свой путь прямо сейчас",
            auth_remember: "Запомнить меня", auth_no_acc: "Нет аккаунта?", auth_reg: "Зарегистрироваться",
            auth_reg_title: "Регистрация", auth_reg_subtitle: "Создай аккаунт, чтобы начать", auth_already: "Уже есть аккаунт?", auth_login_link: "Войти",
            form_create_btn: "Создать аккаунт", form_login_btn: "Войти",
            auth_login_ph: "Логин или e-mail", auth_pass_ph: "Введите пароль", press_esc: "Нажмите ESC для закрытия",
            reviews_title: "Обзор и отзывы", review_1: "Отличный мод, FPS реально вырос, визуалы просто топ! Всем советую.",
            review_2: "Никаких лагов, играю с кайфом. Настройка заняла буквально пару минут.", review_3: "Разработчики молодцы, быстро отвечают на вопросы в поддержке. Софт пушка!",
            footer_project: "Проект от:", footer_policy: "Политика", footer_terms: "Согласие", footer_offer: "Оферта", footer_rules: "Правила", footer_copy: "© 2026 Obsession. Все права защищены.",
            modal_download_title: "Скачать Soup Visuals", modal_download_btn: "Скачать", modal_profile_info: "Здесь будет информация о профиле пользователя.", modal_docs_title: "Документ"
        },
        en: {
            nav_login_btn: "Reg/Login", opt_title: "Optimization", opt_desc: "How our software is optimized for maximum FPS.",
            vis_title: "Visual Effects", vis_desc: "Stunning graphical beauty.", team_title: "Our Team",
            role_lead: "Lead Developer", role_texture: "Texture Artist",
            download_title: "Download Visuals", download_desc: "Click to download", profile_title: "My Profile", profile_desc: "Click to open",
            back_btn: "❮ Back", auth_welcome: "Welcome back", auth_subtitle: "Start your journey right now",
            auth_remember: "Remember me", auth_no_acc: "No account?", auth_reg: "Register",
            auth_reg_title: "Registration", auth_reg_subtitle: "Create an account to start", auth_already: "Already have an account?", auth_login_link: "Login",
            form_create_btn: "Create account", form_login_btn: "Login",
            auth_login_ph: "Login or email", auth_pass_ph: "Enter password", press_esc: "Press ESC to close",
            reviews_title: "Review and Feedback", review_1: "Excellent mod, FPS really increased, visuals are top notch! I recommend it to everyone.",
            review_2: "No lags, enjoying the game. Setup took literally a couple of minutes.", review_3: "The developers are great, they answer support questions quickly. The software is fire!",
            footer_project: "Project by:", footer_policy: "Privacy Policy", footer_terms: "Terms of Use", footer_offer: "Public Offer", footer_rules: "Rules", footer_copy: "© 2026 Obsession. All rights reserved.",
            modal_download_title: "Download Soup Visuals", modal_download_btn: "Download", modal_profile_info: "User profile information will be here.", modal_docs_title: "Document"
        }
    };

    let currentLang = 'ru';

    // --- 2. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ---
    const langBtn = document.getElementById('lang-toggle');
    function updateLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) {
                el.innerText = translations[currentLang][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[currentLang] && translations[currentLang][key]) {
                el.placeholder = translations[currentLang][key];
            }
        });
        updateDocContent();
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ru' ? 'en' : 'ru';
            updateLanguage();
        });
    }

    // --- 3. ПЕРЕКЛЮЧЕНИЕ ТЕМЫ ---
    const themeBtn = document.getElementById('theme-toggle');
    const themeImg = document.getElementById('theme-img');

    if (themeBtn && themeImg) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            themeImg.src = document.body.classList.contains('light-theme') ? 'White.png' : 'Night.png';
        });
    }

    // --- 4. НАВИГАЦИЯ ---
    const mainPage = document.getElementById('main-page');
    const authPage = document.getElementById('auth-page');
    const navLoginBtn = document.getElementById('nav-login');
    const navBackBtn = document.getElementById('nav-back');

    if (navLoginBtn && mainPage && authPage) {
        navLoginBtn.addEventListener('click', () => {
            mainPage.classList.remove('active');
            authPage.classList.add('active');
            window.scrollTo(0, 0);
        });
    }

    if (navBackBtn && mainPage && authPage) {
        navBackBtn.addEventListener('click', () => {
            authPage.classList.remove('active');
            mainPage.classList.add('active');
        });
    }

    // --- 5. АВТОРИЗАЦИЯ / РЕГИСТРАЦИЯ ---
    const toggleAuthMode = document.getElementById('toggle-auth-mode');
    const authTitle = document.getElementById('auth-title');
    const authSubtitle = document.getElementById('auth-subtitle');
    const submitBtn = document.querySelector('.submit-btn');
    const authNoAccText = document.querySelector('.register-link span');
    let isLogin = true;

    if (toggleAuthMode && authTitle && authSubtitle && submitBtn && authNoAccText) {
        toggleAuthMode.addEventListener('click', (e) => {
            e.preventDefault();
            isLogin = !isLogin;
            if (isLogin) {
                authTitle.setAttribute('data-i18n', 'auth_welcome');
                authSubtitle.setAttribute('data-i18n', 'auth_subtitle');
                authNoAccText.setAttribute('data-i18n', 'auth_no_acc');
                toggleAuthMode.setAttribute('data-i18n', 'auth_reg');
                submitBtn.setAttribute('data-i18n', 'form_login_btn');
            } else {
                authTitle.setAttribute('data-i18n', 'auth_reg_title');
                authSubtitle.setAttribute('data-i18n', 'auth_reg_subtitle');
                authNoAccText.setAttribute('data-i18n', 'auth_already');
                toggleAuthMode.setAttribute('data-i18n', 'auth_login_link');
                submitBtn.setAttribute('data-i18n', 'form_create_btn');
            }
            updateLanguage();
        });
    }

    // --- 6. МОДАЛЬНЫЕ ОКНА ---
    const modals = document.querySelectorAll('.modal-overlay');
    const closeBtns = document.querySelectorAll('.modal-close');
    const openDownloadBtn = document.getElementById('open-download');
    const openProfileBtn = document.getElementById('open-profile');
    const downloadModal = document.getElementById('download-modal');
    const profileModal = document.getElementById('profile-modal');
    const docsModal = document.getElementById('docs-modal');
    const docsTitle = document.getElementById('docs-title');
    const docsContent = document.getElementById('docs-content');

    function openModal(modal) {
        if (modal) modal.classList.add('active');
    }

    function closeAllModals() {
        modals.forEach(m => m.classList.remove('active'));
        currentOpenDoc = null;
    }

    if (openDownloadBtn) openDownloadBtn.addEventListener('click', () => openModal(downloadModal));
    if (openProfileBtn) openProfileBtn.addEventListener('click', () => openModal(profileModal));

    closeBtns.forEach(btn => btn.addEventListener('click', closeAllModals));

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAllModals();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });

    // --- 7. ДОКУМЕНТЫ ---
    const docLinks = document.querySelectorAll('.doc-link');
    const docTexts = {
        ru: {
            policy: { title: "Политика конфиденциальности", text: "Текст Политики конфиденциальности...\n\nЗдесь описано, как мы обрабатываем ваши данные и обеспечиваем их безопасность." },
            terms: { title: "Пользовательское соглашение", text: "Пользовательское соглашение...\n\nПравила и условия использования нашего программного обеспечения." },
            offer: { title: "Публичная оферта", text: "Публичная оферта...\n\nУсловия предоставления услуг, порядок оплаты и возврата средств." },
            rules: { title: "Правила сообщества", text: "Правила сообщества...\n\nНе нарушайте правила, будьте вежливы к другим участникам проекта." }
        },
        en: {
            policy: { title: "Privacy Policy", text: "Privacy Policy Text...\n\nHere we describe how we process your data and ensure its security." },
            terms: { title: "Terms of Service", text: "Terms of Service...\n\nRules and conditions for using our software." },
            offer: { title: "Public Offer", text: "Public Offer...\n\nTerms of service provision, payment and refund procedures." },
            rules: { title: "Community Rules", text: "Community Rules...\n\nDo not break the rules, be polite to other project members." }
        }
    };

    let currentOpenDoc = null;

    function updateDocContent() {
        if (currentOpenDoc && docsTitle && docsContent && docTexts[currentLang] && docTexts[currentLang][currentOpenDoc]) {
            docsTitle.innerText = docTexts[currentLang][currentOpenDoc].title;
            docsContent.innerText = docTexts[currentLang][currentOpenDoc].text;
        }
    }

    docLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentOpenDoc = link.getAttribute('data-doc');
            updateDocContent();
            openModal(docsModal);
        });
    });

    // --- 8. ЮТУБ ---
    const videoBlock = document.getElementById('video-block');
    if (videoBlock) {
        videoBlock.addEventListener('click', () => {
            window.open('[https://www.youtube.com/watch?v=sKSQuqkba0Y](https://www.youtube.com/watch?v=sKSQuqkba0Y)', '_blank');
        });
    }

    // --- 9. АНИМАЦИИ ---
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.15
        });
    }

    // Запускаем перевод при старте
    updateLanguage();
});