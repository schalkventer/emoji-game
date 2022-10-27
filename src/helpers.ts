export const toggleDarkMode = (value: boolean) => {
    if (!value) document.body.classList.remove('sl-theme-dark')
    return document.body.classList.add('sl-theme-dark')
}