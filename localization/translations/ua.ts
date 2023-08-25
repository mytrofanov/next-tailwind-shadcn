export default {
    account: {
        accountSettings: {
            title: 'Загальна Інформація',
            sendingEmail: {
                success: 'Посилання для активації відправлено на вказану адресу',
                error: 'Помилка під час відправки посилання на вказану адресу',
            },
            update: {
                success: 'Профайл оновлено',
                error: 'Виникла помилка при оновленні фото',
            },
            avatar: {
                title: 'Фото профілю',
                update: {
                    success: 'Фото оновлено',
                    error: 'Виникла помилка при оновленні фото',
                },
                uploadButton: 'Додати',
            },
            passwordManagement: {
                title: 'Управління Паролями',
                update: {
                    success: 'Пароль оновлено',
                    error: 'Виникла помилка при оновленні паролю',
                },
                passwordForm: {
                    currentPassword: {
                        label: 'Поточний пароль',
                    },
                    newPassword: {
                        label: 'Новий пароль',
                    },
                    repeatNewPassword: {
                        label: 'Повторіть новий пароль',
                    },
                    rules: {
                        required: {
                            message: 'Будь ласка введіть поточний пароль',
                        },
                        newRequired: {
                            message: 'Будь ласка введіть новий пароль',
                        },
                        validator: {
                            message: 'Паролі не співпадають',
                        },
                    },
                    updateButton: 'Оновити',
                },
            },
        },
        createForm: {
            firstName: {
                label: "Ім'я",
                required: "Ім'я обов'язкове поле!",
            },
            lastName: {
                label: 'Прізвище',
                required: "Прізвище обов'язкове поле!",
            },
            email: {
                label: 'Пошта',
                required: "Пошта обов'язкове поле!",
                type: 'Невірна поштова адреса!',
            },
            picture: {
                label: 'Зображення',
            },
            extra: {
                text: 'Тільки .png and .jpeg file formats',
            },
            upload: {
                button: 'Натисніть щоб завантажити',
            },
            file: {
                typeValidation: 'Не вірний тип файлу!',
            },
            saveButton: 'Зберегти',
            activateButton: 'Активувати',
        },
        pageHeader: {
            title: 'Налаштування облікового запису',
        },
        status: {
            activated: 'Активований',
            notActivated: 'Не Активований',
        },
    },

    activation: {
        button: {
            homePage: {
                title: 'Додому',
            },
        },
        success: {
            title: 'Реєстрація',
            text: 'Ваш обліковий запис успішно активовано. Ви можете увійти зараз.',
        },
        failure: {
            title: 'Обліковий запис не активований',
            text: 'Вибачте, щось пішло не так. Ми не можемо активувати Ваш обліковий запис.',
            contact: 'Будь-ласка, зверніться до нашої команди підтримки',
        },
    },

    categories: {
        attachSceneToCategoryModal: {
            attachCategoryTitle: 'Додати Сцену',
            okText: 'Додати',
            cancelText: 'Скасувати',
            notifications: {
                success: 'Сцену додано',
                error: 'Помилка при додаванні сцени до категорії',
            },
            select: {
                placeholder: 'Оберіть сцену',
            },
            selectLabel: 'Сцена:',
        },
        columns: {
            picture: {
                title: 'Зображення',
            },
            displayName: {
                title: 'Назва',
            },
            scenesNumber: {
                title: 'Сцени',
            },
            createdAt: {
                title: 'Дата створення',
            },
            email: {
                title: 'Автор',
            },
            menuItems: {
                buttonEdit: 'Редагувати',
                buttonRemove: 'Видалити',
            },
        },
        createCategoryButton: 'Створити',
        createCategoryModal: {
            title: 'Створити Категорію',
            okText: 'Створити',
            cancelText: 'Скасувати',
            createForm: {
                label: 'Назва',
                rules: {
                    required: {
                        message: 'Будь ласка введіть назву',
                    },
                },
                input: {
                    placeholder: 'Введіть назву категорії',
                },
            },
        },
        clearAll: {
            button: {
                title: 'Очистити',
            },
        },
        editCategoryModal: {
            title: 'Редагувати Категорію',
            okText: 'Оновити',
            cancelText: 'Скасувати',
            editForm: {
                label: 'Назва',
                rules: {
                    required: {
                        message: 'Будь ласка введіть назву',
                    },
                },
            },
            notifications: {
                success: {
                    title: 'Категорію оновлено',
                },
            },
        },
        pageHeader: {
            title: 'Категорії',
            removeButton: 'Видалити',
        },
        pagination: {
            perPage: '/сторінка',
        },
        removeModal: {
            title: 'Видалити категорію?',
            okText: 'Так',
            cancelText: 'Ні',
            notification: {
                removeCategory: {
                    error: 'Помилка при видаленні категорії',
                    success: 'Категорія видалена',
                },
            },
        },
        search: {
            placeholder: 'Пошук за назвою',
        },
        categorySelect: {
            placeholder: 'Оберіть категорію',
            input: {
                placeholder: 'Назва категорії',
            },
            createCategoryButton: 'Створити',
        },
        bulkRemoveModal: {
            title: 'Бажаєте видалити {count} категорій?',
            okText: 'Так',
            cancelText: 'Ні',
        },
        remove: {
            success: '{count} категорій було видалено',
            error: 'Виникла помилка',
        },
    },
    category: {
        categoryHeader: {
            title: 'Загальна Інформація',
            buttonEdit: 'Редагувати',
            description: {
                createdBy: {
                    label: 'Автор',
                },
                createdAt: {
                    label: 'Дата створення',
                },
                updatedAt: {
                    label: 'Дата оновлення',
                },
            },
            menu: {
                buttonRemove: 'Видалити',
            },
            upload: {
                notification: {
                    success: 'Зображення оновлено',
                    error: 'Помилка при оновленні',
                },
            },
        },
        scenes: {
            title: 'Сцени',
            addSceneButton: {
                title: 'Додати сцену до категорії',
            },
            status: {
                title: 'Статус:',
            },
            displayName: {
                title: 'Назва:',
            },
            sceneObjects: {
                title: "Об'єкти:",
            },
            playButton: {
                tooltip: "У сцени відсутні об'єкти",
            },
            warningIcon: {
                title: "У сцени відсутні об'єкти",
            },
            menu: {
                remove: {
                    label: 'Видалити з категорії',
                },
            },
            confirm: {
                title: 'Видалити сцену з категорії?',
                okText: 'Так',
                cancelText: 'Ні',
            },
            notification: {
                detachCategory: {
                    error: 'Помилка при видаленні сцени з категорії',
                    success: 'Сцена була видалена з категорії',
                },
            },
        },
        picture: {
            alt: 'Зображення категорії',
        },
    },

    403: {
        subTitle: 'Вибачте, у Вас немає доступу до цієї сторінки',
        button: 'Додому',
    },
    404: {
        subTitle: 'Вибачте, сторінка яку Ви відвідали не існує.',
        button: 'Додому',
    },
    500: {
        subTitle: 'Вибачте, щось пішло не так.',
        button: 'Додому',
    },

    forgotPassword: {
        cancel: 'Скасувати',
        title: 'Забули пароль?',
        text: 'Не знаєш пароль? Зміни його після підтвердження електронної адреси.',
        form: {
            continueButton: 'Далі',
            validateMessages: {
                required: "Обов'язкове поле!",
                types: {
                    email: 'Невірна електронна адреса!',
                },
            },
        },
        success: {
            title: 'Перевірте свою електронну адресу',
            weSent: 'Ми вислали Вам листа на адресу: ',
            withLink: ' з посиланням для зміни пароля. Перейдіть за посиланням щоб завершити зміну пароля',
            didNotReceive: 'Не получили листа на електронну адресу?',
            resend: 'Переслати',
            or: 'Або,',
            createNewAccount: ' створити новий обліковий запис ',
            differentEmail: 'використовуючи іншу електронну адресу.',
            closeBrowser: 'Можна закрити цю вкладку браузера якщо ви змінили пароль.',
        },
        failure: {
            title: 'Забули пароль',
            text: 'Вибачте, щось пішло не так. Ми не можемо відновити Ваш пароль.',
            contact: 'Будь-ласка, зверніться до нашої команди підтримки',
        },
    },
    login: {
        title: 'Увійти в Zeus',
        form: {
            error: 'електронна адреса або пароль не коректні',
            forgotPassword: 'Забув пароль?',
            or: 'Або',
            rules: {
                password: 'Будь ласка введіть пароль',
                email: 'Будь ласка введіть email',
            },
            registerNow: 'Зареєструватися!',
            loginButton: 'Увійти',
        },
    },

    menu: {
        languages: 'Мови',
        logout: 'Вихід',
    },

    root: {
        wrongPath: {
            message: 'Тут нічого немає!',
        },
    },

    registration: {
        cancel: 'Скасувати',
        form: {
            firstName: {
                label: "Ім'я",
                placeholder: "Введіть ім'я",
                required: "Ім'я обов'язкове",
            },
            lastName: {
                label: 'Прізвище',
                placeholder: 'Введіть фамілію',
                required: "Прізвище обов'язкове",
            },
            datePicker: {
                label: 'Дата народження',
                placeholder: 'Дата народження',
                required: "Дата народження обов'язкове",
                rules: {
                    message: 'Будь-ласка введіть дату народжння',
                },
            },
            email: {
                label: 'Електронна адреса:',
                placeholder: 'Введіть електронну адресу',
                required: "Електронна адреса обов'язкова",
            },
            newPassword: {
                label: 'Новий пароль',
                placeholder: 'Введіть новий пароль',
                required: "Пароль обов'язковий",
            },
            repeatNewPassword: {
                label: 'Підтвердіть новий пароль',
                placeholder: 'Підтвердіть новий пароль',
                required: 'Підтвердіть новий пароль',
            },
            passwordRules: {
                validator: {
                    message: 'Паролі не співпадають',
                },
            },
            registerButton: 'Зарєеструватись',
            validateMessages: {
                types: {
                    date: 'Невірна дата!',
                    email: 'Невірна електронна адреса!',
                },
            },
        },
        notification: {
            error: 'Сталася помилка під час реєстрації',
        },
        success: {
            title: 'Успіх',
            description:
                'Ми вислали Вам листа на електронну адресу: {email} з посиланням для активації Вашого облікового запису. {br} Перейдіть за посиланням щоб завершити реєстрацію.',
            loginButton: 'Увійти',
        },
        failure: {
            title: 'Щось пішло не так',
            contact: 'Будь-ласка, зверніться до нашої команди підтримки',
            loginButton: 'Увійти',
        },
        title: 'Реєстрація',
    },

    scene: {
        createObjectModal: {
            title: "Створити об'єкт",
            okText: 'Створити',
            cancelText: 'Скасувати',
            notification: {
                createObject: {
                    error: "Помилка при створенні об'єкту",
                },
                success: "Об'єкт оновлено",
                error: "Помилка при оновленні об'єкту",
            },
            form: {
                displayName: {
                    label: 'Назва',
                },
                rules: {
                    required: {
                        message: 'Будь ласка введіть назву',
                    },
                    upload: {
                        message: 'Завантажте файл будь-ласка',
                    },
                },
                input: {
                    placeholder: "Введіть назву об'єкта",
                },
                file: {
                    label: 'Файл',
                    typeValidation: 'Не вірний тип файлу!',
                },
                extra: {
                    text: '.gltf, .obj, .glb',
                },
                uploadButton: 'Завантажити',
            },
        },
        picture: {
            alt: 'Зображення сцени',
            uploadModal: {
                title: 'Завантаження зображення для сцени',
                okText: 'Оновити',
                cancelText: 'Скасувати',
                update: {
                    notification: {
                        success: 'Зображення сцени оновлено',
                        error: 'Помилка при оновленні',
                    },
                },
                extra: {
                    text: 'Тільки .png and .jpeg file formats',
                },
                rules: {
                    required: 'Завантажте файл будьласка',
                },
                file: {
                    typeValidation: 'Не вірний тип файлу!',
                },
                uploadButton: ' Натисніть щоб завантажити',
            },
        },
        settingsModal: {
            title: 'Налаштування сцени',
            okText: 'Оновити',
            cancelText: 'Скасувати',
            form: {
                background: {
                    label: 'Фон',
                    title: 'Фон',
                },
                shadowMap: {
                    label: 'Тип тіні:',
                },
            },
            upload: {
                notifications: {
                    success: 'Налаштування сцени оновлені',
                    error: 'Помилка при оновленні налаштування сцени',
                },
            },
        },
        sceneHeader: {
            title: 'Загальна Інформація',
            buttonShare: 'Поділитись',
            build: {
                buttonBuild: 'Побудувати',
                notification: {
                    error: 'Помилка при побудові',
                },
            },
            buttonEdit: 'Редагувати',
            buttonCreateObject: "Створити об'єкт",
            description: {
                createdBy: {
                    label: 'Автор',
                },
                createdAt: {
                    label: 'Дата створення',
                },
                updatedAt: {
                    label: 'Дата оновлення',
                },
                category: {
                    label: 'Категорія',
                    defaultText: 'Без Категорії',
                    tooltip: {
                        add: 'Додати до категорії',
                        edit: 'Змінити категорію',
                        remove: 'Видалити сцену з категорії',
                    },
                },
            },
            detachCategoryModal: {
                title: 'Видалити сцену з категорії?',
                okText: 'Так',
                cancelText: 'Ні',
                notification: {
                    detachCategory: {
                        error: 'Помилка при видаленні сцени з категорії',
                        success: 'Сцена була видалена з категорії',
                    },
                },
            },
            menu: {
                buttonRemove: 'Видалити',
                sceneSettings: 'Налаштування',
            },
            removeModal: {
                title: "Бажаєте видалити сцену з усіма об'єктами?",
                okText: 'Так',
                cancelText: 'Ні',
                notification: {
                    removeScene: {
                        error: 'Помилка при видаленні сцени',
                    },
                },
            },
            upload: {
                notification: {
                    success: 'Зображення оновлено',
                    error: 'Помилка при оновленні',
                },
            },
        },
        sceneObjects: {
            createObjectButton: {
                title: "Створити об'єкт",
            },
            list: {
                avatar: "Зображення об'єкту",
                menu: {
                    settings: {
                        label: 'Налаштування',
                    },
                    edit: {
                        label: 'Редагувати',
                    },
                    download: {
                        label: 'Завантажити',
                    },
                    remove: {
                        label: 'Видалити',
                    },
                },
            },
            title: "Об'єкти",
            removeObjectsModal: {
                title: "Бажаєте видалити цей об'єкт зі сцени?",
                okText: 'Так',
                cancelText: 'Ні',
            },
            settings: {
                objectSettingsModal: {
                    title: "Налаштування об'єкту",
                    okText: 'Оновити',
                    cancelText: 'Скасувати',
                },
                update: {
                    notification: {
                        success: "Налаштування об'єкту сцени оновлено",
                        error: "Помилка при оновленні об'єкту",
                    },
                },
            },
            notification: {
                removeObjects: {
                    error: "Помилка при видаленні об'єкту",
                },
            },
            updateObjectModal: {
                title: "Оновити об'єкт сцени",
                okText: 'Оновити',
                cancelText: 'Скасувати',
            },
        },
        shareSceneModal: {
            title: 'Поділитися Сценою',
            okText: 'Ок',
            label: 'Посилання',
            jsLibrary: {
                title: 'JS library',
                inputLabel: 'Bundle ID:',
                tooltip: 'Копіювати Bundle ID',
                description:
                    "Це опис сцени з об'єктами який включає дані файла та всі налаштування,Це опис сцени з об'єктами який включає дані файла та всі налаштування",
                notification: {
                    success: 'Bundle ID зкопійовано!',
                },
            },
            iframe: {
                title: 'iFrame',
                tooltip: 'Копіювати iFrame',
                description:
                    "Це опис сцени з об'єктами який включає дані файла та всі налаштування,Це опис сцени з об'єктами який включає дані файла та всі налаштування Це опис сцени з об'єктами ",
                notification: {
                    success: 'iFrame зкопійовано!',
                },
            },
        },
        uploadPictureForScene: 'Завантаження зображення для сцени',
        viewer: {
            notification: {
                success: 'Зображення оновлено',
                error: 'Помилка при оновленні',
            },
            snapshotButton: {
                tooltip: 'Зробити нове зображення сцени з превью',
            },
        },
    },

    scenes: {
        attachToCategoryModal: {
            attachCategoryTitle: 'Додати до Категорії',
            changeCategoryTitle: 'Змінити Категорію',
            okText: 'Оновити',
            cancelText: 'Скасувати',
            notifications: {
                success: 'Сцену оновлено',
                error: 'Помилка при оновленні сцени',
            },
            selectLabel: 'Категорія:',
        },
        createSceneButton: {
            createButton: 'Створити',
        },
        createSceneModal: {
            title: 'Створити Сцену',
            okText: 'Створити',
            cancelText: 'Скасувати',
            createForm: {
                label: 'Назва',
                rules: {
                    required: {
                        message: 'Будь ласка введіть назву',
                    },
                },
                input: {
                    placeholder: 'Введіть назву сцени',
                },
                category: {
                    label: 'Категорія',
                    placeholder: 'Виберіть категорію',
                },
            },
            notification: {
                success: 'Сцену створено',
            },
        },
        search: {
            placeholder: 'Пошук за назвою',
        },
        select: {
            placeholder: 'Усі',
        },
        datePicker: {
            from: {
                placeholder: 'З',
            },
            to: {
                placeholder: 'До',
            },
        },
        clearAll: {
            button: {
                title: 'Очистити всі фільтри',
            },
        },
        columns: {
            picture: {
                title: 'Зображення',
            },
            displayName: {
                title: 'Назва',
            },
            status: {
                title: 'Статус',
            },
            objectsNumber: {
                title: "Об'єкти",
            },
            category: {
                title: 'Категорія',
                popover: {
                    scenes: 'Сцени:',
                    createdBy: 'Автор:',
                },
            },
            createdAt: {
                title: 'Дата створення',
            },
            email: {
                title: 'Автор',
                accountStatus: {
                    title: 'Обліковий запис не активовано!',
                },
            },
            menuItems: {
                buttonAttachCategory: 'Додати до Категорії',
                buttonChangeCategory: 'Змінити Категорію',
                buttonShare: 'Поділитись',
                buttonEdit: 'Редагувати',
                buttonRemove: 'Видалити',
            },
        },
        editSceneModal: {
            title: 'Редагувати сцену',
            okText: 'Оновити',
            cancelText: 'Скасувати',
            editForm: {
                label: 'Назва',
                rules: {
                    required: {
                        message: 'Будь ласка введіть назву',
                    },
                },
            },
            notifications: {
                success: {
                    title: 'Сцену оновлено',
                },
            },
        },
        pageHeader: {
            title: 'Сцени',
            removeButton: 'Видалити',
        },
        pagination: {
            perPage: '/сторінка',
        },
        removeModal: {
            message: "Бажаєте видалити {count} сцен з усіма об'єктами всередині?",
            okText: 'Так',
            cancelText: 'Ні',
        },
        removeModalSingleScene: {
            title: "Бажаєте видалити сцену з усіма об'єктами всередині?",
            okText: 'Так',
            cancelText: 'Ні',
        },
        remove: {
            success: '{count} сцен було видалено',
            error: 'Виникла помилка при видаленні сцен',
        },
        section: {
            title: 'Сцени {count}',
        },
    },

    scenesTotal: {
        withoutObjects: "сцен без об'єктів",
        total: 'всього сцен',
    },

    sidebar: {
        menu: {
            categories: {
                title: 'Категорії',
            },
            scenes: {
                title: 'Сцени',
            },
            users: {
                title: 'Користувачі',
            },
        },
    },

    header: {
        menu: {
            accountSettings: {
                label: 'Налаштування облікового запису',
            },
        },
    },

    bulkUpload: {
        button: 'Завантажити',
        bulkUploadModal: {
            title: 'Завантажити файли',
            uploadButton: 'Завантажити',
            cancelButton: 'Скасувати',
            startAgainButton: 'Почати спочатку',
            clearButton: 'Очистити',
            categorySelect: {
                label: 'Категорія (опціонально):',
            },
            okButton: 'Ok',
            categories: {
                dropdownInput: {
                    placeholder: 'Введіть назву категорії',
                },
                notifications: {
                    error: 'Помилка при створенні Категорії',
                    success: 'Категорія створена',
                },
            },
            upload: {
                label: 'Файли:',
                uploadButton: {
                    loading: 'Завантаження...',
                },
                text: '.gltf, .obj, .glb',
                notifications: {
                    success: `{successfullyUploaded} з {total} сцен було успішно створено`,
                    exception: `Тільки {successfullyUploaded} з {total} сцен було успішно створено`,
                    error: 'Помилка при завантаженні',
                },
            },
            transfer: {
                item: {
                    one: 'Елемент',
                    many: 'Елементи',
                },
                titles: {
                    source: 'Джерело',
                    target: 'Ціль',
                },
                notFoundContent: 'Дані відсутні',
            },
        },
    },

    users: {
        buttons: {
            add: 'Додати користувача',
            remove: 'Видалити користувача',
        },
        pageHeader: {
            title: 'Користувачі',
        },
        search: {
            placeholder: "Шукати за ім'ям",
        },
        clearAll: {
            button: {
                title: 'Очистити всі фільтри',
            },
        },
        pagination: {
            perPage: '/сторінка',
        },
        picture: {
            alt: 'Зображення користувача',
        },
        table: {
            picture: {
                title: 'Зображення',
            },
            name: {
                title: "Повне ім'я",
            },
            roles: {
                title: 'Ролі',
            },
            status: {
                title: 'Статус',
            },
            email: {
                title: 'Пошта',
            },
            createdAt: {
                title: 'Дата створення',
            },
            createdBy: {
                title: 'Ким зареєстрований',
            },
            menuItems: {
                closeAccount: 'Закрити обліковий запис',
            },
        },
        createUserModal: {
            title: 'Створити нового користувача',
            okText: 'Створити',
            cancelText: 'Скасувати',
        },
        notification: {
            success: 'Створено нового користувача',
            error: 'Сталася помилка під час створення користувача',
        },
    },

    userRoleTag: {
        admin: 'А',
        editor: 'Р',
    },

    createUserForm: {
        firstName: {
            label: "Ім'я",
            placeholder: "Введіть ім'я",
            required: "Ім'я обов'язкове",
        },
        lastName: {
            label: 'Прізвище',
            placeholder: 'Введіть фамілію',
            required: "Прізвище обов'язкове",
        },
        email: {
            label: 'Електронна адреса:',
            placeholder: 'Введіть електронну адресу',
            required: "Електронна адреса обов'язкова",
        },
        validateMessages: {
            types: {
                email: 'Невірна електронна адреса!',
            },
        },
    },

    validation: {
        name: {
            length: 'Мінімально 3 та максимально 30 символів',
        },
        password: {
            message: 'Має бути в межах від 6 до 30 символів',
        },
    },
};
