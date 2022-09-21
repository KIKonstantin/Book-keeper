const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteURLEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

function validate(nameValue, urlValue) {
    const regExp = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);
    if (!nameValue || !urlValue) {
        alert('Please fill all required fields');
        return false;
    }
    // if {
    //     alert('Please provide a valid web address');
    //     return false;
    // }
}

// Show Modal,Focus on Input
function showModal() {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

function storeBookmark(e) {
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteURLEl.value;
    if (!urlValue.includes('http://', 'https://')) {
        urlValue = `https://${urlValue.trim()}`;
    }
    if (!validate(nameValue, urlValue)) {
        return false
    }
}

// Modal Event Listeners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e) => e.target == modal ? modal.classList.remove('show-modal') : false);

bookmarkForm.addEventListener('submit', storeBookmark);