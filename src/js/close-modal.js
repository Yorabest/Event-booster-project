(() => {
    const refs = {
      modal: document.querySelector('.modal'),
      closeModalBtn: document.querySelector('.close')
    };
  
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();