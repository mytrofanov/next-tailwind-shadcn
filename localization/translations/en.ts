export default {
    account: {
        accountSettings: {
            title: 'General Information',
            sendingEmail: {
                success: 'Activation link has been sent to provided email address',
                error: 'Error while sending to provided email address',
            },
            update: {
                success: 'Your profile has been updated',
                error: 'Error while profile photo updating',
            },
            avatar: {
                title: 'Profile photo',
                update: {
                    success: 'Profile photo has been updated',
                    error: 'Error while profile photo updating',
                },
                uploadButton: 'Upload',
            },
            passwordManagement: {
                title: 'Password Management',
                update: {
                    success: 'Password has been updated',
                    error: 'Error while updating password',
                },
                passwordForm: {
                    currentPassword: {
                        label: 'Current password',
                    },
                    newPassword: {
                        label: 'New password',
                    },
                    repeatNewPassword: {
                        label: 'Repeat new password',
                    },
                    rules: {
                        required: {
                            message: 'Please input your current password',
                        },
                        newRequired: {
                            message: 'Please input your new password',
                        },
                        validator: {
                            message: 'Passwords are not the same',
                        },
                    },
                    updateButton: 'Update',
                },
            },
        },
        createForm: {
            firstName: {
                label: 'First name',
                required: 'First name is required!',
            },
            lastName: {
                label: 'Last name',
                required: 'Last name is required!',
            },
            email: {
                label: 'Email',
                required: 'Email is required!',
                type: 'Email is not valid!',
            },
            picture: {
                label: 'Picture',
            },
            extra: {
                text: 'Only .png and .jpeg file formats',
            },
            upload: {
                button: 'Click to upload',
            },
            file: {
                typeValidation: 'Wrong file type!',
            },
            saveButton: 'Save',
            activateButton: 'Activate',
        },
        pageHeader: {
            title: 'Account Settings',
        },
        status: {
            activated: 'Activated',
            notActivated: 'Not Activated',
        },
    },

    activation: {
        button: {
            homePage: {
                title: 'Home',
            },
        },
        success: {
            title: 'Registration',
            text: 'Your account has been successfully activated. You can now log in',
        },
        failure: {
            title: 'Registration',
            text: 'Sorry, something goes wrong. We cannot activate your account.',
            contact: 'Please, contact our support team',
        },
    },

    categories: {
        attachSceneToCategoryModal: {
            attachCategoryTitle: 'Attach Scene',
            okText: 'Attach',
            cancelText: 'Cancel',
            notifications: {
                success: 'Scene has been attached',
                error: 'Error while attaching Scene to Category',
            },
            select: {
                placeholder: 'Choose scene',
            },
            selectLabel: 'Scene:',
        },
        columns: {
            picture: {
                title: 'Picture',
            },
            displayName: {
                title: 'Display name',
            },
            scenesNumber: {
                title: 'Scenes',
            },
            createdAt: {
                title: 'Created at',
            },
            email: {
                title: 'Created by',
            },
            menuItems: {
                buttonEdit: 'Edit',
                buttonRemove: 'Remove',
            },
        },
        createCategoryButton: 'Create',
        createCategoryModal: {
            title: 'Create Category',
            okText: 'Create',
            cancelText: 'Cancel',
            createForm: {
                label: 'Display name',
                rules: {
                    required: {
                        message: 'Please input Display name',
                    },
                },
                input: {
                    placeholder: 'Type category display name',
                },
            },
        },
        editCategoryModal: {
            title: 'Edit Category',
            okText: 'Update',
            cancelText: 'Cancel',
            editForm: {
                label: 'Display name',
                rules: {
                    required: {
                        message: 'Please input Display name',
                    },
                },
            },
            notifications: {
                success: {
                    title: 'Category has been updated',
                },
            },
        },
        clearAll: {
            button: {
                title: 'Clear all',
            },
        },
        pageHeader: {
            title: 'Categories',
            removeButton: 'Remove',
        },
        pagination: {
            perPage: '/page',
        },
        removeModal: {
            title: 'Do you want to remove the category?',
            okText: 'Yes',
            cancelText: 'No',
            notification: {
                removeCategory: {
                    error: 'Error while deleting category',
                    success: 'Category has been removed',
                },
            },
        },
        search: {
            placeholder: 'Search by display name',
        },
        categorySelect: {
            input: {
                placeholder: 'Category name',
            },
            createCategoryButton: 'Create',
            placeholder: 'Choose category',
        },
        bulkRemoveModal: {
            title: 'Do you want to remove {count} categories?',
            okText: 'Yes',
            cancelText: 'No',
        },
        remove: {
            success: '{count} categories have been removed',
            error: 'Something went wrong',
        },
    },
    category: {
        categoryHeader: {
            title: 'General Information',
            buttonEdit: 'Edit',
            description: {
                createdBy: {
                    label: 'Created by',
                },
                createdAt: {
                    label: 'Created at',
                },
                updatedAt: {
                    label: 'Updated at',
                },
            },
            menu: {
                buttonRemove: 'Remove',
            },
            upload: {
                notification: {
                    success: 'Picture has been updated',
                    error: 'Error while updating',
                },
            },
        },
        scenes: {
            title: 'Scenes',
            addSceneButton: {
                title: 'Attach scene to category',
            },
            status: {
                title: 'Status:',
            },
            displayName: {
                title: 'Display name:',
            },
            sceneObjects: {
                title: 'Objects:',
            },
            playButton: {
                tooltip: 'There are no objects inside the scene',
            },
            warningIcon: {
                title: 'There are no objects attached to the scene',
            },
            menu: {
                remove: {
                    label: 'Remove from category',
                },
            },
            confirm: {
                title: 'Do you want to remove this scene from the category?',
                okText: 'Yes',
                cancelText: 'No',
            },
            notification: {
                detachCategory: {
                    error: 'Error while remove the scene from category',
                    success: 'Scene was removed from category',
                },
            },
        },
        picture: {
            alt: 'Category picture',
        },
    },

    403: {
        subTitle: 'Sorry, you are not authorized to access this page.',
        button: 'Home',
    },
    404: {
        subTitle: 'Sorry, the page you visited does not exist.',
        button: 'Home',
    },
    500: {
        subTitle: 'Sorry, something went wrong.',
        button: 'Home',
    },

    forgotPassword: {
        cancel: 'Cancel',
        title: 'Forgot your password?',
        text: "Don't know your password? Reset it after confirming your email address.",
        form: {
            continueButton: 'Next',
            validateMessages: {
                required: 'Please input your email!',
                types: {
                    email: 'Email is not valid!',
                },
            },
        },
        success: {
            title: 'Check your email',
            weSent: 'We sent an email to: ',
            withLink: ' with a link to reset your password.{br} Follow the link to continue resetting your password',
            didNotReceive: 'Didn`t receive an email?',
            resend: 'Resend',
            or: 'Or,',
            createNewAccount: ' create a new account ',
            differentEmail: 'using a different email address.',
            closeBrowser: 'You can close this browser window once you have reset your password.',
        },
        failure: {
            title: 'Forgot password',
            text: 'Sorry, something goes wrong. We cannot reset your password.',
            contact: 'Please, contact our support team',
        },
    },
    login: {
        title: 'Sign in to Zeus',
        form: {
            error: 'Email or password is not correct',
            forgotPassword: 'Forgot password?',
            or: 'Or',
            rules: {
                password: 'Please input your password',
                email: 'Please input your email!',
            },
            registerNow: 'Register now!',
            loginButton: 'Log in',
        },
    },

    menu: {
        languages: 'Languages',
        logout: 'Logout',
    },

    registration: {
        cancel: 'Cancel',
        form: {
            firstName: {
                label: 'First name',
                placeholder: 'Type your first name',
                required: 'First name is required',
            },
            lastName: {
                label: 'Last name',
                placeholder: 'Type your last name',
                required: 'Last name is required',
            },
            datePicker: {
                label: 'Date of Birth',
                placeholder: 'Date of birth',
                required: 'Date is required',
                rules: {
                    message: 'Please enter your date of birth',
                },
            },
            email: {
                label: 'Email',
                placeholder: 'Type your email',
                required: 'Email is required',
            },
            newPassword: {
                label: 'New password',
                placeholder: 'Type new password',
                required: 'Password is required',
            },
            repeatNewPassword: {
                label: 'Repeat new password',
                placeholder: 'Repeat new password',
                required: 'Confirm new password',
            },
            passwordRules: {
                validator: {
                    message: 'Passwords are not the same',
                },
            },
            registerButton: 'Register',
            validateMessages: {
                types: {
                    date: 'Date is not valid!',
                    email: 'Email is not valid!',
                },
            },
        },
        notification: {
            error: 'Error occurred while registration',
        },
        success: {
            title: 'Success',
            description:
                'We sent an email to: {email} with a link to activate your account. {br} Follow the link to finish registration.',
            loginButton: 'Log in',
        },
        failure: {
            title: 'Something went wrong',
            contact: 'Please, contact our support team',
            loginButton: 'Log in',
        },
        title: 'Registration',
    },

    root: {
        wrongPath: {
            message: "There's nothing here!",
        },
    },

    scene: {
        createObjectModal: {
            title: 'Create Scene Object',
            okText: 'Create',
            cancelText: 'Cancel',
            notification: {
                createObject: {
                    error: 'Error while creating object',
                },
                success: 'Object has been updated',
                error: 'Error while updating object',
            },
            form: {
                displayName: {
                    label: 'Display name',
                },
                rules: {
                    required: {
                        message: 'Please input Display name',
                    },
                    upload: {
                        message: 'Please upload file',
                    },
                },
                input: {
                    placeholder: 'Type object Display name',
                },
                file: {
                    label: 'File',
                    typeValidation: 'Wrong file type!',
                },
                extra: {
                    text: 'Only .gltf, .obj, .glb',
                },
                uploadButton: 'Upload',
            },
        },
        picture: {
            alt: 'Scene picture',
            uploadModal: {
                title: 'Upload picture for scene',
                okText: 'Update',
                cancelText: 'Cancel',
                update: {
                    notification: {
                        success: 'Picture has been updated',
                        error: 'Error while updating',
                    },
                },
                extra: {
                    text: 'Only .png and .jpeg file formats',
                },
                rules: {
                    required: 'Please upload file',
                },
                file: {
                    typeValidation: 'Не вірний тип файлу!',
                },
                uploadButton: ' Натисніть щоб завантажити',
            },
        },
        settingsModal: {
            title: 'Scene Settings',
            okText: 'Update',
            cancelText: 'Cancel',
            form: {
                background: {
                    label: 'Background',
                    title: 'Background',
                },
                shadowMap: {
                    label: 'Shadow Map:',
                },
            },
            upload: {
                notifications: {
                    success: 'Scene Settings have been updated',
                    error: 'Error while updating Scene Settings',
                },
            },
        },
        sceneHeader: {
            title: 'General Information',
            buttonShare: 'Share',
            build: {
                buttonBuild: 'Build',
                notification: {
                    error: 'Error while building',
                },
            },
            buttonEdit: 'Edit',
            buttonCreateObject: 'Create Object',
            description: {
                createdBy: {
                    label: 'Created by',
                },
                createdAt: {
                    label: 'Created at',
                },
                updatedAt: {
                    label: 'Updated at',
                },
                category: {
                    label: 'Category',
                    defaultText: 'No Category',
                    tooltip: {
                        add: 'Add to category',
                        edit: 'Change category',
                        remove: 'Remove the scene from category',
                    },
                },
            },
            detachCategoryModal: {
                title: 'Do you want to remove the scene from category?',
                okText: 'Yes',
                cancelText: 'No',
                notification: {
                    detachCategory: {
                        error: 'Error while remove the scene from category',
                        success: 'Scene was removed from category',
                    },
                },
            },
            menu: {
                buttonRemove: 'Remove',
                sceneSettings: 'Settings',
            },
            removeModal: {
                title: 'Do you want to remove the scene with all objects inside?',
                okText: 'Yes',
                cancelText: 'No',
                notification: {
                    removeScene: {
                        error: 'Error while deleting scene',
                    },
                },
            },
            upload: {
                notification: {
                    success: 'Picture has been updated',
                    error: 'Error while updating',
                },
            },
        },
        sceneObjects: {
            createObjectButton: {
                title: 'Create Object',
            },
            list: {
                avatar: "Object's picture",
                menu: {
                    settings: {
                        label: 'Settings',
                    },
                    edit: {
                        label: 'Edit',
                    },
                    download: {
                        label: 'Download',
                    },
                    remove: {
                        label: 'Remove',
                    },
                },
            },
            title: 'Objects',
            removeObjectsModal: {
                title: 'Do you want to remove this object from the scene?',
                okText: 'Yes',
                cancelText: 'No',
            },
            settings: {
                objectSettingsModal: {
                    title: 'Object Settings',
                    okText: 'Update',
                    cancelText: 'Cancel',
                },
                update: {
                    notification: {
                        success: 'Scene object settings have been updated',
                        error: 'Error while updating',
                    },
                },
            },
            notification: {
                removeObjects: {
                    error: 'Error while deleting object',
                },
            },
            updateObjectModal: {
                title: 'Update Scene Object',
                okText: 'Update',
                cancelText: 'Cancel',
            },
        },
        shareSceneModal: {
            title: 'Share Scene',
            okText: 'Ok',
            label: 'URL',
            jsLibrary: {
                title: 'JS library',
                inputLabel: 'Bundle ID:',
                tooltip: 'Copy Bundle ID',
                description:
                    'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, ChinaNo. 18, Wantang Road, Xihu District,\n' +
                    'Hangzhou, Zhejiang, ChinaNo. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, ChinaNo. 18',
                notification: {
                    success: 'Bundle ID has been copied!',
                },
            },
            iframe: {
                title: 'iFrame',
                tooltip: 'Copy iFrame',
                description:
                    'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, ChinaNo. 18, Wantang Road, Xihu District,\n' +
                    'Hangzhou, Zhejiang, ChinaNo. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, ChinaNo. 18',
                notification: {
                    success: 'iFrame has been copied!',
                },
            },
        },
        uploadPictureForScene: 'Upload picture for Scene',
        viewer: {
            notification: {
                success: 'Picture has been updated',
                error: 'Error while updating',
            },
            snapshotButton: {
                tooltip: 'Make new scene picture from preview',
            },
        },
    },

    scenes: {
        attachToCategoryModal: {
            attachCategoryTitle: 'Attach to Category',
            changeCategoryTitle: 'Change Category',
            okText: 'Update',
            cancelText: 'Cancel',
            notifications: {
                success: 'Scene has been updated',
                error: 'Error while updating scene',
            },
            categories: {
                notifications: {
                    error: 'Error while creating Category',
                    success: 'Category has been created',
                },
            },
            selectLabel: 'Category:',
        },
        createSceneButton: {
            createButton: 'Create',
        },
        createSceneModal: {
            title: 'Create Scene',
            okText: 'Create',
            cancelText: 'Cancel',
            createForm: {
                label: 'Display name',
                rules: {
                    required: {
                        message: 'Please input Display name',
                    },
                },
                input: {
                    placeholder: 'Type scene Display name',
                },
                category: {
                    label: 'Category',
                    placeholder: 'Choose category',
                },
            },
            notification: {
                success: 'Scene has been created',
            },
        },
        search: {
            placeholder: 'Search by display name',
        },
        select: {
            placeholder: 'All',
        },
        datePicker: {
            from: {
                placeholder: 'From',
            },
            to: {
                placeholder: 'To',
            },
        },
        clearAll: {
            button: {
                title: 'Clear all filters',
            },
        },
        columns: {
            picture: {
                title: 'Picture',
            },
            displayName: {
                title: 'Display name',
            },
            status: {
                title: 'Status',
            },
            category: {
                title: 'Category',
                popover: {
                    scenes: 'Scenes:',
                    createdBy: 'Created by:',
                },
            },
            objectsNumber: {
                title: 'Objects',
            },
            createdAt: {
                title: 'Created at',
            },
            email: {
                title: 'Created by',
                accountStatus: {
                    title: 'Account is not activated!',
                },
            },
            menuItems: {
                buttonAttachCategory: 'Attach to Category',
                buttonChangeCategory: 'Change Category',
                buttonShare: 'Share',
                buttonEdit: 'Edit',
                buttonRemove: 'Remove',
            },
        },
        editSceneModal: {
            title: 'Edit Scene',
            okText: 'Update',
            cancelText: 'Cancel',
            editForm: {
                label: 'Display name',
                rules: {
                    required: {
                        message: 'Please input Display name',
                    },
                },
            },
            notifications: {
                success: {
                    title: 'Scene has been updated',
                },
            },
        },
        pageHeader: {
            title: 'Scenes',
            removeButton: 'Remove',
        },
        pagination: {
            perPage: '/page',
        },
        removeModal: {
            message: 'Do you want to remove {count} scenes with all objects inside?',
            okText: 'Yes',
            cancelText: 'No',
        },
        removeModalSingleScene: {
            title: 'Do you want to remove the scene with all objects inside?',
            okText: 'Yes',
            cancelText: 'No',
        },
        remove: {
            success: '{count} scenes have been removed',
            error: 'Something went wrong',
        },
        section: {
            title: 'Scenes {count}',
        },
    },

    scenesTotal: {
        withoutObjects: 'scenes without objects',
        total: 'total scenes',
    },

    sidebar: {
        menu: {
            categories: {
                title: 'Categories',
            },
            scenes: {
                title: 'Scenes',
            },
            users: {
                title: 'Users',
            },
        },
    },

    header: {
        menu: {
            accountSettings: {
                label: 'Account Settings',
            },
        },
    },

    bulkUpload: {
        button: 'Upload',
        bulkUploadModal: {
            title: 'Upload files',
            uploadButton: 'Upload',
            cancelButton: 'Cancel',
            startAgainButton: 'Start Again',
            clearButton: 'Clear',
            categorySelect: {
                label: 'Category (optional):',
            },
            okButton: 'Ok',
            categories: {
                notifications: {
                    error: 'Error while creating Category',
                    success: 'Category has been created',
                },
            },
            upload: {
                label: 'Files:',
                uploadButton: {
                    loading: 'Uploading...',
                },
                text: '.gltf, .obj, .glb',
                notifications: {
                    success: `{successfullyUploaded} of {total} scenes have been created`,
                    exception: `Only {successfullyUploaded} of {total} scenes have been created`,
                    error: 'Error while uploading',
                },
            },
            transfer: {
                item: {
                    one: 'Item',
                    many: 'Items',
                },
                titles: {
                    source: 'Source',
                    target: 'Target',
                },
                notFoundContent: 'No Data',
            },
        },
    },

    users: {
        buttons: {
            add: 'Add user',
            remove: 'Remove user',
        },
        pageHeader: {
            title: 'Users',
        },
        search: {
            placeholder: 'Search by full name',
        },
        clearAll: {
            button: {
                title: 'Clear all filters',
            },
        },
        pagination: {
            perPage: '/page',
        },
        picture: {
            alt: "User's picture",
        },
        table: {
            picture: {
                title: 'Picture',
            },
            name: {
                title: 'Full name',
            },
            status: {
                title: 'Status',
            },
            roles: {
                title: 'Roles',
            },
            email: {
                title: 'Email',
            },
            createdAt: {
                title: 'Created at',
            },
            createdBy: {
                title: 'Created by',
            },
            menuItems: {
                closeAccount: 'Close account',
            },
        },
        createUserModal: {
            title: 'Create new User',
            okText: 'Create',
            cancelText: 'Cancel',
        },
        notification: {
            success: 'User has been created',
            error: 'Error occurred while creating new User',
        },
    },

    userRoleTag: {
        admin: 'A',
        editor: 'E',
    },

    createUserForm: {
        firstName: {
            label: 'First name',
            placeholder: 'Type your first name',
            required: 'First name is required',
        },
        lastName: {
            label: 'Last name',
            placeholder: 'Type your last name',
            required: 'Last name is required',
        },
        email: {
            label: 'Email',
            placeholder: 'Type your email',
            required: 'Email is required',
        },
        validateMessages: {
            types: {
                email: 'Email is not valid!',
            },
        },
    },

    validation: {
        name: {
            length: 'Min. 3 and max. 30 characters',
        },
        password: {
            message: 'Must contain min 6 and max 30 characters',
        },
    },
};
