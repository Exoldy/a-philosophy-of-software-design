export default {
    appearance: true,
    base: '/a-philosophy-of-software-design/',
    lang: 'ru-RU',
    title: 'Философия дизайна ПО',
    lastUpdated: true,
    themeConfig: {
        sidebar: [{
            items: [
                { text: 'Предисловие', link: '/preface' },
                { text: '1. Введение', link: '/introduction' },
                { text: '2. Суть всей боли (Природа Сложности)', link: '/the-nature-of-complexity' },
                { text: '3. "Работает — и ладно" — девиз неудачников', link: '/working-code-is-not-enough' },
                { text: '4. Глубокие модули', link: '/modules-should-be-deep' },
                { text: '5. Прячем говно под ковер', link: '/information-hiding-and-leakage' },
                { text: '6. Универсальность модулей', link: '/general-purpose-modules-are-deeper' },
                { text: '7. Разные слои — разные абстракции', link: '/different-layer-different-abstraction' },
                { text: '8. Скидывай сложность вниз', link: '/pull-complexity-downwards' },
                { text: '9. Вместе или порознь?', link: '/better-together-or-better-apart' },
                { text: '10. Ошибок не существует', link: '/define-errors-out-of-existence' },
                { text: '11. Проектируй дважды', link: '/design-it-twice' },
                { text: '12. Зачем писать комменты?', link: '/why-write-comments-the-four-excuses' },
                { text: '13. Комментируй то, что не очевидно', link: '/comments-should-describe-things-that-are-not-obvious-from-the-code' },
                { text: '14. Нейминг', link: '/choosing-names' },
                { text: '15. Сначала комменты, потом код', link: '/write-the-comments-first' },
                { text: '16. Трогаем старый код', link: '/modifying-existing-code' },
                { text: '17. Консистентность', link: '/consistency' },
                { text: '18. Код должен быть понятен даже ежу', link: '/code-should-be-obvious' },
                { text: '19. Модные молодежные тренды', link: '/software-trends' },
                { text: '20. Производительность', link: '/designing-for-performance' },
                { text: '21. Определись, что важно', link: '/decide-what-matters' },
                { text: '22. Заключение', link: '/conclusion' },
                { text: 'Шпаргалка', link: '/summary' }
            ]
        }],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Exoldy/a-philosophy-of-software-design/' }
        ],
        editLink: {
            pattern: 'https://github.com/Exoldy/a-philosophy-of-software-design/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        }
    },
    markdown: {
        config: (md) => {
            md.use(require('markdown-it-texmath'), { katexOptions: { output: "html" } })
        }
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => ["eqn", "eq"].includes(tag)
            }
        }
    }
}