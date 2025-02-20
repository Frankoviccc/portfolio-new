export default () => {
    setTimeout(() => {
        document.querySelectorAll('.row')[0].scrollIntoView({ behavior: 'smooth' });
    }, 50)
}