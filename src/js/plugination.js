import Pagination from 'tui-pagination';
const Pagination = tui.Pagination


const container = document.getElementById('tui-pagination-container');
console.log(container);
const options = { // below default value of options
    totalItems: 10,
    itemsPerPage: 10,
    visiblePages: 10,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
        disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
        moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                '<span class="tui-ico-ellip">...</span>' +
            '</a>'
    }
};
const pagination = new Pagination(container, options);

pagination.getCurrentPage("https://app.ticketmaster.com/discovery/v2/events.json?size=20&page=0&apikey=eXb8ULUoq4HjIKYn2xDLaMMehZFueL04");